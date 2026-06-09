export interface IAllProjectData {
    title: string;
    description: string;
    imageUrl: string;
    responsibilities?: string[];
}

export const allProjectData: IAllProjectData[] = [
    {
        title: "rTown",
        description: "r/town (beta) is a collaborative city-building experiment for subreddits, made possible by LLM technology. It's a city sim, a social playroom, and an innovation of AI in games.",
        imageUrl: "https://cdn.dribbble.com/userupload/14216386/file/original-fa3ea6f7666b57c2ee23608a046f60d2.jpg?resize=1600x1200",
        responsibilities: [
            "Building robust front-ends",
        ],
    },
    {
        title: "Guild of Thieves",
        description: "A multiplayer dungeon crawler game where you are a group of friends travel through dungeons to gain loot.",
        imageUrl: "https://assets.justinmind.com/wp-content/uploads/2021/07/game-ui-examples-dota.png",
        responsibilities: [
            "Implementing gameplay mechanics",
            "Player progression behaviours",
            "Implementing synchronous multiplayer features",
            "Preparing builds for player playtests",
        ],
    }
];
