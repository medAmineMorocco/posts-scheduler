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
    "05:00",
    "07:00",
    "09:00",
    "11:00",
    "13:00",
    "15:00",
    "17:00",
    "19:00",
    "21:00"
];

function getStartDate(): Date {
    const start = new Date();

    // Remove time part
    start.setHours(0, 0, 0, 0);

    // Tomorrow
    start.setDate(start.getDate() + 1);

    return start;
}

function buildPublishDate(date: Date, time: string): string {
    const [hours, minutes] = time.split(":").map(Number);

    const publishDate = new Date(date);

    publishDate.setHours(hours, minutes, 0, 0);

    return publishDate.toISOString();
}

export async function GET() {

    const startDate = getStartDate();

    const posts = await generatePosts();

    for (let i = 0; i < posts.length; i++) {
        const day = Math.floor(i / 20);

        const order = (i % 20) + 1;

        const currentDay = new Date(startDate);

        currentDay.setDate(startDate.getDate() + day);

        const publishAt = buildPublishDate(
            currentDay,
            TIME_SLOTS[order - 1]
        );

        await insertPost(
            posts[i],
            publishAt,
            order
        );
    }

}