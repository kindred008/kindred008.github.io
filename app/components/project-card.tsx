

export default function ProjectCard() {
    return (
        <article className="grid grid-rows-[max-content_200px_1fr] border border-black rounded-md overflow-hidden">
            <header>
                <h2 className="p-[0.5rem]">rTown</h2>
            </header>

            <img
                className="object-contain w-full h-full"
                src="https://cdn.dribbble.com/userupload/14216386/file/original-fa3ea6f7666b57c2ee23608a046f60d2.jpg?resize=1600x1200"
                alt="rTown image"
            />

            <div className="p-[0.5rem]">
                <p>
                    r/town (beta) is a collaborative city-building experiment for subreddits, made possible by LLM technology. It's a city sim, a social playroom, and an innovation of AI in games.
                </p>
            </div>
        </article>
    );
}
