export interface IProjectData {
    title: string;
    description: string;
    bannerUrl: string;
    imageUrls?: string[];
    responsibilities?: string[];
}

export const allProjectData: IProjectData[] = [
    {
        title: "rTown",
        description: "r/town (beta) is a collaborative city-building experiment for subreddits, made possible by LLM technology. It's a city sim, a social playroom, and an innovation of AI in games.",
        bannerUrl: "/projects/rtown/rtown-graphic.png",
        imageUrls: [
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
        bannerUrl: "/projects/thieves/thieves-coverart.png",
        responsibilities: [
            "Implementing gameplay mechanics",
            "Player progression behaviours",
            "Implementing synchronous multiplayer features",
            "Preparing builds for player playtests",
        ],
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my projects.",
        bannerUrl: "/projects/portfolio/hero-section.png",
        responsibilities: [
            "Setting up Next.js project with TypeScript",
            "Building responsive React components",
            "Implementing Tailwind CSS styling",
            "Designing and implementing UI layouts",
        ],
    }
];
