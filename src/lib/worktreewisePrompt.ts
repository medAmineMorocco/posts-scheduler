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

const BASE_IMAGE_URL = "https://worktreewise.com/images/v1.2.0";

export const MEDIA_ASSETS: MediaAsset[] = [
    {
        id: "actions",
        filename: "actions.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/actions.png`,
        description: "Worktree action menu highlighting fast actions (Open in IDE, Terminal, AI Agent, Lock, Delete)",
        features: ["worktree_actions", "action_menu", "fast_actions"],
        keywords: ["actions", "worktree actions", "action menu", "fast actions", "context menu"],
        whenToUse: "Use ONLY for posts discussing quick worktree action menus or available operations."
    },
    {
        id: "add-workflow",
        filename: "add-workflow.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/add-workflow.png`,
        description: "Add Workflow modal showing how to configure automated setup steps, build commands, and triggers for worktrees",
        features: ["workflows", "add_workflow", "automation"],
        keywords: ["add workflow", "configure workflow", "workflow steps", "setup commands", "new workflow", "automation", "hooks"],
        whenToUse: "Use ONLY for posts discussing configuring or adding new repeatable workflow automation scripts for worktrees."
    },
    {
        id: "ai-agent-files-terminal-browser",
        filename: "ai-agent-files-terminal-browser.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/ai-agent-files-terminal-browser.png`,
        description: "AI agent integrated view showing file tree, embedded terminal, and browser preview in dedicated worktree",
        features: ["ai_agents", "terminal_integration", "browser_preview", "environment_isolation"],
        keywords: ["ai agent files", "embedded terminal", "browser preview", "ai coding workspace", "agent files", "agent environment"],
        whenToUse: "Use ONLY for posts discussing integrated AI agent workspaces with files, terminal, and browser in an isolated worktree."
    },
    {
        id: "ai-agents-settings",
        filename: "ai-agents-settings.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/ai-agents-settings.png`,
        description: "AI coding agents settings screen configuring parallel AI tools, agent permissions, and worktree routing",
        features: ["ai_agents", "ai_settings", "settings"],
        keywords: ["ai agents settings", "ai agents", "coding agents", "cursor", "claude code", "copilot", "autonomous agents", "parallel agents"],
        whenToUse: "Use ONLY for posts discussing configuring AI agent settings, rules, or agent integrations."
    },
    {
        id: "bisect-step1",
        filename: "bisect-step1.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/bisect-step1.png`,
        description: "WorktreeWise Git bisect wizard step 1 selecting bad commit and good commit to locate regression",
        features: ["git_bisect", "bisect_step1", "debugging"],
        keywords: ["bisect", "git bisect", "regression", "find bug", "bad commit", "good commit", "binary search commit"],
        whenToUse: "Use ONLY for posts discussing starting a Git bisect or diagnosing bug regressions visually."
    },
    {
        id: "bisect-step5",
        filename: "bisect-step5.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/bisect-step5.png`,
        description: "WorktreeWise Git bisect wizard step 5 isolating the exact commit that introduced the bug",
        features: ["git_bisect", "bisect_step5", "debugging"],
        keywords: ["bisect result", "first bad commit", "bisect finished", "culprit commit", "isolate bug", "bisect complete"],
        whenToUse: "Use ONLY for posts discussing pinpointing the exact offending commit or concluding a Git bisect run."
    },
    {
        id: "change-naming-pattern",
        filename: "change-naming-pattern.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/change-naming-pattern.png`,
        description: "Modal to change and customize the worktree directory naming pattern and branch slug format",
        features: ["naming_patterns", "worktree_naming", "configuration"],
        keywords: ["naming pattern", "change naming pattern", "folder format", "worktree directory name", "branch pattern"],
        whenToUse: "Use ONLY for posts discussing changing or customizing worktree directory naming patterns."
    },
    {
        id: "cherry-pick",
        filename: "cherry-pick.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/cherry-pick.png`,
        description: "Visual Git cherry-pick modal to apply specific commits onto current worktree or branch",
        features: ["cherry_pick", "git_operations"],
        keywords: ["cherry pick", "git cherry pick", "pick commit", "backport commit", "apply commit", "cherry-pick"],
        whenToUse: "Use ONLY for posts discussing visual cherry-picking commits across branches or worktrees."
    },
    {
        id: "clipboard-actions",
        filename: "clipboard-actions.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/clipboard-actions.png`,
        description: "Clipboard context actions showing one-click copy for worktree path, branch name, commit hash, and checkout command",
        features: ["clipboard", "quick_actions", "copy_path"],
        keywords: ["clipboard", "copy path", "copy branch", "copy hash", "quick copy", "context menu"],
        whenToUse: "Use ONLY for posts discussing fast clipboard actions or copying worktree paths/branches."
    },
    {
        id: "configure-editor-custom-path",
        filename: "configure-editor-custom-path.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/configure-editor-custom-path.png`,
        description: "Configure custom IDE and editor executable binary path modal in WorktreeWise",
        features: ["editor_configuration", "custom_path", "ide_settings"],
        keywords: ["custom editor path", "configure ide", "binary path", "custom executable", "editor path"],
        whenToUse: "Use ONLY for posts discussing pointing WorktreeWise to a custom IDE or editor installation."
    },
    {
        id: "create-commit",
        filename: "create-commit.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/create-commit.png`,
        description: "WorktreeWise visual Git commit dialog with staged files, commit message input, and commit options",
        features: ["git_commit", "stage_files", "commit_dialog"],
        keywords: ["commit", "create commit", "git commit", "stage files", "commit message", "staged changes"],
        whenToUse: "Use ONLY for posts discussing writing commits, staging changes, or creating Git commits visually."
    },
    {
        id: "create-worktree-from-commit",
        filename: "create-worktree-from-commit.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/create-worktree-from-commit.png`,
        description: "Create Worktree modal creating an isolated worktree directly from a specific commit hash",
        features: ["create_worktree", "from_commit", "historical_debugging"],
        keywords: ["from commit", "create worktree commit", "specific commit", "historical commit", "debug old commit"],
        whenToUse: "Use ONLY for posts discussing checking out and creating a worktree from an older commit or hash."
    },
    {
        id: "create-worktree-from-head",
        filename: "create-worktree-from-head.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/create-worktree-from-head.png`,
        description: "Create Worktree modal creating a new branch and linked worktree directly from HEAD",
        features: ["create_worktree", "from_head", "new_branch"],
        keywords: ["from head", "create from head", "new branch", "checkout head", "branch from head"],
        whenToUse: "Use ONLY for posts discussing creating a fresh worktree and branch from HEAD."
    },
    {
        id: "create-worktree-from-local-branch",
        filename: "create-worktree-from-local-branch.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/create-worktree-from-local-branch.png`,
        description: "Create Worktree modal attaching an isolated linked worktree to an existing local branch",
        features: ["create_worktree", "local_branch", "checkout_existing"],
        keywords: ["local branch", "existing branch", "checkout local", "worktree from local", "switch branch"],
        whenToUse: "Use ONLY for posts discussing creating a worktree for an existing local branch without switching branches in your current folder."
    },
    {
        id: "create-worktree-from-remote-branch",
        filename: "create-worktree-from-remote-branch.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/create-worktree-from-remote-branch.png`,
        description: "Create Worktree modal tracking and checking out a remote branch into a dedicated worktree",
        features: ["create_worktree", "remote_branch", "review_pr"],
        keywords: ["remote branch", "origin branch", "track remote", "pull remote", "review branch", "checkout pr"],
        whenToUse: "Use ONLY for posts discussing checking out remote origin branches or teammate PR branches into a worktree."
    },
    {
        id: "create-worktree-from-tag",
        filename: "create-worktree-from-tag.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/create-worktree-from-tag.png`,
        description: "Create Worktree modal creating an isolated worktree from a release tag",
        features: ["create_worktree", "from_tag", "release_investigation"],
        keywords: ["from tag", "release tag", "hotfix tag", "v1.0", "tag checkout", "inspect release"],
        whenToUse: "Use ONLY for posts discussing creating a worktree to inspect or patch a specific Git release tag."
    },
    {
        id: "create-worktree-public",
        filename: "create-worktree-public.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/create-worktree-public.png`,
        description: "Create Worktree public dialog showing branch source selection, directory setup, and configuration",
        features: ["create_worktree", "worktree_creation", "dialog"],
        keywords: ["create worktree", "new worktree", "add worktree", "worktree dialog", "branch creation", "create worktree public"],
        whenToUse: "Use for posts demonstrating the primary WorktreeWise create worktree dialog."
    },
    {
        id: "create-worktree-with-hooks",
        filename: "create-worktree-with-hooks.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/create-worktree-with-hooks.png`,
        description: "Worktree creation modal configuring post-creation automated lifecycle hooks like npm install or build",
        features: ["create_worktree", "lifecycle_hooks", "automated_setup"],
        keywords: ["lifecycle hooks", "worktree hooks", "post create hooks", "automated setup", "npm install hook", "auto install"],
        whenToUse: "Use ONLY for posts discussing automated hooks, running commands automatically right after worktree creation."
    },
    {
        id: "dark-mode",
        filename: "dark-mode.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/dark-mode.png`,
        description: "WorktreeWise interface rendered in sleek dark mode theme",
        features: ["dark_mode", "ui_theme", "appearance"],
        keywords: ["dark mode", "theme", "dark theme", "appearance", "sleek ui"],
        whenToUse: "Use for posts showcasing the WorktreeWise dark theme or overall polished desktop UI appearance."
    },
    {
        id: "dashboard",
        filename: "dashboard.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/dashboard.png`,
        description: "Main WorktreeWise dashboard view displaying all active worktrees, Git status, branch health, and fast actions",
        features: ["dashboard", "overview", "worktree_list", "repo_health"],
        keywords: ["dashboard", "main view", "worktree list", "all worktrees", "manage worktrees", "repo health", "active worktrees"],
        whenToUse: "Use for posts discussing high-level worktree management, dashboard monitoring, or multiple parallel worktrees overview."
    },
    {
        id: "dashboard-preview",
        filename: "dashboard-preview.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/dashboard-preview.png`,
        description: "WorktreeWise dashboard preview card displaying multiple active branches, clean status, and repo overview",
        features: ["dashboard", "preview", "repo_overview"],
        keywords: ["dashboard preview", "worktree overview", "dashboard preview card", "clean status", "overview card"],
        whenToUse: "Use for posts showing a preview card of the WorktreeWise dashboard."
    },
    {
        id: "delete-worktree",
        filename: "delete-worktree.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/delete-worktree.png`,
        description: "Delete Worktree confirmation modal with options to delete folder, force remove, and delete branch",
        features: ["delete_worktree", "cleanup", "remove_worktree"],
        keywords: ["delete worktree", "remove worktree", "delete branch", "force delete", "cleanup worktree", "disk cleanup"],
        whenToUse: "Use ONLY for posts discussing safe worktree deletion, removing merged worktrees, or cleaning up disk space."
    },
    {
        id: "diff-staged-file",
        filename: "diff-staged-file.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/diff-staged-file.png`,
        description: "Visual split diff view inspecting staged file changes line-by-line before committing",
        features: ["diff_staged", "git_diff", "staged_changes", "code_review"],
        keywords: ["staged diff", "diff staged", "staged file", "split diff", "line by line diff", "inspect changes"],
        whenToUse: "Use ONLY for posts discussing inspecting staged changes or reviewing pre-commit file diffs."
    },
    {
        id: "edit-workflow",
        filename: "edit-workflow.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/edit-workflow.png`,
        description: "Edit Workflow modal modifying command sequences, environment variables, and execution steps",
        features: ["workflows", "edit_workflow", "automation"],
        keywords: ["edit workflow", "modify workflow", "workflow steps", "workflow config", "workflow drawer"],
        whenToUse: "Use ONLY for posts discussing customizing or editing existing workflow automation routines."
    },
    {
        id: "editors-settings",
        filename: "editors-settings.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/editors-settings.png`,
        description: "Editors settings panel configuring integrated editors like VS Code, Cursor, IntelliJ, and custom IDE launchers",
        features: ["settings", "editors", "ide_integration"],
        keywords: ["editors settings", "editor settings", "vscode", "cursor", "intellij", "configure editors", "ide launcher"],
        whenToUse: "Use ONLY for posts discussing configuring code editors, IDE launcher settings, or multi-editor setups."
    },
    {
        id: "encoding-settings",
        filename: "encoding-settings.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/encoding-settings.png`,
        description: "Encoding settings page for configuring character sets, UTF-8 fallbacks, and diff encoding in WorktreeWise",
        features: ["settings", "encoding", "file_encoding"],
        keywords: ["encoding settings", "character encoding", "utf-8", "file encoding", "charset"],
        whenToUse: "Use ONLY for posts discussing character encoding, internationalization, or handling file encodings."
    },
    {
        id: "git-diff",
        filename: "git-diff.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/git-diff.png`,
        description: "Side-by-side visual Git diff comparing branches, commits, or worktrees with syntax highlighting",
        features: ["git_diff", "diff_comparison", "code_review"],
        keywords: ["git diff", "diff", "side by side", "compare branches", "diffing", "code review", "compare worktrees"],
        whenToUse: "Use ONLY for posts discussing visual Git diffs, comparing worktrees, or side-by-side code review."
    },
    {
        id: "git-log-columns",
        filename: "git-log-columns.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/git-log-columns.png`,
        description: "Git log column visibility controls to customize and declutter commit history columns like Author, Date, Hash",
        features: ["git_log", "column_configuration", "custom_columns"],
        keywords: ["git log columns", "customize columns", "hide author", "date column", "declutter log", "log columns"],
        whenToUse: "Use ONLY for posts discussing customizing Git log columns, decluttering commit logs, or toggling author/date."
    },
    {
        id: "git-settings",
        filename: "git-settings.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/git-settings.png`,
        description: "Git settings configuration panel for Git executable path, default fetch settings, and global flags",
        features: ["settings", "git_settings", "git_config"],
        keywords: ["git settings", "git path", "git config", "executable", "global git settings"],
        whenToUse: "Use ONLY for posts discussing Git configuration, custom Git binary paths, or core Git preferences."
    },
    {
        id: "import-workflow",
        filename: "import-workflow.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/import-workflow.png`,
        description: "Import Workflow modal to share or import reusable workflow configurations across repos",
        features: ["workflows", "import_workflow", "share_workflow"],
        keywords: ["import workflow", "share workflow", "reuse workflow", "workflow file", "import json"],
        whenToUse: "Use ONLY for posts discussing importing or sharing repeatable workflow automation setups."
    },
    {
        id: "integrations-settings",
        filename: "integrations-settings.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/integrations-settings.png`,
        description: "Integrations settings panel for external CLI tools, shells, and desktop developer tooling",
        features: ["settings", "integrations", "tools"],
        keywords: ["integrations settings", "external tools", "integrations", "tooling", "third party tools"],
        whenToUse: "Use ONLY for posts discussing third-party tool integrations, plugins, or external tool configurations."
    },
    {
        id: "landing-health",
        filename: "landing-health.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/landing-health.png`,
        description: "WorktreeWise repository health and worktree status indicators highlighting divergence and uncommitted work",
        features: ["repo_health", "status_indicator", "git_status"],
        keywords: ["landing health", "repo health", "divergence", "uncommitted work", "worktree health", "clean dirty status"],
        whenToUse: "Use for posts discussing repository health monitoring, tracking divergence from main, or dirty worktree alerts."
    },
    {
        id: "landing-worktree-actions",
        filename: "landing-worktree-actions.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/landing-worktree-actions.png`,
        description: "WorktreeWise landing showcase of one-click worktree actions, IDE launching, and lifecycle shortcuts",
        features: ["worktree_actions", "landing", "shortcuts"],
        keywords: ["landing actions", "worktree operations", "one click worktree", "fast launch", "quick worktrees"],
        whenToUse: "Use for posts showcasing one-click worktree actions and developer productivity."
    },
    {
        id: "lock-worktree",
        filename: "lock-worktree.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/lock-worktree.png`,
        description: "Lock Worktree modal to protect a linked worktree from git worktree prune or accidental deletion",
        features: ["lock_worktree", "worktree_protection", "git_lock"],
        keywords: ["lock worktree", "lock", "prevent prune", "protect branch", "worktree lock"],
        whenToUse: "Use ONLY for posts discussing locking worktrees to safeguard long-running experiments or WIP."
    },
    {
        id: "lock-worktree-reason",
        filename: "lock-worktree-reason.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/lock-worktree-reason.png`,
        description: "Lock Worktree dialog with optional reason field explaining why the worktree is protected",
        features: ["lock_worktree", "lock_reason", "protection"],
        keywords: ["lock reason", "lock worktree reason", "protect worktree", "why locked", "prevent pruning"],
        whenToUse: "Use ONLY for posts discussing locking worktrees with descriptive reasons to avoid team confusion."
    },
    {
        id: "merge",
        filename: "merge.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/merge.png`,
        description: "Visual Git merge dialog to merge branches into current worktree with conflict preview",
        features: ["git_merge", "merge_branches", "git_operations"],
        keywords: ["merge", "git merge", "merge branch", "fast forward", "merge conflict preview"],
        whenToUse: "Use ONLY for posts discussing merging branches or handling branch integrations visually."
    },
    {
        id: "move-worktree",
        filename: "move-worktree.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/move-worktree.png`,
        description: "Move Worktree modal to safely relocate a worktree directory to a new folder or drive without breaking Git metadata",
        features: ["move_worktree", "worktree_relocation", "file_system"],
        keywords: ["move worktree", "relocate worktree", "rename folder", "move directory", "worktree path"],
        whenToUse: "Use ONLY for posts discussing moving or relocating worktrees without corrupting internal Git references."
    },
    {
        id: "multiple-ai-agents-public",
        filename: "multiple-ai-agents-public.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/multiple-ai-agents-public.png`,
        description: "Multiple AI coding agents (Cursor, Claude, Copilot) operating simultaneously across isolated linked worktrees",
        features: ["multiple_ai_agents", "ai_coding", "parallel_agents", "environment_isolation"],
        keywords: ["multiple ai agents", "ai agents", "cursor", "claude code", "copilot", "parallel coding", "isolated worktrees", "autonomous coding"],
        whenToUse: "Use ONLY for posts discussing running multiple AI agents in parallel without file collisions or git lock conflicts."
    },
    {
        id: "naming-pattern-settings",
        filename: "naming-pattern-settings.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/naming-pattern-settings.png`,
        description: "Worktree naming pattern settings screen for configuring automatic folder naming conventions",
        features: ["settings", "naming_patterns", "conventions"],
        keywords: ["naming pattern settings", "naming conventions", "auto naming", "folder templates", "worktree pattern"],
        whenToUse: "Use ONLY for posts discussing establishing team-wide worktree folder naming conventions."
    },
    {
        id: "open-in-ai-agent",
        filename: "open-in-ai-agent.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/open-in-ai-agent.png`,
        description: "One-click action to launch an isolated worktree directly into an AI coding agent environment like Cursor or Claude",
        features: ["open_in_ai_agent", "ai_coding", "parallel_agents"],
        keywords: ["open in ai agent", "launch ai agent", "cursor agent", "claude code worktree", "ai agent worktree", "open agent"],
        whenToUse: "Use ONLY for posts discussing dispatching or opening an isolated worktree directly in an AI coding agent."
    },
    {
        id: "open-in-ide",
        filename: "open-in-ide.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/open-in-ide.png`,
        description: "One-click action to launch an isolated worktree directly in VS Code, Cursor, IntelliJ, or WebStorm",
        features: ["open_in_ide", "ide_launch", "developer_experience"],
        keywords: ["open in ide", "launch vscode", "open cursor", "open intellij", "open editor", "ide shortcut"],
        whenToUse: "Use ONLY for posts discussing instantly opening worktree folders in code editors."
    },
    {
        id: "open-in-terminal",
        filename: "open-in-terminal.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/open-in-terminal.png`,
        description: "One-click action opening a native or custom terminal session with cwd set to the worktree path",
        features: ["open_in_terminal", "terminal_integration", "cli"],
        keywords: ["open in terminal", "terminal", "launch shell", "powershell", "bash", "cli session"],
        whenToUse: "Use ONLY for posts discussing opening dedicated terminal windows for individual worktrees."
    },
    {
        id: "overview",
        filename: "overview.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/overview.png`,
        description: "Worktree overview displaying active branches, commit distance from main, and clean/dirty working tree status",
        features: ["overview", "worktree_status", "repo_overview"],
        keywords: ["overview", "worktree status", "repo overview", "branch distance", "dirty status", "active branches"],
        whenToUse: "Use for posts showcasing overall worktree status, clean vs dirty states, and branch divergence."
    },
    {
        id: "per-gitworktree-config",
        filename: "per-gitworktree-config.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/per-gitworktree-config.png`,
        description: "Per-worktree custom Git configuration enabling extensions.worktreeConfig, independent user identities, or remotes",
        features: ["per_worktree_config", "worktree_config", "git_extensions"],
        keywords: ["per worktree config", "worktreeconfig", "independent config", "isolated git config", "git config worktree"],
        whenToUse: "Use ONLY for posts discussing isolated git configs or independent user identities per worktree."
    },
    {
        id: "prune-worktrees",
        filename: "prune-worktrees.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/prune-worktrees.png`,
        description: "Prune Worktrees dialog scanning and cleaning up orphaned, deleted, or unlinked worktree metadata",
        features: ["prune_worktrees", "git_prune", "cleanup"],
        keywords: ["prune", "git worktree prune", "prune worktrees", "orphaned worktrees", "cleanup stale", "stale references"],
        whenToUse: "Use ONLY for posts discussing pruning stale worktree references or cleaning up dead directories."
    },
    {
        id: "rebase",
        filename: "rebase.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/rebase.png`,
        description: "Visual Git rebase dialog to rebase current branch onto main or upstream with conflict assistance",
        features: ["git_rebase", "rebase", "git_operations"],
        keywords: ["rebase", "git rebase", "rebase onto main", "upstream rebase", "linear history"],
        whenToUse: "Use ONLY for posts discussing rebasing branches or keeping worktrees in sync with main."
    },
    {
        id: "rename-worktree",
        filename: "rename-worktree.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/rename-worktree.png`,
        description: "Rename Worktree modal safely updating both the branch name and folder directory in one step",
        features: ["rename_worktree", "branch_rename", "worktree_actions"],
        keywords: ["rename worktree", "rename branch", "rename folder", "update worktree name"],
        whenToUse: "Use ONLY for posts discussing renaming worktree branches and directories together."
    },
    {
        id: "repair-worktree",
        filename: "repair-worktree.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/repair-worktree.png`,
        description: "Repair Worktree dialog repairing broken internal Git link references after folders were moved",
        features: ["repair_worktree", "git_repair", "troubleshooting"],
        keywords: ["repair worktree", "git worktree repair", "broken worktree", "fix worktree", "corrupted link", "repair references"],
        whenToUse: "Use ONLY for posts discussing fixing broken worktrees or restoring corrupted administrative links."
    },
    {
        id: "reset-commit",
        filename: "reset-commit.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/reset-commit.png`,
        description: "Visual Git reset dialog choosing soft, mixed, or hard reset to rewind commit history",
        features: ["reset_commit", "git_reset", "undo_commits"],
        keywords: ["reset commit", "git reset", "soft reset", "hard reset", "mixed reset", "undo commit"],
        whenToUse: "Use ONLY for posts discussing resetting commits, undoing recent commits, or soft/hard reset."
    },
    {
        id: "revert-commit",
        filename: "revert-commit.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/revert-commit.png`,
        description: "Visual Git revert commit dialog creating a safe inversion commit to roll back changes without rewriting history",
        features: ["revert_commit", "git_revert", "safe_undo"],
        keywords: ["revert commit", "git revert", "safe rollback", "revert changes", "inverse commit"],
        whenToUse: "Use ONLY for posts discussing reverting commits safely in shared branches."
    },
    {
        id: "run-workflow",
        filename: "run-workflow.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/run-workflow.png`,
        description: "Run Workflow execution view displaying live output logs, step progress, and status for automated scripts",
        features: ["run_workflow", "workflow_execution", "live_logs"],
        keywords: ["run workflow", "execution logs", "workflow output", "automated build", "running tasks"],
        whenToUse: "Use ONLY for posts discussing executing workflows and reviewing automated script output."
    },
    {
        id: "search-commit-in-git-log",
        filename: "search-commit-in-git-log.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/search-commit-in-git-log.png`,
        description: "Search and filter commits by message, hash, or author inside the visual Git commit history log",
        features: ["search_commit", "git_log", "filter_history"],
        keywords: ["search commit", "search log", "find commit", "filter commits", "commit search", "git log search"],
        whenToUse: "Use ONLY for posts discussing finding commits, searching Git history, or filtering commit graphs."
    },
    {
        id: "share-node_modules",
        filename: "share-node_modules.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/share-node_modules.png`,
        description: "Worktree creation option sharing node_modules across worktrees to save gigabytes of disk space and install time",
        features: ["share_node_modules", "disk_savings", "node_modules", "dependency_sharing"],
        keywords: ["share node_modules", "node_modules", "save disk", "disk space", "shared dependencies", "npm install savings"],
        whenToUse: "Use ONLY for posts discussing saving disk space with node_modules or sharing dependencies across worktrees."
    },
    {
        id: "share-venv",
        filename: "share-venv.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/share-venv.png`,
        description: "Worktree creation option sharing Python virtual environments (.venv) across worktrees to avoid re-installing packages",
        features: ["share_venv", "python", "virtualenv", "dependency_sharing"],
        keywords: ["share venv", "python venv", "virtual environment", "python dependencies", "share virtualenv"],
        whenToUse: "Use ONLY for posts discussing Python virtual environment (.venv) sharing across worktrees."
    },
    {
        id: "shell-configuration",
        filename: "shell-configuration.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/shell-configuration.png`,
        description: "Shell settings page configuring default terminal shells (PowerShell, Git Bash, Zsh) in WorktreeWise",
        features: ["settings", "shell_configuration", "terminal_settings"],
        keywords: ["shell configuration", "default shell", "git bash", "zsh", "terminal setup", "shell options"],
        whenToUse: "Use ONLY for posts discussing configuring default shells or terminal emulator options."
    },
    {
        id: "shortcuts",
        filename: "shortcuts.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/shortcuts.png`,
        description: "Interactive keyboard shortcuts overlay displaying hotkeys for instant worktree navigation and actions",
        features: ["keyboard_shortcuts", "hotkeys", "productivity"],
        keywords: ["shortcuts", "keyboard shortcuts", "hotkeys", "cheat sheet", "quick keys", "keybindings"],
        whenToUse: "Use ONLY for posts discussing keyboard shortcuts, hotkey navigation, and power-user workflows."
    },
    {
        id: "sparse-checkout",
        filename: "sparse-checkout.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/sparse-checkout.png`,
        description: "Sparse checkout configuration screen selecting specific monorepo directories to clone and track",
        features: ["sparse_checkout", "monorepo", "selective_checkout"],
        keywords: ["sparse checkout", "monorepo", "subset directories", "selective checkout", "large repository"],
        whenToUse: "Use ONLY for posts discussing monorepos, sparse checkout, or working with a subset of a huge repository."
    },
    {
        id: "ssh-settings",
        filename: "ssh-settings.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/ssh-settings.png`,
        description: "SSH settings panel configuring SSH keys, agent forwarding, and Git remote authentication",
        features: ["settings", "ssh_settings", "authentication"],
        keywords: ["ssh settings", "ssh key", "authentication", "git ssh", "ssh agent"],
        whenToUse: "Use ONLY for posts discussing SSH key setup, Git authentication, or remote repository security."
    },
    {
        id: "unlock-worktree",
        filename: "unlock-worktree.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/unlock-worktree.png`,
        description: "Unlock Worktree modal removing the lock flag to allow safe pruning or branch deletion",
        features: ["unlock_worktree", "git_unlock", "worktree_actions"],
        keywords: ["unlock worktree", "unlock", "remove lock", "allow delete", "unprotect worktree"],
        whenToUse: "Use ONLY for posts discussing unlocking worktrees once work or experiments are concluded."
    },
    {
        id: "workflow",
        filename: "workflow.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/workflow.png`,
        description: "Workflows automation dashboard showing available automated worktree routines and one-click triggers",
        features: ["workflows", "workflow_dashboard", "automation"],
        keywords: ["workflow", "workflows", "automation dashboard", "run routines", "automated worktree"],
        whenToUse: "Use ONLY for posts discussing the workflows hub, running repeatable automation, or custom developer tasks."
    },
    {
        id: "worktree-locked",
        filename: "worktree-locked.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/worktree-locked.png`,
        description: "Worktree card displaying locked status badge and lock explanation preventing pruning",
        features: ["worktree_locked", "locked_badge", "protection_indicator"],
        keywords: ["worktree locked", "locked badge", "lock icon", "protected status", "locked worktree"],
        whenToUse: "Use ONLY for posts highlighting the locked status indicator or verifying a worktree is protected."
    },
    {
        id: "worktree-unlocked",
        filename: "worktree-unlocked.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/worktree-unlocked.png`,
        description: "Worktree card displaying unlocked status ready for cleanup or pruning",
        features: ["worktree_unlocked", "unlocked_badge", "clean_status"],
        keywords: ["worktree unlocked", "unlocked badge", "unlocked status", "ready to prune"],
        whenToUse: "Use ONLY for posts contrasting unlocked vs locked worktrees or prepping for cleanup."
    },
    {
        id: "worktrees-list-and-actions",
        filename: "worktrees-list-and-actions.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/worktrees-list-and-actions.png`,
        description: "Worktrees list view displaying action menus, fast branch checkout, directory paths, and status badges",
        features: ["worktree_list", "worktree_actions", "action_menu"],
        keywords: ["worktrees list", "action menu", "worktree actions", "manage branches", "list worktrees"],
        whenToUse: "Use ONLY for posts discussing the worktrees list view or context action menus."
    },
    {
        id: "worktreewise-subscription",
        filename: "worktreewise-subscription.png",
        type: "image",
        path: `${BASE_IMAGE_URL}/worktreewise-subscription.png`,
        description: "WorktreeWise Pro and subscription management screen detailing Pro features and license tier",
        features: ["subscription", "pro_tier", "license"],
        keywords: ["subscription", "pro tier", "worktreewise pro", "pricing", "license", "upgrade"],
        whenToUse: "Use ONLY for promotional posts discussing WorktreeWise Pro, subscription, or licensing."
    }
];

export const PUBLIC_MEDIA_ASSETS = MEDIA_ASSETS;

const LEGACY_ID_MAP: Record<string, string> = {
    "git-log": "dashboard",
    "01-git-log": "dashboard",
    "git-log-columns": "git-log-columns",
    "02-git-log-columns": "git-log-columns",
    "git-diff": "git-diff",
    "03-git-diff": "git-diff",
    "worktree-overview": "overview",
    "04-worktree-overview": "overview",
    "workflows": "workflow",
    "05-workflows": "workflow",
    "workflow-add": "add-workflow",
    "06b-add-workflow-configured": "add-workflow",
    "workflow-import": "import-workflow",
    "06c-import-workflow-action": "import-workflow",
    "workflow-edit": "edit-workflow",
    "06d-edit-workflow": "edit-workflow",
    "create-from-head": "create-worktree-from-head",
    "07-create-worktree-from-head": "create-worktree-from-head",
    "create-worktree-configured": "create-worktree-public",
    "08-create-worktree-configured": "create-worktree-public",
    "create-worktree-hooks": "create-worktree-with-hooks",
    "09-create-worktree-hooks": "create-worktree-with-hooks",
    "create-sparse-checkout": "sparse-checkout",
    "10-create-worktree-sparse-checkout": "sparse-checkout",
    "create-share-node-modules": "share-node_modules",
    "11-create-worktree-share-node-modules": "share-node_modules",
    "create-env-isolation": "per-gitworktree-config",
    "12-create-worktree-environment-isolation": "per-gitworktree-config",
    "create-from-local-branch": "create-worktree-from-local-branch",
    "13-create-worktree-from-local-branch": "create-worktree-from-local-branch",
    "create-from-remote-branch": "create-worktree-from-remote-branch",
    "14-create-worktree-from-remote-branch": "create-worktree-from-remote-branch",
    "create-from-tag": "create-worktree-from-tag",
    "15-create-worktree-from-tag": "create-worktree-from-tag",
    "worktree-actions": "actions",
    "16-worktree-actions": "actions",
    "worktree-actions-editors": "open-in-ide",
    "17-worktree-actions-editors": "open-in-ide",
    "worktree-actions-copy": "clipboard-actions",
    "18-worktree-actions-copy": "clipboard-actions",
    "worktree-actions-delete": "delete-worktree",
    "18b-worktree-actions-delete-options": "delete-worktree",
    "worktree-rename": "rename-worktree",
    "19-worktree-rename": "rename-worktree",
    "worktree-change-pattern": "change-naming-pattern",
    "20-worktree-change-pattern": "change-naming-pattern",
    "worktree-move": "move-worktree",
    "21-worktree-move": "move-worktree",
    "worktree-lock": "lock-worktree",
    "22-worktree-lock": "lock-worktree",
    "multiple-terminals": "open-in-terminal",
    "23-multiple-terminals": "open-in-terminal",
    "multiple-ai-agents": "multiple-ai-agents-public",
    "24-multiple-ai-agents": "multiple-ai-agents-public",
    "prune-worktrees": "prune-worktrees",
    "25-prune-worktrees": "prune-worktrees",
    "settings-worktrees": "naming-pattern-settings",
    "30-settings-worktrees": "naming-pattern-settings",
    "settings-editors": "editors-settings",
    "31-settings-editors": "editors-settings",
    "settings-ai-agents": "ai-agents-settings",
    "32-settings-ai-agents": "ai-agents-settings",
    "settings-shell": "shell-configuration",
    "33-settings-shell": "shell-configuration",
    "settings-git": "git-settings",
    "34-settings-git": "git-settings",
    "settings-encoding": "encoding-settings",
    "35-settings-encoding": "encoding-settings",
    "repository-start": "landing-health",
    "36-repository-start": "landing-health",
    "git-commit": "create-commit",
    "37-git-commit": "create-commit",
    "git-commit-file-diff": "diff-staged-file",
    "38-git-commit-file-diff": "diff-staged-file",
    "repair-worktree": "repair-worktree",
    "39-repair-worktree": "repair-worktree",
    "worktree-lock-action": "lock-worktree",
    "40-worktree-lock-action": "lock-worktree",
    "worktree-locked": "worktree-locked",
    "41-worktree-locked": "worktree-locked",
    "worktree-unlock-action": "unlock-worktree",
    "42-worktree-unlock-action": "unlock-worktree",
    "worktree-unlocked": "worktree-unlocked",
    "43-worktree-unlocked": "worktree-unlocked",
    "create-from-commit": "create-worktree-from-commit",
    "44-create-worktree-from-commit": "create-worktree-from-commit",
    "dark-mode": "dark-mode",
    "45-dark-mode": "dark-mode",
    "keyboard-shortcuts": "shortcuts",
    "47-keyboard-shortcuts": "shortcuts"
};

export function getMediaAssetUrl(mediaId?: string | null): string | null {
    if (!mediaId) return null;
    let cleanId = mediaId.trim().toLowerCase().replace(/\.png$/i, "");
    cleanId = cleanId.replace(/^v1-2-/, "");
    if (LEGACY_ID_MAP[cleanId]) {
        cleanId = LEGACY_ID_MAP[cleanId];
    }
    const asset = MEDIA_ASSETS.find((a) =>
        a.id.toLowerCase() === cleanId ||
        a.filename.toLowerCase() === cleanId ||
        a.filename.toLowerCase().replace(/\.png$/i, "") === cleanId ||
        a.path.toLowerCase().endsWith(cleanId)
    );
    if (asset) return asset.path;
    if (mediaId.startsWith("http://") || mediaId.startsWith("https://")) {
        return mediaId
            .replace("https://worktreewise.com/images/worktreewise/", `${BASE_IMAGE_URL}/`)
            .replace("https://worktreewise.com/images/v1.1.0/", `${BASE_IMAGE_URL}/`);
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
    let requestedId = post.mediaId.trim().toLowerCase().replace(/\.png$/i, "");
    requestedId = requestedId.replace(/^v1-2-/, "");
    if (LEGACY_ID_MAP[requestedId]) {
        requestedId = LEGACY_ID_MAP[requestedId];
    }

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
- Share Python virtual environment (.venv) across worktrees.
- Configure sparse checkout.
- Manage multiple worktrees visually.
- Use multiple AI coding agents in parallel isolated worktrees.
- Open isolated worktrees directly in AI coding agents (Cursor, Claude Code).
- View integrated AI agent workspace with file tree, terminal, and browser preview.
- Perform visual Git operations: cherry-pick, rebase, merge, bisect wizard, reset, and revert.

Do not invent features. Do not mention the deleted code-generator feature.

CRITICAL VISUAL & SCREENSHOT RELEVANCE RULES (DO NOT VIOLATE):
- WorktreeWise screenshots MUST ONLY be attached if the screenshot DIRECTLY proves or depicts the specific topic of the post.
- Follow the 'whenToUse' field in MEDIA_ASSETS strictly!
- NEVER attach an unrelated screenshot:
  * Do NOT attach 'git-diff' or 'git-log-columns' to a post discussing AI agents, environment isolation, locked worktrees, or node_modules.
  * Do NOT attach 'shortcuts' to a post discussing bug fixing, hotfixes, or parallel branching.
  * Do NOT attach 'naming-pattern-settings' to a post discussing environment isolation.
- IF A POST DOES NOT HAVE AN EXACT VISUAL MATCH: set "mediaId": null.
  Setting "mediaId": null is STRONGLY PREFERRED over attaching a loosely related or misleading image, because on X, a null mediaId automatically displays the rich, branded WorktreeWise link preview card for your ctaUrl!
- Never request generic AI-generated Git illustrations. Reference only valid 'id' values from MEDIA_ASSETS or null.

MEDIA_ASSETS (${MEDIA_ASSETS.length} Available Screenshots):
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

DYNAMIC HASHTAG RULES (CRITICAL FOR X ENGAGEMENT & REACH):
- DO NOT use static or identical tags across all posts.
- For EACH post, generate 2 to 4 hashtags that are specifically relevant to that post's topic, feature, and audience.
- POPULARITY ON X: Choose high-performing hashtags with proven high reach, developer search volume, and active engagement in the software development community on X.
- Tailor the hashtags dynamically depending on the subject of the post:
  * Git workflows, branching, PR reviews, commits, diffs, history: #Git, #GitHub, #CodeReview, #WebDev, #Programming, #Coding, #OpenSource, #VersionControl
  * AI coding agents, autonomous coding, Cursor, Claude Code, Copilot: #AICoding, #AIAgents, #CursorAI, #ClaudeCode, #DevTools, #AI, #SoftwareEngineering
  * Monorepos, disk space, node_modules sharing, dependencies: #JavaScript, #TypeScript, #NodeJS, #WebDev, #DevOps, #Frontend
  * Terminal workflows, CLI scripts, automation, post-creation hooks: #CLI, #DevOps, #Productivity, #Terminal, #Linux, #Bash, #DevTools
  * Environment isolation, .env configs, localhost port conflicts: #WebDev, #Backend, #FullStack, #SoftwareEngineering, #DevLife
  * IDE integrations (VS Code, Cursor, IntelliJ, Zed), developer productivity: #Productivity, #VSCode, #DevTools, #WebDev, #Programming
- Format tags in clean PascalCase without punctuation (e.g. #AICoding #DevTools #WebDev #SoftwareEngineering) separated by spaces.
- Put the generated hashtags in the "tags" array property of the JSON object AND append them at the end of the post "text" right after the WorktreeWise URL.

HOOKS, URLS, AND FORMATTING
- The opening sentence must describe a concrete developer situation, for example: "Created 5 worktrees. Which one is actually locked?", "Another worktree already owns localhost:8080.", "Still typing git worktree add several times a day?", or "Need to fix production without touching your current workspace?"
- Write for experienced software developers using concise, specific, conversational language.
- Use actual Git commands when useful.
- Use line breaks only when they improve scanning.
- Do not number posts.
- Avoid corporate language, hype, and excessive emojis.
- Every post MUST be accompanied by a relevant WorktreeWise page URL chosen from URLS (default to https://www.worktreewise.com).
- CRITICAL LENGTH CONSTRAINT: Maximum 280 characters for the ENTIRE post (including the WorktreeWise URL and dynamic hashtags). Keep the main body concise (~150-180 characters) so the full post stays strictly under 280 characters.

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
      "text": "Post copy here\\n\\nhttps://www.worktreewise.com\\n#Git #DevTools #WebDev",
      "category": "problem_solution",
      "feature": "multiple_ai_agents",
      "mediaId": "multiple-ai-agents-public",
      "ctaUrl": "https://www.worktreewise.com/ai-agents/git-worktrees",
      "intent": "conversion",
      "tags": ["#AICoding", "#DevTools", "#SoftwareEngineering"]
    }
  ]
}

Allowed categories: problem_solution, feature_demo, cli_vs_worktreewise, workflow, education, promotion.
Allowed intents: conversion, awareness, education.
tags must be an array of 2-4 popular, relevant hashtags on X.
mediaId must reference MEDIA_ASSETS or be null.
ctaUrl must reference URLS.
Return exactly ${postCount} objects in posts.`;
}
