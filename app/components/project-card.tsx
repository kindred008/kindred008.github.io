import { IAllProjectData } from "../data/project-data";

export interface IProjectCard {
    projectData: IAllProjectData;
}

export default function ProjectCard(props: IProjectCard) {
    const {projectData} = props;

    return (
        <article className="grid grid-rows-[max-content_200px_1fr] border border-black rounded-md overflow-hidden">
            <header>
                <h2 className="p-[0.5rem]">{projectData.title}</h2>
            </header>

            <img
                className="object-contain w-full h-full"
                src={projectData.imageUrl}
                alt={`${projectData.title} image`}
            />

            <div className="p-[0.5rem]">
                <p>
                    {projectData.description}
                </p>
            </div>
        </article>
    );
}
