import { buildWorktreeWisePrompt, getMediaAssetUrl, resolveRelevantMedia } from "./worktreewisePrompt.js";

export interface GeneratedPost {
    text: string;
    mediaId?: string | null;
    mediaUrl?: string | null;
    tags?: string[];
}

export const DEFAULT_WORKTREEWISE_URL = "https://www.worktreewise.com";
export const DEFAULT_FALLBACK_TAGS = ["#Git", "#DevTools"];
// Backward-compatibility export
export const WORKTREEWISE_TAGS = DEFAULT_FALLBACK_TAGS.join(" ");

const WORKTREEWISE_URL_REGEX = /https:\/\/(?:www\.)?worktreewise\.com[^\s]*|https:\/\/docs\.worktreewise\.com[^\s]*/i;
const LEGACY_TAGS_REGEX = /#Git\s+#GitHub\s+#DevTools/gi;
const TARGET_TAGS_REGEX = /#Git\s*[·•-]?\s*#DevTools\s*[·•-]?\s*#AICoding/gi;

export function normalizeTags(tagsInput?: string[] | string | null): string[] {
    if (!tagsInput) return [];
    const rawList = Array.isArray(tagsInput)
        ? tagsInput
        : tagsInput.split(/[\s,·•]+/);

    const tags: string[] = [];
    for (const item of rawList) {
        const clean = item.trim().replace(/^[#]+/, "");
        if (clean && /^[A-Za-z0-9_]+$/.test(clean)) {
            const formatted = `#${clean}`;
            if (!tags.includes(formatted)) {
                tags.push(formatted);
            }
        }
    }
    return tags;
}

export function extractTagsFromText(text: string): string[] {
    const matches = text.match(/#[A-Za-z0-9_]+/g);
    if (!matches) return [];
    const unique: string[] = [];
    for (const m of matches) {
        if (!unique.includes(m)) {
            unique.push(m);
        }
    }
    return unique;
}

export function formatPostText(
    rawText: string,
    ctaUrl?: string | null,
    tagsInput?: string[] | string | null
): string {
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

    // 2. Resolve tags: prioritize explicit tagsInput, then extract from rawText, fallback to DEFAULT_FALLBACK_TAGS
    const providedTags = normalizeTags(tagsInput);
    const existingTagsInText = extractTagsFromText(text);

    const resolvedTags =
        providedTags.length > 0
            ? providedTags
            : existingTagsInText.length > 0
            ? existingTagsInText
            : DEFAULT_FALLBACK_TAGS;

    // Limit to 4 hashtags maximum
    const finalTags = resolvedTags.slice(0, 4);
    const formattedTags = finalTags.join(" ");

    // 3. Remove legacy tag blocks and trailing hashtags from body text
    text = text.replace(LEGACY_TAGS_REGEX, "").replace(TARGET_TAGS_REGEX, "");

    // Strip trailing hashtags and separators at the end of the text
    while (/(?:[\s·•\-,]+#[A-Za-z0-9_]+)+\s*$/i.test(text)) {
        text = text.replace(/(?:[\s·•\-,]+#[A-Za-z0-9_]+)+\s*$/i, "");
    }

    // Clean loose middle dots, bullets, or hanging separators left over from previous formats
    text = text.replace(/[·•]/g, " ").replace(/[ \t]+/g, " ");

    // 4. Clean up trailing/leading whitespace and trailing dashes or commas
    text = text
        .trim()
        .replace(/[\s\-,:]+$/, "")
        .trim();

    // 5. Ensure character limit (guaranteed <= 280 chars)
    // Suffix is "\n\n" + url + "\n" + formattedTags
    const suffix = `\n\n${url}\n${formattedTags}`;
    const maxBodyLength = Math.max(100, 280 - suffix.length);

    if (text.length > maxBodyLength) {
        text = text.slice(0, maxBodyLength).replace(/\s+\S*$/, "").trim() + "...";
    }

    return `${text}${suffix}`;
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
        const formattedText = formatPostText(p.text, p.ctaUrl, p.tags);

        return {
            text: formattedText,
            mediaId: media.mediaId,
            mediaUrl: media.mediaUrl,
            tags: normalizeTags(p.tags).length > 0 ? normalizeTags(p.tags) : undefined
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
