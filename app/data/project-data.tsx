export interface IAllProjectData {
    title: string;
    description: string;
    imageUrl: string;
}

export const allProjectData: IAllProjectData[] = [
    {
        title: "rTown",
        description: "r/town (beta) is a collaborative city-building experiment for subreddits, made possible by LLM technology. It's a city sim, a social playroom, and an innovation of AI in games.",
        imageUrl: "https://cdn.dribbble.com/userupload/14216386/file/original-fa3ea6f7666b57c2ee23608a046f60d2.jpg?resize=1600x1200",
    },
    {
        title: "Guild of Thieves",
        description: "A multiplyer dungeon crawler game where you are a group of friends travel through dungeons to gain loot.",
        imageUrl: "https://assets.justinmind.com/wp-content/uploads/2021/07/game-ui-examples-dota.png",
    }
];