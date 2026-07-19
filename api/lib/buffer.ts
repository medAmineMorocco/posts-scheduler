const BUFFER_URL = "https://api.buffer.com/graphql";


export async function schedulePost(
    text: string,
    scheduledAt: string,
    apiKey: string,
    channelId: string
) {

    const query = `
    mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {

        ... on PostActionSuccess {
          post {
            id
            dueAt
          }
        }

        ... on MutationError {
          message
        }

      }
    }
  `;


    const variables = {
        input: {
            text,
            channelId,
            schedulingType: "automatic",
            mode: "customScheduled",
            dueAt: scheduledAt
        }
    };


    const response = await fetch(
        BUFFER_URL,
        {
            method: "POST",

            headers: {
                Authorization:
                    `Bearer ${apiKey}`,

                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                query,
                variables
            })
        }
    );


    const result = await response.json();


    console.log(
        "Buffer response:",
        JSON.stringify(result, null, 2)
    );


    if (result.errors) {
        throw new Error(
            JSON.stringify(result.errors)
        );
    }


    const action =
        result.data?.createPost;


    if (!action) {
        throw new Error(
            "No createPost response"
        );
    }


    if (!action.post) {
        throw new Error(
            action.message ||
            "Buffer post creation failed"
        );
    }


    return action.post.id;
}