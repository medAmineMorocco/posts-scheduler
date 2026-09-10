const POST_COUNT = 140;

export interface MediaAsset {
    id: string;
    filename: string;
    type: "image";
    path: string;
    description: string;
    features: string[];
    keywords: string[];
    whenToUse: string;
}

const BASE_IMAGE_URL = "https://worktreewise.com/images/v1.1.0";

export const MEDIA_ASSETS: MediaAsset[] = [
    {
        id: "git-log",
        filename: "01-git-log.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/01-git-log.png`,
        description: "WorktreeWise visual Git commit graph and history log with the Author column hidden",
        features: ["git_log", "commit_history", "visual_graph"],
        keywords: ["git log", "commit graph", "commit history", "history", "graph", "visual graph", "inspect log", "commit log"],
        whenToUse: "Use ONLY for posts discussing the visual Git log, inspecting commit history, or viewing branch graphs visually."
    },
    {
        id: "git-log-columns",
        filename: "02-git-log-columns.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/02-git-log-columns.png`,
        description: "WorktreeWise Git log column controls showing how to hide or customize columns like Author, Date, Hash",
        features: ["git_log", "column_configuration", "custom_columns"],
        keywords: ["column", "columns", "hide author", "customize columns", "author column", "date column", "declutter log"],
        whenToUse: "Use ONLY for posts discussing customizing Git log columns, decluttering the commit log, or toggling author/date columns."
    },
    {
        id: "git-diff",
        filename: "03-git-diff.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/03-git-diff.png`,
        description: "WorktreeWise visual Git diff side-by-side comparison between commits, branches, or worktrees",
        features: ["git_diff", "code_review", "diff_comparison"],
        keywords: ["diff", "git diff", "side by side", "compare", "code review", "diffing", "inspect changes"],
        whenToUse: "Use ONLY for posts discussing visual Git diffs, comparing worktrees or commits side-by-side."
    },
    {
        id: "worktree-overview",
        filename: "04-worktree-overview.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/04-worktree-overview.png`,
        description: "WorktreeWise main dashboard overview showing multiple active linked worktrees, active branches, clean status, and repo health",
        features: ["worktree_overview", "worktree_list", "multi_worktree", "dashboard", "worktree_status"],
        keywords: ["overview", "dashboard", "list worktrees", "multiple worktrees", "manage worktrees", "worktree list", "switch worktrees", "worktree statuses", "active worktrees", "repo health"],
        whenToUse: "Use for posts showcasing managing multiple parallel worktrees at a glance or overall worktree visibility."
    },
    {
        id: "workflows",
        filename: "05-workflows.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/05-workflows.png`,
        description: "WorktreeWise workflows dashboard showing configured automation tasks and parallel command executions",
        features: ["workflows", "automation", "parallel_execution"],
        keywords: ["workflow", "workflows", "automation", "parallel execution", "automated tasks", "run scripts", "tasks dashboard", "setup tasks"],
        whenToUse: "Use ONLY for posts discussing workflows dashboard, automating repeatable tasks, or running build/test suites."
    },
    {
        id: "workflow-add",
        filename: "06b-add-workflow-configured.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/06b-add-workflow-configured.png`,
        description: "Add Workflow modal configured with automated npm install, build, and test command steps",
        features: ["workflows", "add_workflow", "automated_setup"],
        keywords: ["add workflow", "configure workflow", "workflow steps", "setup commands", "new workflow"],
        whenToUse: "Use ONLY for posts discussing configuring or adding new repeatable workflow scripts."
    },
    {
        id: "workflow-import",
        filename: "06c-import-workflow-action.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/06c-import-workflow-action.png`,
        description: "Import Workflow action to quickly reuse existing workflows across repositories",
        features: ["workflows", "workflow_import"],
        keywords: ["import workflow", "reuse workflow", "share workflow"],
        whenToUse: "Use ONLY for posts discussing importing or sharing workflows across projects."
    },
    {
        id: "workflow-edit",
        filename: "06d-edit-workflow.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/06d-edit-workflow.png`,
        description: "Edit Workflow drawer showing command sequences, environment variables, and execution triggers",
        features: ["workflows", "workflow_editing"],
        keywords: ["edit workflow", "modify workflow", "workflow commands", "workflow drawer"],
        whenToUse: "Use ONLY for posts discussing tweaking or editing workflow steps."
    },
    {
        id: "create-from-head",
        filename: "07-create-worktree-from-head.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/07-create-worktree-from-head.png`,
        description: "Create Worktree modal creating a new branch and linked worktree directly from HEAD",
        features: ["create_worktree", "from_head", "new_branch"],
        keywords: ["from head", "create from head", "new branch", "checkout head", "branch from head"],
        whenToUse: "Use ONLY for posts discussing creating a fresh worktree and branch from HEAD."
    },
    {
        id: "create-worktree-configured",
        filename: "08-create-worktree-configured.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/08-create-worktree-configured.png`,
        description: "Create Worktree dialog with realistic branch name, auto-generated folder path, and pre-selected options",
        features: ["create_worktree", "worktree_path", "branch_creation"],
        keywords: ["create worktree", "worktree path", "destination folder", "add worktree", "worktree dialog", "folder path"],
        whenToUse: "Use ONLY for posts demonstrating the general Create Worktree dialog with auto-generated paths."
    },
    {
        id: "create-worktree-hooks",
        filename: "09-create-worktree-hooks.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/09-create-worktree-hooks.png`,
        description: "Create Worktree modal showing configured post-creation lifecycle hooks (e.g. npm install, env setup)",
        features: ["create_worktree", "worktree_hooks", "setup_scripts", "post_checkout"],
        keywords: ["hooks", "hook", "lifecycle", "post-creation", "automated setup", "setup script", "setup hooks", "npm install", "post-checkout"],
        whenToUse: "Use ONLY for posts discussing post-creation hooks and automated worktree initialization scripts."
    },
    {
        id: "create-sparse-checkout",
        filename: "10-create-worktree-sparse-checkout.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/10-create-worktree-sparse-checkout.png`,
        description: "Sparse checkout configuration during worktree creation to check out only selected monorepo subfolders, saving disk space",
        features: ["sparse_checkout", "disk_savings", "monorepo"],
        keywords: ["sparse checkout", "sparse", "monorepo", "disk space", "partial checkout", "subfolder", "subdirectories"],
        whenToUse: "Use ONLY for posts discussing sparse checkout, monorepos, and checking out specific subdirectories to save disk space."
    },
    {
        id: "create-share-node-modules",
        filename: "11-create-worktree-share-node-modules.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/11-create-worktree-share-node-modules.png`,
        description: "Share node_modules option when creating a worktree to prevent redundant npm/pnpm/yarn downloads and save gigabytes of disk space",
        features: ["share_node_modules", "node_modules", "disk_savings", "dependencies"],
        keywords: ["share node_modules", "node_modules", "dependencies", "gigabytes", "disk space", "duplicate packages", "pnpm", "npm"],
        whenToUse: "Use ONLY for posts discussing sharing node_modules, saving disk space across worktrees, or avoiding repetitive dependency installs."
    },
    {
        id: "create-environment-isolation",
        filename: "12-create-worktree-environment-isolation.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/12-create-worktree-environment-isolation.png`,
        description: "Environment isolation settings (.env files, isolated ports, independent configs) configured per worktree",
        features: ["environment_isolation", "env_variables", "isolated_setup", "ports"],
        keywords: ["environment isolation", ".env", "isolation", "isolated", "port conflict", "env vars", "env parameters", "isolated environment", "localhost", "environment variables"],
        whenToUse: "Use ONLY for posts discussing environment isolation, managing distinct .env files, or avoiding port collisions across branches."
    },
    {
        id: "create-from-local-branch",
        filename: "13-create-worktree-from-local-branch.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/13-create-worktree-from-local-branch.png`,
        description: "Create a worktree from an existing local Git branch with a single click",
        features: ["create_worktree", "from_local_branch", "branch_switching"],
        keywords: ["existing branch", "local branch", "from branch", "branch switching", "switch branches", "local branches"],
        whenToUse: "Use ONLY for posts discussing creating a worktree from an existing local branch."
    },
    {
        id: "create-from-remote-branch",
        filename: "14-create-worktree-from-remote-branch.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/14-create-worktree-from-remote-branch.png`,
        description: "Create a worktree directly from a remote origin branch without manual fetch or tracking setup",
        features: ["create_worktree", "from_remote_branch", "remote_branches"],
        keywords: ["remote branch", "origin", "remote", "track remote", "pr branch", "remote branches"],
        whenToUse: "Use ONLY for posts discussing checking out remote branches directly into worktrees."
    },
    {
        id: "create-from-tag",
        filename: "15-create-worktree-from-tag.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/15-create-worktree-from-tag.png`,
        description: "Create a worktree pinned to a specific Git release tag to inspect or hotfix older releases",
        features: ["create_worktree", "from_tag", "git_tags", "hotfix"],
        keywords: ["tag", "tags", "release tag", "hotfix tag", "older release", "git tag", "version tag"],
        whenToUse: "Use ONLY for posts discussing creating a worktree from a release tag or historic version tag."
    },
    {
        id: "worktree-actions",
        filename: "16-worktree-actions.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/16-worktree-actions.png`,
        description: "Worktree context menu showing quick actions: open in IDE, open terminal, change folder, rename, lock, delete, prune",
        features: ["worktree_actions", "context_menu", "worktree_management"],
        keywords: ["context menu", "worktree menu", "worktree actions", "manage worktree", "right click"],
        whenToUse: "Use ONLY for posts showing the worktree action context menu."
    },
    {
        id: "worktree-actions-editors",
        filename: "17-worktree-actions-editors.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/17-worktree-actions-editors.png`,
        description: "Open In submenu showing integrated editors like VS Code, Cursor, IntelliJ IDEA, WebStorm, and Zed",
        features: ["open_in_editor", "ide_integration", "editors", "cursor", "vscode", "intellij"],
        keywords: ["open in editor", "open in", "vscode", "cursor", "intellij", "webstorm", "zed", "launch editor", "editor menu", "open editor", "open worktree in"],
        whenToUse: "Use ONLY for posts discussing launching editors (VS Code, Cursor, IntelliJ) directly into a worktree."
    },
    {
        id: "worktree-actions-copy",
        filename: "18-worktree-actions-copy.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/18-worktree-actions-copy.png`,
        description: "Copy menu options to copy worktree path, absolute path, branch name, or git CLI command",
        features: ["copy_actions", "worktree_path", "branch_name"],
        keywords: ["copy path", "copy branch", "clipboard", "worktree path", "copy action"],
        whenToUse: "Use ONLY for posts discussing copying worktree paths or branch names to clipboard."
    },
    {
        id: "worktree-actions-delete",
        filename: "18b-worktree-actions-delete-options.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/18b-worktree-actions-delete-options.png`,
        description: "Safe worktree deletion dialog giving the clear choice to delete only the worktree folder or also remove the linked Git branch",
        features: ["delete_worktree", "safe_deletion", "cleanup", "remove_worktree"],
        keywords: ["delete worktree", "remove worktree", "delete branch", "safe delete", "clean up worktree", "delete options", "delete confirmation"],
        whenToUse: "Use ONLY for posts discussing deleting worktrees safely and choosing whether to keep or remove the Git branch."
    },
    {
        id: "worktree-rename",
        filename: "19-worktree-rename.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/19-worktree-rename.png`,
        description: "Rename Worktree modal to rename a worktree cleanly without breaking Git metadata",
        features: ["rename_worktree", "worktree_naming"],
        keywords: ["rename", "rename worktree", "change name"],
        whenToUse: "Use ONLY for posts discussing renaming worktrees."
    },
    {
        id: "worktree-change-pattern",
        filename: "20-worktree-change-pattern.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/20-worktree-change-pattern.png`,
        description: "Change worktree directory naming pattern dialog with real-time preview of the target folder structure",
        features: ["naming_patterns", "worktree_paths", "directory_structure"],
        keywords: ["naming pattern", "change pattern", "folder pattern", "path preview", "pattern editor"],
        whenToUse: "Use ONLY for posts discussing customizing folder naming patterns."
    },
    {
        id: "worktree-move",
        filename: "21-worktree-move.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/21-worktree-move.png`,
        description: "Move Worktree dialog to relocate a worktree directory to another folder or drive with Git paths auto-repaired",
        features: ["move_worktree", "relocate_worktree", "change_folder"],
        keywords: ["move worktree", "change folder", "relocate", "move directory", "git worktree move", "relocate folder"],
        whenToUse: "Use ONLY for posts discussing moving or relocating worktrees to another directory or drive."
    },
    {
        id: "worktree-lock",
        filename: "22-worktree-lock.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/22-worktree-lock.png`,
        description: "Lock Worktree dialog with reason input to protect important worktrees from accidental deletion or pruning",
        features: ["lock_worktree", "worktree_lock_reason", "protection"],
        keywords: ["lock worktree", "lock reason", "protect worktree", "prevent deletion", "git worktree lock", "locked worktree", "lock"],
        whenToUse: "Use ONLY for posts discussing locking worktrees with a reason to protect them from pruning or deletion."
    },
    {
        id: "multiple-terminals",
        filename: "23-multiple-terminals.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/23-multiple-terminals.png`,
        description: "Multiple integrated terminals open side-by-side in separate worktree directories without cd navigation",
        features: ["multiple_terminals", "terminal_integration", "cli"],
        keywords: ["terminal", "terminals", "command prompt", "powershell", "bash", "side by side", "integrated terminal"],
        whenToUse: "Use ONLY for posts discussing running multiple terminals side-by-side in different worktree folders."
    },
    {
        id: "multiple-ai-agents",
        filename: "24-multiple-ai-agents.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/24-multiple-ai-agents.png`,
        description: "Multiple AI coding agents (Claude, Codex, Cursor, etc.) running simultaneously in parallel isolated worktrees without file collisions",
        features: ["multiple_ai_agents", "ai_coding", "parallel_agents", "cursor", "claude_code", "ai_isolation"],
        keywords: ["ai agent", "ai agents", "claude code", "cursor", "parallel agents", "autonomous coding", "ai coding", "coding agent", "multi-agent", "agent", "agents"],
        whenToUse: "Use ONLY for posts discussing running AI coding agents (Claude Code, Cursor, Copilot, parallel agents) in isolated worktrees."
    },
    {
        id: "prune-worktrees",
        filename: "25-prune-worktrees.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/25-prune-worktrees.png`,
        description: "Prune Worktrees screen scanning and safely cleaning up stale, missing, or orphan worktree references",
        features: ["prune_worktrees", "clean_worktrees", "git_maintenance", "orphan_worktrees"],
        keywords: ["prune", "git worktree prune", "stale worktrees", "clean worktrees", "orphaned", "prune worktrees", "prune review"],
        whenToUse: "Use ONLY for posts discussing pruning stale, missing, or orphaned worktree references."
    },
    {
        id: "settings-worktree-patterns",
        filename: "30-settings-worktrees.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/30-settings-worktrees.png`,
        description: "Worktree settings panel to configure root directory and automatic naming pattern presets and tokens",
        features: ["naming_patterns", "worktree_paths", "settings_worktrees", "root_directory"],
        keywords: ["settings worktrees", "naming pattern settings", "default root", "tokens", "pattern preset", "worktree settings", "naming patterns"],
        whenToUse: "Use ONLY for posts discussing global worktree directory settings and naming rules."
    },
    {
        id: "settings-editors",
        filename: "31-settings-editors.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/31-settings-editors.png`,
        description: "IDE and editor integration settings configuring executable paths and default arguments for VS Code, Cursor, IntelliJ, etc.",
        features: ["ide_integration", "editors", "settings_editors"],
        keywords: ["editor settings", "configure ide", "cursor settings", "vscode path", "editor integration", "default ide", "default ides", "favorite editor", "editor", "ide", "launch vs code"],
        whenToUse: "Use ONLY for posts discussing configuring IDEs, editors, and launch arguments in settings."
    },
    {
        id: "settings-ai-agents",
        filename: "32-settings-ai-agents.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/32-settings-ai-agents.png`,
        description: "AI Agent settings configuring agent CLIs, system prompts, and autonomous agent environment presets",
        features: ["settings_ai_agents", "ai_configuration", "agent_tools"],
        keywords: ["ai settings", "agent configuration", "claude settings", "cursor agent settings", "ai agent settings"],
        whenToUse: "Use ONLY for posts discussing configuring AI agent tools and CLI paths in settings."
    },
    {
        id: "settings-shell",
        filename: "33-settings-shell.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/33-settings-shell.png`,
        description: "Shell and terminal integration settings configuring default shell (PowerShell, Bash, Zsh, WSL)",
        features: ["terminal_integration", "shell", "settings_shell"],
        keywords: ["shell settings", "default terminal", "powershell", "bash", "zsh", "wsl", "shell configuration", "custom shell"],
        whenToUse: "Use ONLY for posts discussing configuring shell preferences (Bash, Zsh, PowerShell) in settings."
    },
    {
        id: "settings-git",
        filename: "34-settings-git.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/34-settings-git.png`,
        description: "Git binary configuration settings configuring Git path, custom flags, and credential helpers",
        features: ["settings_git", "git_configuration", "git_executable"],
        keywords: ["git settings", "git path", "git binary", "git executable", "credentials"],
        whenToUse: "Use ONLY for posts discussing Git binary location and environment settings."
    },
    {
        id: "settings-encoding",
        filename: "35-settings-encoding.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/35-settings-encoding.png`,
        description: "Text encoding and line ending (UTF-8, CRLF/LF) configuration settings",
        features: ["encoding", "configuration", "settings_encoding", "line_endings"],
        keywords: ["encoding", "utf-8", "line endings", "crlf", "lf", "charset", "text encoding"],
        whenToUse: "Use ONLY for posts discussing file encodings or line ending configurations."
    },
    {
        id: "repository-start",
        filename: "36-repository-start.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/36-repository-start.png`,
        description: "WorktreeWise Open or Clone Repository start screen",
        features: ["open_repository", "clone_repository", "start_screen"],
        keywords: ["open repository", "clone repository", "welcome screen", "start screen", "getting started"],
        whenToUse: "Use ONLY for posts discussing getting started, opening an existing Git repo, or cloning from GitHub/GitLab."
    },
    {
        id: "git-commit",
        filename: "37-git-commit.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/37-git-commit.png`,
        description: "Git commit panel showing staged changes, unstaged changes, and commit message editor",
        features: ["git_commit", "staged_changes", "commit_message"],
        keywords: ["commit", "staged changes", "git commit", "commit panel", "unstaged", "commit message"],
        whenToUse: "Use ONLY for posts discussing staging changes and committing code directly in WorktreeWise."
    },
    {
        id: "git-commit-file-diff",
        filename: "38-git-commit-file-diff.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/38-git-commit-file-diff.png`,
        description: "Reviewing staged file diff before committing directly inside WorktreeWise",
        features: ["git_commit", "file_diff", "staged_diff"],
        keywords: ["staged diff", "review file", "file diff", "commit diff", "staged file"],
        whenToUse: "Use ONLY for posts discussing inspecting staged diffs before committing."
    },
    {
        id: "repair-worktree",
        filename: "39-repair-worktree.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/39-repair-worktree.png`,
        description: "Repair Damaged Worktree dialog reconnecting disconnected or broken worktrees without losing uncommitted work",
        features: ["repair_worktree", "broken_worktree", "troubleshooting", "git_maintenance"],
        keywords: ["repair worktree", "broken worktree", "disconnected worktree", "git worktree repair", "fix worktree", "repair"],
        whenToUse: "Use ONLY for posts discussing repairing broken, disconnected, or moved worktree directories."
    },
    {
        id: "worktree-lock-action",
        filename: "40-worktree-lock-action.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/40-worktree-lock-action.png`,
        description: "Context menu action showing Lock Worktree option",
        features: ["lock_worktree", "worktree_actions"],
        keywords: ["lock worktree menu", "how to lock", "lock option", "lock action"],
        whenToUse: "Use ONLY for posts specifically showing the Lock action in the context menu."
    },
    {
        id: "worktree-locked",
        filename: "41-worktree-locked.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/41-worktree-locked.png`,
        description: "Worktree item in list displaying the locked badge preventing accidental operations",
        features: ["lock_worktree", "locked_status", "worktree_status"],
        keywords: ["locked badge", "locked status", "locked worktree", "lock icon"],
        whenToUse: "Use ONLY for posts highlighting a locked worktree badge or state in the list."
    },
    {
        id: "worktree-unlock-action",
        filename: "42-worktree-unlock-action.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/42-worktree-unlock-action.png`,
        description: "Context menu action showing Unlock Worktree option",
        features: ["unlock_worktree", "worktree_actions"],
        keywords: ["unlock worktree", "unlock action", "unlock menu", "git worktree unlock"],
        whenToUse: "Use ONLY for posts discussing unlocking a protected worktree."
    },
    {
        id: "worktree-unlocked",
        filename: "43-worktree-unlocked.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/43-worktree-unlocked.png`,
        description: "Worktree item after unlocking showing normal active state",
        features: ["unlock_worktree", "unlocked_status"],
        keywords: ["unlocked badge", "unlocked status", "active worktree", "unlocked worktree"],
        whenToUse: "Use ONLY for posts discussing the active state after unlocking a worktree."
    },
    {
        id: "create-from-commit",
        filename: "44-create-worktree-from-commit.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/44-create-worktree-from-commit.png`,
        description: "Create a worktree directly from a selected historic commit in the Git log context menu",
        features: ["create_worktree", "create_from_commit", "git_log"],
        keywords: ["from commit", "specific commit", "commit node", "historic commit", "worktree from commit", "branch off a specific commit", "selected commit"],
        whenToUse: "Use ONLY for posts discussing branching off a historic commit or creating a worktree directly from the Git log."
    },
    {
        id: "dark-mode",
        filename: "45-dark-mode.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/45-dark-mode.png`,
        description: "WorktreeWise Git log and dashboard shown in sleek dark mode theme",
        features: ["dark_mode", "git_log", "theme_appearance"],
        keywords: ["dark mode", "dark theme", "appearance", "dark ui", "low-light"],
        whenToUse: "Use ONLY for posts discussing dark mode theme and eye comfort."
    },
    {
        id: "light-mode",
        filename: "46-light-mode.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/46-light-mode.png`,
        description: "WorktreeWise Git log and dashboard shown in clean light mode theme",
        features: ["light_mode", "git_log", "theme_appearance"],
        keywords: ["light mode", "light theme", "appearance", "light ui"],
        whenToUse: "Use ONLY for posts discussing light mode theme."
    },
    {
        id: "keyboard-shortcuts",
        filename: "47-keyboard-shortcuts.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/47-keyboard-shortcuts.png`,
        description: "WorktreeWise keyboard shortcuts dialog showing all hotkeys for navigation, worktrees, and Git actions",
        features: ["keyboard_shortcuts", "navigation", "hotkeys", "productivity"],
        keywords: ["keyboard shortcuts", "shortcuts", "hotkeys", "cheat sheet", "keybindings"],
        whenToUse: "Use ONLY for posts discussing keyboard navigation and shortcut cheat-sheets."
    }
];

export const PUBLIC_MEDIA_ASSETS = MEDIA_ASSETS;

export function getMediaAssetUrl(mediaId?: string | null): string | null {
    if (!mediaId) return null;
    const cleanId = mediaId.trim().toLowerCase().replace(/\.png$/i, "");
    const asset = MEDIA_ASSETS.find((a) =>
        a.id.toLowerCase() === cleanId ||
        a.filename.toLowerCase() === cleanId ||
        a.filename.toLowerCase().replace(/\.png$/i, "") === cleanId ||
        a.path.toLowerCase().endsWith(cleanId)
    );
    if (asset) return asset.path;
    if (mediaId.startsWith("http://") || mediaId.startsWith("https://")) {
        return mediaId.replace("https://worktreewise.com/images/worktreewise/", `${BASE_IMAGE_URL}/`);
    }
    return null;
}

export function resolveRelevantMedia(post: {
    text: string;
    feature?: string;
    category?: string;
    mediaId?: string | null;
}): { mediaId: string | null; mediaUrl: string | null } {
    if (!post.mediaId) {
        return { mediaId: null, mediaUrl: null };
    }

    const postLower = (post.text || "").toLowerCase();
    const featureLower = (post.feature || "").toLowerCase();
    const requestedId = post.mediaId.trim().toLowerCase().replace(/\.png$/i, "");

    // 1. Locate the requested asset
    const requestedAsset = MEDIA_ASSETS.find(
        (a) =>
            a.id.toLowerCase() === requestedId ||
            a.filename.toLowerCase() === requestedId ||
            a.filename.toLowerCase().replace(/\.png$/i, "") === requestedId ||
            a.path.toLowerCase().endsWith(requestedId)
    );

    if (!requestedAsset) {
        console.warn(`[resolveRelevantMedia] Unknown mediaId requested: "${post.mediaId}"`);
        return { mediaId: null, mediaUrl: null };
    }

    function escapeRegex(str: string): string {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    // 2. Score relevance for any asset against the post text and feature
    function computeRelevanceScore(asset: MediaAsset): number {
        let score = 0;
        // Direct feature match (exact match)
        if (featureLower && asset.features.some((f) => f.toLowerCase() === featureLower)) {
            score += 5;
        }
        // Keyword matches in post text with word boundaries
        for (const kw of asset.keywords) {
            const kwLower = kw.toLowerCase().trim();
            if (!kwLower) continue;
            const regex = new RegExp(`\\b${escapeRegex(kwLower)}\\b`, "i");
            if (regex.test(postLower)) {
                score += 3;
            }
        }
        return score;
    }

    const requestedScore = computeRelevanceScore(requestedAsset);

    // If requested asset has good relevance (score >= 2), keep it!
    if (requestedScore >= 2) {
        return { mediaId: requestedAsset.id, mediaUrl: requestedAsset.path };
    }

    // 3. If requested asset had low relevance, check if another asset is a clear high-confidence match
    let bestAlternative: MediaAsset | null = null;
    let highestScore = 0;

    for (const asset of MEDIA_ASSETS) {
        const score = computeRelevanceScore(asset);
        if (score > highestScore) {
            highestScore = score;
            bestAlternative = asset;
        }
    }

    // If a clear alternative scores high (>= 4), auto-correct to it
    if (bestAlternative && highestScore >= 4) {
        console.log(
            `[resolveRelevantMedia] Corrected mismatched mediaId "${post.mediaId}" -> "${bestAlternative.id}" (score: ${highestScore}) for post: "${post.text.slice(0, 60)}..."`
        );
        return { mediaId: bestAlternative.id, mediaUrl: bestAlternative.path };
    }

    // If no strong match exists, drop to null so X preview card displays properly without an irrelevant screenshot
    console.warn(
        `[resolveRelevantMedia] Dropped irrelevant mediaId "${post.mediaId}" (score: ${requestedScore}) for post: "${post.text.slice(0, 60)}..."`
    );
    return { mediaId: null, mediaUrl: null };
}

const URLS = {
    website: "https://www.worktreewise.com",
    documentation: "https://docs.worktreewise.com",
    tutorials: "https://www.worktreewise.com/git-worktree",
    cheatSheet: "https://www.worktreewise.com/git-worktree-cheat-sheet",
    troubleshooting: "https://www.worktreewise.com/git-worktree/troubleshooting",
    aiAgents: "https://www.worktreewise.com/ai-agents/git-worktrees",
    environmentIsolation: "https://www.worktreewise.com/git-worktree/environment-isolation",
    comparisons: "https://www.worktreewise.com/git-worktree/comparisons",
} as const;

export function buildWorktreeWisePrompt(recentPosts: string[] = [], postCount: number = POST_COUNT): string {
    return `You are the social media content strategist for WorktreeWise, a desktop application that makes Git worktrees easier to create, manage, inspect, isolate, and use in everyday development.

Your goal is NOT to generate generic Git content. Generate exactly ${postCount} distinct X posts that make developers understand a specific problem, see exactly how WorktreeWise solves it, and become interested in trying it.

CORE TEST FOR EVERY PRODUCT POST
1. What specific problem does the developer have?
2. What exact WorktreeWise feature solves it?
3. What concrete benefit does the developer get?
4. Which supplied screenshot best proves the claim?

If the answer is vague, rewrite the post. Avoid unsupported productivity claims, invented functionality, fake statistics, fake quotes, and generic phrases such as "boost your productivity", "simplify your Git workflow", "Git worktrees are powerful", or "work smarter".

CONTENT DISTRIBUTION ACROSS THE COMPLETE SET
- 40% problem_solution: begin with a concrete frustration, then demonstrate the exact WorktreeWise feature that resolves it.
- 20% feature_demo: demonstrate one feature through a realistic scenario; do not list unrelated capabilities.
- 15% cli_vs_worktreewise: show a real Git command and the equivalent WorktreeWise workflow. Never criticize Git; describe WorktreeWise as a visual productivity layer on top of Git.
- 10% workflow: show realistic development such as keeping main available during a hotfix, parallel branches, multiple coding agents, editor windows, automated setup, or isolated environments.
- 10% education: teach a genuinely useful worktree concept. Connect WorktreeWise only when it adds value.
- 5% promotion: be direct about a product overview, trial, feature, demonstration, comparison, or release.

SUPPORTED WORKTREEWISE CAPABILITIES
- List, create, delete, rename, move, lock, unlock, prune, and repair Git worktrees.
- Create from HEAD, local or remote branches, tags, and commits.
- Open worktrees in configured IDEs (VS Code, Cursor, IntelliJ, WebStorm) or terminals.
- Run workflow hooks and repeatable setup commands.
- Use separate environment configuration (.env) between worktrees.
- Inspect Git history and graph; compare or diff worktrees, branches, tags, and commits.
- Configure worktree naming patterns.
- Copy IDE configuration such as .idea.
- Share node_modules across worktrees to save disk space.
- Configure sparse checkout.
- Manage multiple worktrees visually.
- Use multiple AI coding agents in parallel isolated worktrees.

Do not invent features. Do not mention the deleted code-generator feature.

CRITICAL VISUAL & SCREENSHOT RELEVANCE RULES (DO NOT VIOLATE):
- WorktreeWise screenshots MUST ONLY be attached if the screenshot DIRECTLY proves or depicts the specific topic of the post.
- Follow the 'whenToUse' field in MEDIA_ASSETS strictly!
- NEVER attach an unrelated screenshot:
  * Do NOT attach 'git-log' or 'git-diff' to a post discussing AI agents, environment isolation, locked worktrees, or node_modules.
  * Do NOT attach 'repository-start' to a post discussing bug fixing, hotfixes, or parallel branching.
  * Do NOT attach 'settings-worktree-patterns' to a post discussing environment isolation.
- IF A POST DOES NOT HAVE AN EXACT VISUAL MATCH: set "mediaId": null.
  Setting "mediaId": null is STRONGLY PREFERRED over attaching a loosely related or misleading image, because on X, a null mediaId automatically displays the rich, branded WorktreeWise link preview card for your ctaUrl!
- Never request generic AI-generated Git illustrations. Reference only valid 'id' values from MEDIA_ASSETS or null.

MEDIA_ASSETS (46 Available Screenshots):
${JSON.stringify(
    MEDIA_ASSETS.map((a) => ({
        id: a.id,
        description: a.description,
        features: a.features,
        whenToUse: a.whenToUse
    })),
    null,
    2
)}

HOOKS, URLS, AND TAGS
- The opening sentence must describe a concrete developer situation, for example: "Created 5 worktrees. Which one is actually locked?", "Another worktree already owns localhost:8080.", "Still typing git worktree add several times a day?", or "Need to fix production without touching your current workspace?"
- Write for experienced software developers using concise, specific, conversational language.
- Use actual Git commands when useful.
- Use line breaks only when they improve scanning.
- Do not number posts.
- Avoid corporate language, hype, and excessive emojis.
- Every post MUST be accompanied by a relevant WorktreeWise page URL chosen from URLS (default to https://www.worktreewise.com).
- Every post MUST end with these exact tags: #Git · #DevTools · #AICoding
- CRITICAL LENGTH CONSTRAINT: Maximum 280 characters for the ENTIRE post (including the WorktreeWise URL and #Git · #DevTools · #AICoding). Keep the main body concise (~160-200 characters) so the full post stays strictly under 280 characters.

URL RULES
- Match ctaUrl to the most relevant URL from URLS (or https://www.worktreewise.com).
- Educational/tutorial posts should link to the specific guide, troubleshooting, isolation, AI-agent, or cheat-sheet URL.
- Product/feature posts may link to the website or documentation.

VARIETY RULES
Vary the feature, problem, hook, structure, CTA, media, command, and intent. Posts about the same feature must address substantially different developer problems. Do not generate posts substantially similar to RECENT_POSTS.

Before accepting each product-focused post, ask internally: "If a developer saw only this post and screenshot, would they understand something WorktreeWise makes more convenient than native Git alone?" Improve the post when the answer is no.

URLS:
${JSON.stringify(URLS, null, 2)}

RECENT_POSTS:
${JSON.stringify(recentPosts, null, 2)}

OUTPUT
Return ONLY valid JSON. Do not add markdown fences or commentary.

Use exactly this structure:
{
  "posts": [
    {
      "text": "Post copy here\\n\\nhttps://www.worktreewise.com\\n#Git · #DevTools · #AICoding",
      "category": "problem_solution",
      "feature": "multiple_ai_agents",
      "mediaId": "multiple-ai-agents",
      "ctaUrl": "https://www.worktreewise.com/ai-agents/git-worktrees",
      "intent": "conversion"
    }
  ]
}

Allowed categories: problem_solution, feature_demo, cli_vs_worktreewise, workflow, education, promotion.
Allowed intents: conversion, awareness, education.
mediaId must reference MEDIA_ASSETS or be null.
ctaUrl must reference URLS.
Return exactly ${postCount} objects in posts.`;
}



