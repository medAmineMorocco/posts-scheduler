export async function generatePosts(
): Promise<string[]> {

    const fullPrompt = `
You are an expert social media copywriter specialized in creating viral X (Twitter) content for developer tools and SaaS products.

Generate exactly 140 X (Twitter) posts.

Topic:
WorktreeWise, Git worktrees, developer productivity, modern Git workflows, parallel development, AI coding workflows, and software engineering productivity.

Knowledge sources:
Use these websites as your knowledge base:
- https://www.worktreewise.com
- https://docs.worktreewise.com/

Understand and use information from these websites about:
- WorktreeWise features
- Git worktree concepts
- Developer pain points
- Real-world workflows
- How WorktreeWise improves development productivity

About WorktreeWise:

WorktreeWise is a desktop productivity tool that helps developers manage Git worktrees easily.

Promote and educate about features such as:
- Creating and managing Git worktrees
- Working on multiple branches simultaneously
- Avoiding constant git checkout and git stash workflows
- Opening worktrees directly in IDEs and terminals
- Automating setup with hooks and workflows
- Managing repositories more efficiently
- Improving developer productivity
- Supporting modern AI-assisted coding workflows

Target audience:
- Software developers
- Backend engineers
- Frontend engineers
- Full-stack developers
- DevOps engineers
- Open-source contributors
- AI coding enthusiasts
- Engineering teams

Content strategy:

The posts should not only advertise WorktreeWise.
Use an 80/20 balance:

80%:
- Educate developers about Git worktrees
- Share Git productivity tips
- Explain better development workflows
- Teach concepts developers may not know
- Highlight common Git frustrations
- Explain AI coding + worktree workflows
- Share practical engineering insights

20%:
- Naturally promote WorktreeWise
- Explain how WorktreeWise solves developer problems
- Highlight specific features
- Encourage developers to try it

Writing style:

Create viral developer-focused posts optimized for X.

Use:
- Strong hooks
- Curiosity gaps
- Contrarian opinions
- Developer frustrations
- Before/after comparisons
- Short technical explanations
- Practical tips
- Shareable insights

Examples of hook styles:

"Most developers use Git every day but ignore this feature..."

"Stop using git stash like this."

"Git has a feature that feels like magic."

"Your Git workflow is probably slowing you down."

"AI coding agents made Git worktrees more important than ever."

"Most developers don't know they can do this with Git."

"Branches are not the problem. Your workflow is."

Avoid:
- Generic marketing language
- Corporate tone
- Fake statistics
- Excessive emojis
- Empty motivational content
- Repetitive ideas
- Direct sales pitches in every post

Content categories to mix:

1. Git worktree education:
- What are Git worktrees?
- Why use them?
- Git worktree commands
- Common use cases
- Benefits compared to branch switching

2. Developer productivity:
- Faster workflows
- Context switching problems
- Managing multiple tasks
- Working on features and bugs simultaneously

3. AI coding workflows:
- Using Git worktrees with AI coding agents
- Running multiple coding experiments safely
- Parallel development with AI assistants

4. WorktreeWise features:
- Worktree management
- IDE integration
- Terminal integration
- Hooks
- Workflows
- Git history visualization
- Developer automation

5. Viral opinion posts:
- Strong developer opinions
- Industry observations
- Challenging common workflows

6. Educational mini tutorials:
- Simple Git tips
- Workflow examples
- Commands
- Best practices

Rules:

- Generate exactly 140 posts.
- Maximum 280 characters per post.
- Keep line breaks inside posts when useful.
- Don't number the posts.
- Don't use markdown.
- Every post must be unique.
- Every post must provide value to developers.
- Make posts suitable for X engagement.
- Use hashtags only when they add value.
- Include links only occasionally and naturally:
  - https://www.worktreewise.com
  - https://docs.worktreewise.com/
- Always add these tags at the end of the post: #Git #GitHub #DevTools  

Return ONLY valid JSON.

Format:

{
  "posts":[
    {
      "text":"..."
    }
  ]
}
`;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
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
                                text: fullPrompt
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

    const text =
        json.candidates[0]
            .content.parts[0]
            .text;

    const cleaned = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    const parsed = JSON.parse(cleaned);

    return parsed.posts.map(
        (p: any) => p.text
    );

}