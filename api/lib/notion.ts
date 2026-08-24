import {Client} from "@notionhq/client";


export const notion = new Client({
    auth: process.env.NOTION_API_KEY
});

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!;


function extractRichText(property: any) {
    console.log("[extractRichText] Extracting rich text", {
        itemCount: property.rich_text.length
    });

    const text = property.rich_text
        .map((item: any) => item.plain_text)
        .join("");

    console.log("[extractRichText] Rich text extracted", { textLength: text.length });
    return text;

}



export async function getReadyPosts() {
    console.log("[getReadyPosts] Querying ready posts");

    try {
        const startOfToday = new Date();
        startOfToday.setUTCHours(0, 0, 0, 0);
    const result =
        await notion.databases.query({

            database_id: NOTION_DATABASE_ID,


            filter: {

                and: [
                    {
                        property: "Status",
                        select: {
                            equals: "Ready"
                        }
                    },
                    {
                        property: "Publish At",
                        date: {
                            on_or_after: startOfToday.toISOString()
                        }
                    }
                ]

            },


            sorts: [

                {
                    property: "order",

                    direction: "ascending"

                }

            ],


            page_size: 20

        });


    const posts = result.results.map(
        (page: any) => ({

            id: page.id,


            text:
                extractRichText(
                    page.properties.Post
                ),


            publishAt:
                    page.properties[
                        "Publish At"
                        ].date.start

        })
    );

    posts.forEach((post) => {
        console.log("[getReadyPosts] Ready post", {
            postId: post.id,
            publishAt: post.publishAt,
            text: post.text,
            databaseId: NOTION_DATABASE_ID
        });
    });

    console.log("[getReadyPosts] Ready posts loaded", { count: posts.length });
    return posts;
    } catch (error) {
        console.error("[getReadyPosts] Failed to load ready posts", { error });
        throw error;
    }

}

export async function getReadyPostsSize(): Promise<number> {
    const response = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,

        page_size: 1,

        filter: {
            property: 'Status',
            select: {
                equals: 'ready',
            },
        },
    });

    return response.results.length;
}


export async function markScheduled(
    pageId: string,
    bufferId: string
) {
    console.log("[markScheduled] Updating post", { pageId, bufferId });

    try {
    await notion.pages.update({

        page_id: pageId,


        properties: {


            Status: {

                select: {

                    name: "Scheduled"

                }

            },


            "Buffer ID": {

                rich_text: [

                    {

                        text: {

                            content: bufferId

                        }

                    }

                ]

            }

        }

    });

    console.log("[markScheduled] Post updated", { pageId, bufferId });
    } catch (error) {
        console.error("[markScheduled] Failed to update post", { pageId, error });
        throw error;
    }


}

export async function insertPost(
    text: string,
    publishAt: string,
    order: number
) {
    console.log("[insertPost] Creating post", {
        order,
        publishAt,
        textLength: text.length
    });

    try {
    await notion.pages.create({

        parent: {

            database_id:
                NOTION_DATABASE_ID

        },

        properties: {

            Post: {

                rich_text: [
                    {
                        text: {
                            content: text
                        }
                    }
                ]

            },

            "Publish At": {

                date: {
                    start: publishAt
                }

            },

            order: {

                number: order

            },

            Status: {

                select: {

                    name: "Ready"

                }

            }

        }

    });

    console.log("[insertPost] Post created", { order, publishAt });
    } catch (error) {
        console.error("[insertPost] Failed to create post", {
            order,
            publishAt,
            error
        });
        throw error;
    }

}
