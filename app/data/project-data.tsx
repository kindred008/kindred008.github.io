export type ProjectCategory = "professional" | "personal" | "university" | "other";

export interface IProjectData {
    title: string;
    description: string;
    category: ProjectCategory;
    bannerUrl?: string;
    mediaUrls?: string[];
    responsibilities?: string[];
}

export const allProjectData: IProjectData[] = [
    {
        title: "New Portfolio Website",
        category: "personal",
        description: "A personal portfolio website showcasing my projects.",
        bannerUrl: "/projects/portfolio/hero-section.png",
        responsibilities: [
            "Setting up Next.js project with TypeScript",
            "Building responsive React components",
            "Implementing Tailwind CSS styling",
            "Designing and implementing UI layouts",
        ],
    },
    {
        title: "rTown",
        description: "rTown is a massively social city simulation where communities democratically vote on player-made proposals to turn collective imagination into evolving cities.",
        category: "professional",
        bannerUrl: "/projects/rtown/rtown-graphic.png",
        mediaUrls: [
            "/projects/rtown/attract-post.webm",
            "/projects/rtown/town-ui.webp",
            "/projects/rtown/town-mobile-ui.webp",
            "/projects/rtown/ftue-start.webm",
            "/projects/rtown/summary-slide-ui.webp",
            "/projects/rtown/project-slide-ui.webp",
            "/projects/rtown/project-slide-mobile.webp",
            "/projects/rtown/entity-proposal.webp",
            "/projects/rtown/live-proposal.webp",
            "/projects/rtown/settings-ui.webp",
            "/projects/rtown/stickers-ui.webp",
            "/projects/rtown/stickers.webp",
            "/projects/rtown/voting-slide.webm",
            "/projects/rtown/notifications-prompt.webp",
            "/projects/rtown/post-leaderboards.webp",
            "/projects/rtown/posts-voting.webp",
            "/projects/rtown/propose-post.webp",
            "/projects/rtown/vote-in-progress.webp",
            "/projects/rtown/ingame-leaderboards.webp",
        ],
        responsibilities: [
            "Created responsive user interfaces using React, Tailwind and TypeScript",
            "Developed gameplay systems in Three.js and TypeScript",
            "Implemented synchronous and asynchronous multiplayer features",
            "Developed scalable backend systems, APIs and Redis-based data storage to support thousands of concurrent players",
            "Contributed to an advanced multi-agent AI-driven simulation system using Python and Google's Agent Development Kit",
            "Built and iterated on live-ops systems (e.g. Push Notifications, Analytics, In-app purchases)",
            "Supported BETA rollout through community interaction and moderation",
            "Contributed to product design",
        ],
    },
    {
        title: "Guild of Thieves",
        description: "Join friends in a surreal fantasy world to recover loot in co-operative action-adventure-rpg gameplay. Become the richest party in the Thieves Guild!",
        category: "professional",
        bannerUrl: "/projects/thieves/thieves-coverart.png",
        mediaUrls: [
            "/projects/thieves/opening-movie.webm",
            "/projects/thieves/clapping.webp",
            "/projects/thieves/thief-level.webp",
            "/projects/thieves/combat.webm",
            "/projects/thieves/celebration.webp",
            "/projects/thieves/lobby.webp",
            "/projects/thieves/holding-player.webp",
            "/projects/thieves/loadout.webp",
            "/projects/thieves/corridor-level.webp",
            "/projects/thieves/large-level1.webp",
            "/projects/thieves/large-level2.webp",
            "/projects/thieves/picking-up.webm",
        ],
        responsibilities: [
            "Implemented gameplay mechanics in PlayCanvas and TypeScript",
            "Created and designed player progression behaviours",
            "Implemented synchronous multiplayer features",
            "Prepared builds for player playtests",
        ],
    },
    {
        title: "Hatch Cats",
        category: "professional",
        description: "Hatch Cats is a kitty-breeding game designed for Reddit.",
        bannerUrl: "/projects/hatchcats/cats-coverimage.png",
        responsibilities: [
            "Updated analytics implementation",
            "Added Slack alerts for production and dev errors",
        ],
    },
    {
        title: "Project Tactics",
        category: "personal",
        description: "Project Tactics is an in-progress tactical SRPG game.",
        bannerUrl: "/projects/project-tactics/unit-selection.png",
        mediaUrls: [
            "/projects/project-tactics/zoomed-out.png",
            "/projects/project-tactics/unit-attack.mp4",
            "/projects/project-tactics/unit-selection.png",
            "/projects/project-tactics/unit-attack.png",
            "/projects/project-tactics/unit-commands.mp4",
        ],
        responsibilities: [
            "Implement gameplay and UI logic in Unity and C#",
            "Implement Dijkstra’s algorithm for pathfinding",
            "Create a utility-based AI system",
        ],
    },
    {
        title: "The Witch's Familiar",
        category: "personal",
        description: "You are the familiar of a witch who is rushing to complete her potion. Be fast, for the witch is not very patient!",
        bannerUrl: "https://img.itch.zone/aW1nLzE0NzQ1NTUzLnBuZw==/315x250%23c/CqyhM0.png",
        mediaUrls: [
            "/projects/witches-familiar/gameplay-image-1.webp",
            "/projects/witches-familiar/gameplay-image-2.webp",
            "/projects/witches-familiar/gameplay-image-3.webp",
        ],
        responsibilities: [
            "Implement all gameplay and UI logic in Unity and C#",
            "Assisting with game design"
        ],
    },
    {
        title: "The Forbidden Library",
        category: "personal",
        description: "A librarian discovers a dark secret about her workplace, to solve it she must dig deeper!",
        bannerUrl: "/projects/the-forbidden-library/thumbnail.webp",
        mediaUrls: [
            "/projects/the-forbidden-library/gameplay-level1.webp",
            "/projects/the-forbidden-library/piano-minigame.webp",
            "/projects/the-forbidden-library/dialogue.webp",
            "/projects/the-forbidden-library/ghost.webp",
            "/projects/the-forbidden-library/gameplay-level3.webp",
        ],
        responsibilities: [
            "Implement movement and gameplay logic",
            "Create quest and hint system",
            "Create piano minigame",
            "Assisting with game design"
        ],
    },
    {
        title: "Single Quality Metric",
        category: "professional",
        description: "An internal site used to calculate and display the quality of the Unity Engine between different versions.",
        responsibilities: [
            "Primary frontend developer, building UI and client logic with ASP.NET, Blazor, and C#",
            "Assisted with backend work, including aggregating multi-year Jira data for reporting",
            "Created unit tests and Playwright end-to-end tests",
        ],
    },
    {
        title: "Unity Prototype Projects",
        category: "professional",
        description: "A selection of projects created internally at Unity to test the engine. I only have permission to show a small selection of these.",
        bannerUrl: "/projects/unity-prototypes/monthlyhop-ending.webp",
        mediaUrls: [
            "/projects/unity-prototypes/monthlyhop-ending.webp",
            "/projects/unity-prototypes/monthlyhop.mp4",
            "/projects/unity-prototypes/tideofgulls.mp4",
            "/projects/unity-prototypes/monthlyhop-lobby.webp",
            "/projects/unity-prototypes/monthlyhop-gameplay.webp",
            "/projects/unity-prototypes/monthlyhop-gameplay2.webp",
            "/projects/unity-prototypes/monthlyhop-gameplay3.webp",
        ],
        responsibilities: [
            "Implement gameplay and UI logic in Unity and C#",
            "Create UIs in UI Toolkit",
            "Implement multiplayer logic",
            "Setup Unity Relay and Lobby for connecting players",
            "Oversee teams use of Netcode for GameObjects",
            "Assisting with game design and direction"
        ],
    },
    {
        title: "Kindred Leaderboards",
        category: "university",
        description: "Web application for providing leaderboards for game developers to integrate into their game. Created as my final year University project.",
        bannerUrl: "/projects/kindred-leaderboards/kindred-leaderboards.png",
        responsibilities: [
            "Built the web admin UI using Blazor and C#",
            "Implemented the backend REST API with ASP.NET Core (C#) to host leaderboards and enable game integration",
            "Designed UI and UX in Figma, and used Jira for task management",
            "Created Unity Package for easy integration into Unity Games",
            "Built a sample Unity game demonstrating the leaderboards in action",
        ],
    },
    {
        title: "Old Portfolio Website",
        category: "university",
        description: "Old portfolio website created for a third year University module on Front-End Web Development.",
        bannerUrl: "/projects/old-portfolio-website/index.webp",
        mediaUrls: [
            "/projects/old-portfolio-website/index.webp",
            "/projects/old-portfolio-website/about-me.webp",
            "/projects/old-portfolio-website/projects.webp",
            "/projects/old-portfolio-website/contact.webp",
        ],
        responsibilities: [
            "Built the site using HTML, CSS and vanilla JavaScript",
        ],
    },
    {
        title: "Kindred Cafe",
        category: "university",
        description: "Mobile cafe app with custom ordering and admin order-management interfaces. Created for a second year University module on Mobile Application Development.",
        bannerUrl: "/projects/kindred-cafe/banner-image.png",
        mediaUrls: [
            "/projects/kindred-cafe/order-screen.webp",
            "/projects/kindred-cafe/register-screen.webp",
            "/projects/kindred-cafe/submitting-review.webp",
            "/projects/kindred-cafe/google-pay.webp",
        ],
        responsibilities: [
            "Built the app using Kotlin and Android Studio",
            "Structured the app using Model-View-Presenter (MVP)",
            "Integrated Firebase for backend storage and authentication",
            "Integrated Google Pay for payments",
        ],
    },
];
