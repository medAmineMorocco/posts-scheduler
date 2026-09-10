import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
dotenv.config();

import {
    getReadyPosts, getReadyPostsSize,
    markScheduled
} from './lib/notion.js';

import {
    schedulePost
} from './lib/buffer.js';
import { generateAndInsertPosts } from "./generate-posts.js";
import { formatPostText } from "./lib/gemini.js";

export async function schedulePosts(): Promise<{ scheduled: number }> {
    console.log("[schedule] Starting schedule job");

    try {
        const posts = await getReadyPosts();

        console.log("[schedule] Ready posts loaded", { count: posts.length });

        const firstAccount = posts.slice(0, 10);
        const secondAccount = posts.slice(10, 20);

        let scheduled = 0;

        async function publish(
            post: any,
            apiKey: string,
            profile: string
        ) {
            const normalizedMediaUrl = post.mediaUrl
                ? post.mediaUrl.replace("https://worktreewise.com/images/worktreewise/", "https://worktreewise.com/images/v1.1.0/")
                : null;

            console.log("[schedule.publish] Publishing post", {
                postId: post.id,
                publishAt: post.publishAt,
                profile,
                mediaUrl: normalizedMediaUrl
            });
            try {
                const formattedText = formatPostText(post.text);

                const bufferId = await schedulePost(
                    formattedText,
                    post.publishAt,
                    apiKey,
                    profile,
                    normalizedMediaUrl
                );

                await markScheduled(post.id, bufferId);

                scheduled++;

                console.log("[schedule.publish] Post scheduled", {
                    postId: post.id,
                    bufferId
                });
            } catch (error) {
                console.error("[schedule.publish] Failed to schedule post", {
                    postId: post.id,
                    error
                });
            }
        }

        for (const post of firstAccount) {
            await publish(
                post,
                process.env.BUFFER_API_KEY_1!,
                process.env.BUFFER_PROFILE_1!
            );
        }

        for (const post of secondAccount) {
            await publish(
                post,
                process.env.BUFFER_API_KEY_2!,
                process.env.BUFFER_PROFILE_2!
            );
        }

        console.log("[schedule] Scheduling batch completed", { scheduled });

        const readyPostsSize = await getReadyPostsSize();

        if (readyPostsSize === 0) {
            console.log('[schedule] No ready posts remaining, generating 140 posts');
            await generateAndInsertPosts();
        }

        return { scheduled };
    } catch (error) {
        console.error("[schedule] Execution failed", { error });
        throw error;
    }
}

// Backward compatibility with previous API signature
export async function GET() {
    const result = await schedulePosts();
    return Response.json(result);
}

// Execute directly if run via CLI
const isDirectExecution =
    import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/")}` ||
    process.argv[1]?.endsWith("schedule.ts") ||
    process.argv[1]?.endsWith("schedule.js");

if (isDirectExecution) {
    schedulePosts()
        .then((res) => {
            console.log("[schedule] Script finished successfully", res);
            process.exit(0);
        })
        .catch((err) => {
            console.error("[schedule] Fatal error during execution", err);
            process.exit(1);
        });
}
