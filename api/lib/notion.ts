import {Client} from "@notionhq/client";


export const notion = new Client({
    auth: process.env.NOTION_API_KEY
});


function extractRichText(property: any) {

    return property.rich_text
        .map((item: any) => item.plain_text)
        .join("");

}



export async function getReadyPosts() {


    const result =
        await notion.databases.query({

            database_id: process.env.NOTION_DATABASE_ID!,


            filter: {

                property: "Status",

                select: {

                    equals: "Ready"

                }

            },


            sorts: [

                {
                    property: "order",

                    direction: "ascending"

                }

            ],


            page_size: 20

        });


    return result.results.map(
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

}


export async function markScheduled(
    pageId: string,
    bufferId: string
) {


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


}