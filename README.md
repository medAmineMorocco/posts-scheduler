# posts-scheduler

Automated social media post scheduler and content generator powered by Notion, Buffer, Gemini AI, and GitHub Actions.

## Overview

This project automatically manages scheduled posts for WorktreeWise:
1. **Daily Scheduler (`src/schedule.ts`)**: Runs every day at 00:00 UTC via GitHub Actions. It fetches ready posts from a Notion database, schedules up to 10 posts for account 1 and up to 10 posts for account 2 via Buffer API, and marks them as scheduled in Notion.
2. **Auto-Replenish**: If no ready posts remain in Notion after scheduling, it automatically calls the post generator to generate and insert 140 new posts.
3. **On-Demand Generation (`src/generate-posts.ts`)**: Generates and inserts new posts using Google Gemini AI, calculating appropriate publishing time slots across days.

---

## GitHub Actions Workflows

The project runs directly on GitHub Actions runners (migrated from Vercel):

| Workflow | File | Trigger | Description |
| :--- | :--- | :--- | :--- |
| **Schedule Posts** | `.github/workflows/schedule.yml` | Daily at `00:00 UTC` & manual (`workflow_dispatch`) | Runs the daily Buffer post scheduler and auto-generates posts if the queue is empty. |
| **Generate Posts** | `.github/workflows/generate-posts.yml` | Manual (`workflow_dispatch`) | Generates a fresh batch of posts and inserts them into Notion on demand. |

### Required GitHub Secrets

To allow the workflows to execute successfully, configure the following secrets in your GitHub repository (**Settings > Secrets and variables > Actions > Repository secrets**):

- `NOTION_API_KEY`: Notion integration API key / token.
- `NOTION_DATABASE_ID`: Notion database ID where posts are stored.
- `BUFFER_API_KEY_1`: Buffer API token for the first profile.
- `BUFFER_PROFILE_1`: Buffer channel/profile ID for the first account.
- `BUFFER_API_KEY_2`: Buffer API token for the second profile.
- `BUFFER_PROFILE_2`: Buffer channel/profile ID for the second account.
- `GEMINI_API_KEY`: Google Gemini API key used for post content generation.

---

## Local Development & Testing

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create or update `.env.local` (ignored by git):

```env
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_notion_database_id
BUFFER_API_KEY_1=your_buffer_key_1
BUFFER_PROFILE_1=your_buffer_profile_1
BUFFER_API_KEY_2=your_buffer_key_2
BUFFER_PROFILE_2=your_buffer_profile_2
GEMINI_API_KEY=your_gemini_api_key
```

### 3. Available Scripts

- **Run Scheduler locally**:
  ```bash
  npm run schedule:local
  # or
  npm run schedule
  ```
- **Run Post Generation locally**:
  ```bash
  npm run generate:local
  # or
  npm run generate
  ```
- **Typecheck code**:
  ```bash
  npm run typecheck
  ```
