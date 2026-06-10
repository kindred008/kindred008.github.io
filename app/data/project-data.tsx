export interface IProjectData {
    title: string;
    description: string;
    imageUrl: string;
    responsibilities?: string[];
}

export const allProjectData: IProjectData[] = [
    {
        title: "rTown",
        description: "r/town (beta) is a collaborative city-building experiment for subreddits, made possible by LLM technology. It's a city sim, a social playroom, and an innovation of AI in games.",
        imageUrl: "/projects/rtown/rtown-graphic.png",
        responsibilities: [
            "Building robust front-ends",
        ],
    },
    {
        title: "Guild of Thieves",
        description: "A multiplayer dungeon crawler game where you are a group of friends travel through dungeons to gain loot.",
        imageUrl: "/projects/thieves/thieves-coverart.png",
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
        imageUrl: "/projects/portfolio/hero-section.png",
        responsibilities: [
            "Setting up Next.js project with TypeScript",
            "Building responsive React components",
            "Implementing Tailwind CSS styling",
            "Designing and implementing UI layouts",
        ],
    }
];
