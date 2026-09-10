import { buildWorktreeWisePrompt, getMediaAssetUrl, resolveRelevantMedia } from "./worktreewisePrompt.js";

export interface GeneratedPost {
    text: string;
    mediaId?: string | null;
    mediaUrl?: string | null;
}

export const WORKTREEWISE_TAGS = "#Git · #DevTools · #AICoding";
export const DEFAULT_WORKTREEWISE_URL = "https://www.worktreewise.com";

const WORKTREEWISE_URL_REGEX = /https:\/\/(?:www\.)?worktreewise\.com[^\s]*|https:\/\/docs\.worktreewise\.com[^\s]*/i;
const LEGACY_TAGS_REGEX = /#Git\s+#GitHub\s+#DevTools/gi;
const TARGET_TAGS_REGEX = /#Git\s*[·•-]?\s*#DevTools\s*[·•-]?\s*#AICoding/gi;

export function formatPostText(rawText: string, ctaUrl?: string | null): string {
    let text = rawText || "";

    // 1. Detect if a WorktreeWise URL already exists in text or ctaUrl
    let url = ctaUrl && WORKTREEWISE_URL_REGEX.test(ctaUrl) ? ctaUrl.trim() : null;
    const match = text.match(WORKTREEWISE_URL_REGEX);
    if (match) {
        if (!url) url = match[0];
        text = text.replace(match[0], "");
    }
    if (!url) {
        url = DEFAULT_WORKTREEWISE_URL;
    }

    // 2. Remove legacy or existing target tags from text to avoid duplication
    text = text.replace(LEGACY_TAGS_REGEX, "").replace(TARGET_TAGS_REGEX, "");

    // 3. Clean up trailing/leading whitespace and trailing dashes or commas
    text = text.trim().replace(/[\s\-,.]+$/, (match) => {
        // preserve sentence-ending periods, strip loose dashes/spaces
        return match.trim() === "." ? "." : "";
    }).trim();

    // 4. Ensure character limit (guaranteed <= 280 chars)
    // On X, URLs count as 23 chars, but to ensure strict compliance across all validators,
    // we also guarantee raw string length <= 280 characters.
    const suffixLength = url.length + WORKTREEWISE_TAGS.length + 3;
    const maxBodyLength = Math.max(120, 280 - suffixLength - 3);

    if (text.length > maxBodyLength) {
        text = text.slice(0, maxBodyLength).replace(/\s+\S*$/, "") + "...";
    }

    return `${text}\n\n${url}\n${WORKTREEWISE_TAGS}`;
}

async function requestBatchFromGemini(count: number, recentPostTexts: string[] = []): Promise<GeneratedPost[]> {
    const enrichedPrompt = buildWorktreeWisePrompt(recentPostTexts, count);
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is missing");
    }

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: enrichedPrompt
                            }
                        ]
                    }
                ]
            })
        }
    );

    const json = await response.json();

    if (!response.ok) {
        throw new Error(JSON.stringify(json));
    }

    const text = json.candidates[0].content.parts[0].text;

    const cleaned = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    const parsed = JSON.parse(cleaned);

    return (parsed.posts || []).map((p: any) => {
        const media = resolveRelevantMedia({
            text: p.text,
            feature: p.feature,
            category: p.category,
            mediaId: p.mediaId
        });
        const formattedText = formatPostText(p.text, p.ctaUrl);

        return {
            text: formattedText,
            mediaId: media.mediaId,
            mediaUrl: media.mediaUrl
        };
    });
}

export async function generatePosts(targetCount: number = 140): Promise<GeneratedPost[]> {
    console.log(`[generatePosts] Generating exactly ${targetCount} posts`);

    const accumulatedPosts: GeneratedPost[] = [];
    let attempts = 0;
    const maxAttempts = 3;

    while (accumulatedPosts.length < targetCount && attempts < maxAttempts) {
        attempts++;
        const remainingNeeded = targetCount - accumulatedPosts.length;
        console.log(`[generatePosts] Batch attempt ${attempts}: requesting ${remainingNeeded} posts`);

        try {
            const batch = await requestBatchFromGemini(
                remainingNeeded,
                accumulatedPosts.map((p) => p.text)
            );

            accumulatedPosts.push(...batch);
            console.log(`[generatePosts] Accumulated ${accumulatedPosts.length}/${targetCount} posts`);
        } catch (error) {
            console.error(`[generatePosts] Batch attempt ${attempts} failed:`, error);
            if (accumulatedPosts.length === 0 && attempts >= maxAttempts) {
                throw error;
            }
            break;
        }
    }

    if (accumulatedPosts.length < targetCount) {
        console.warn(
            `[generatePosts] Could only generate ${accumulatedPosts.length} posts out of requested ${targetCount}`
        );
    }

    const exactPosts = accumulatedPosts.slice(0, targetCount);
    console.log(`[generatePosts] Final count: ${exactPosts.length} posts`);
    return exactPosts;
}
