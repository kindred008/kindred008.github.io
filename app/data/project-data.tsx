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
        title: "rTown",
        description: "r/town (beta) is a collaborative city-building experiment for subreddits, made possible by LLM technology. It's a city sim, a social playroom, and an innovation of AI in games.",
        category: "professional",
        bannerUrl: "/projects/rtown/rtown-graphic.png",
        mediaUrls: [
            "/projects/rtown/project-slide-ui.png",
            "/projects/rtown/summary-slide-ui.png",
            "/projects/rtown/town-ui.png",
        ],
        responsibilities: [
            "Creating responsive user interfaces",
            "Developing gameplay systems",
            "Implementing synchronous and asynchronous multiplayer features",
            "Developing scalable backend systems, APIs and Redis-based data storage to support thousands of concurrent players",
            "Contributing to an advanced multi-agent AI-driven simulation system",
            "Building and iterating on live-ops systems (e.g. Push Notifications, Analytics, In-app purchases)",
            "Supporting BETA rollout through community interaction and moderation",
        ],
    },
    {
        title: "Guild of Thieves",
        description: "A multiplayer dungeon crawler game where you are a group of friends travel through dungeons to gain loot.",
        category: "professional",
        bannerUrl: "/projects/thieves/thieves-coverart.png",
        mediaUrls: [
            "/projects/thieves/opening-movie.mp4",
        ],
        responsibilities: [
            "Implementing gameplay mechanics",
            "Player progression behaviours",
            "Implementing synchronous multiplayer features",
            "Preparing builds for player playtests",
        ],
    },
    {
        title: "Portfolio Website",
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
        title: "Kindred Leaderboards",
        category: "university",
        description: "Web application for providing leaderboards for game developers to integrate into their game.",
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
        title: "Kindred Cafe",
        category: "university",
        description: "Mobile cafe app with custom erdering and admin order-management interfaces. Created for a second year University module on Mobile Application Development.",
        bannerUrl: "/projects/kindred-cafe/banner-image.png",
        mediaUrls: [
            "/projects/kindred-cafe/order-screen.webp",
            "/projects/kindred-cafe/register-screen.webp",
            "/projects/kindred-cafe/submitting-review.webp",
            "/projects/kindred-cafe/google-pay.webp",
        ],
        responsibilities: [
            "Built the app using Kotlin and Android Studio",
            "Structure the app using Model-View-Presenter (MVP)",
            "Integrated Firebase for backend storage and authentication",
            "Integrated Google Pay for payments",
        ],
    },
];
