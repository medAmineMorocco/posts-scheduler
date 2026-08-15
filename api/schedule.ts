import {
    getReadyPosts,
    markScheduled
}
    from './lib/notion.js';


import {
    schedulePost
}
    from './lib/buffer.js';


export async function GET() {
    console.log("[schedule.GET] Request started");

    try {
    const posts = await getReadyPosts();

    console.log("[schedule.GET] Ready posts loaded", { count: posts.length });


    const firstAccount =
        posts.slice(
            0,
            10
        );


    const secondAccount =
        posts.slice(
            10,
            20
        );


    let scheduled = 0;


    async function publish(
        post: any,
        apiKey: string,
        profile: string
    ) {
        console.log("[schedule.publish] Publishing post", {
            postId: post.id,
            publishAt: post.publishAt,
            profile
        });
        try {


            const bufferId =
                await schedulePost(
                    post.text,

                    post.publishAt,

                    apiKey,

                    profile
                );


            await markScheduled(
                post.id,

                bufferId
            );


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

            process.env
                .BUFFER_API_KEY_1!,

            process.env
                .BUFFER_PROFILE_1!,
        );

    }


    for (const post of secondAccount) {

        await publish(
            post,

            process.env
                .BUFFER_API_KEY_2!,

            process.env
                .BUFFER_PROFILE_2!,
        );

    }


    console.log("[schedule.GET] Request completed", { scheduled });

    return Response.json({

        scheduled

    });
    } catch (error) {
        console.error("[schedule.GET] Request failed", { error });
        throw error;
    }
}
