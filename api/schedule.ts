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


    const posts =
        await getReadyPosts();


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


        } catch (error) {


            console.error(
                "Failed:",
                post.text,
                error
            );


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


    return Response.json({

        scheduled

    });


}