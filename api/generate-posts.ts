import { generatePosts } from './lib/gemini.js';
import { insertPost } from "./lib/notion.js";

const TIME_SLOTS = [
    "02:00",
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
    "23:00",

    "03:00",
    "07:00",
    "09:00",
    "11:00",
    "13:00",
    "15:00",
    "17:00",
    "19:00",
    "21:00",
    "23:00"
];

function getStartDate(): Date {
    console.log("[getStartDate] Calculating the next scheduling date");
    const start = new Date();

    // Remove time part
    start.setHours(0, 0, 0, 0);

    // Tomorrow
    start.setDate(start.getDate() + 1);

    console.log("[getStartDate] Scheduling starts", { startDate: start.toISOString() });
    return start;
}

function buildPublishDate(date: Date, time: string): string {
    console.log("[buildPublishDate] Building publish date", {
        date: date.toISOString(),
        time
    });
    const [hours, minutes] = time.split(":").map(Number);

    const publishDate = new Date(date);

    publishDate.setHours(hours, minutes, 0, 0);

    const result = publishDate.toISOString();
    console.log("[buildPublishDate] Publish date built", { publishAt: result });
    return result;
}

export async function GET() {
    console.log("[generate-posts.GET] Request started");

    try {
        const startDate = getStartDate();
        const posts = await generatePosts();

        console.log("[generate-posts.GET] Posts generated", { count: posts.length });

        for (let i = 0; i < posts.length; i++) {
            const day = Math.floor(i / 20);
            const order = i + 1;
            const currentDay = new Date(startDate);

            currentDay.setDate(startDate.getDate() + day);

            const publishAt = buildPublishDate(currentDay, TIME_SLOTS[i % 20]);

            console.log("[generate-posts.GET] Inserting post", { order, publishAt });
            await insertPost(posts[i], publishAt, order);
        }

        console.log("[generate-posts.GET] Request completed", { inserted: posts.length });
    } catch (error) {
        console.error("[generate-posts.GET] Request failed", { error });
        throw error;
    }
}
