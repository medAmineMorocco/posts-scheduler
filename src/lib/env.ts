import dotenv from "dotenv";

// Load environment variables immediately on import
dotenv.config({ path: ".env.local" });
dotenv.config();

export interface EnvVarConfig {
    name: string;
    description: string;
    isSecret: boolean;
    defaultValue?: string;
    required: boolean;
}

export const APP_ENV_VARS: EnvVarConfig[] = [
    {
        name: "NOTION_API_KEY",
        description: "Notion integration API token",
        isSecret: true,
        required: true,
    },
    {
        name: "NOTION_DATABASE_ID",
        description: "Notion database ID storing scheduled posts",
        isSecret: false,
        required: true,
    },
    {
        name: "BUFFER_API_KEY_1",
        description: "Buffer API token for Account 1",
        isSecret: true,
        required: true,
    },
    {
        name: "BUFFER_PROFILE_1",
        description: "Buffer Channel/Profile ID for Account 1",
        isSecret: false,
        required: true,
    },
    {
        name: "BUFFER_API_KEY_2",
        description: "Buffer API token for Account 2",
        isSecret: true,
        required: true,
    },
    {
        name: "BUFFER_PROFILE_2",
        description: "Buffer Channel/Profile ID for Account 2",
        isSecret: false,
        required: true,
    },
    {
        name: "GEMINI_API_KEY",
        description: "Google Gemini API key for post content generation",
        isSecret: true,
        required: true,
    },
    {
        name: "GEMINI_MODEL",
        description: "Gemini AI model name",
        isSecret: false,
        defaultValue: "gemini-3.6-flash",
        required: false,
    },
    {
        name: "GROQ_API_KEY",
        description: "Groq API key used as fallback for Gemini",
        isSecret: true,
        required: false,
    },
    {
        name: "GROQ_MODEL",
        description: "Groq AI model name",
        isSecret: false,
        defaultValue: "qwen/qwen3.8-27b",
        required: false,
    },
];

function formatValue(value: string | undefined, isSecret: boolean, mask: boolean): string {
    if (!value) {
        return "[NOT SET]";
    }
    if (isSecret && mask) {
        if (value.length <= 8) {
            return "********";
        }
        return `${value.slice(0, 4)}...${value.slice(-4)} (${value.length} chars)`;
    }
    return value;
}

export function printEnvVariables(options: { mask?: boolean } = {}): void {
    const shouldMask = options.mask ?? (process.env.SHOW_ENV_SECRETS !== "true");

    console.log("==================== [ENV] APP CONFIGURATION ====================");
    for (const item of APP_ENV_VARS) {
        const rawValue = process.env[item.name];
        const displayValue = formatValue(rawValue || item.defaultValue, item.isSecret, shouldMask);
        const status = rawValue ? "OK" : item.defaultValue ? `DEFAULT (${item.defaultValue})` : "MISSING";
        const tag = status === "MISSING" && item.required ? "[!] MISSING" : `[${status}]`;

        console.log(`[env] ${item.name.padEnd(20)} : ${displayValue} ${tag}`);
    }
    console.log("=================================================================");
}

const isDirectExecution =
    import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/")}` ||
    process.argv[1]?.endsWith("env.ts") ||
    process.argv[1]?.endsWith("env.js");

if (isDirectExecution) {
    printEnvVariables();
}

