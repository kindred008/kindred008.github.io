"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IProjectData } from "../data/project-data";

export interface IProjectCard {
    projectData: IProjectData;
}

export default function ProjectCard(props: IProjectCard) {
    const {projectData} = props;
    const [isResponsibilitiesExpanded, setIsResponsibilitiesExpanded] = useState(false);

    const responsibilities = projectData.responsibilities;
    const hasResponsibilities = responsibilities && responsibilities.length > 0;

    return (
        <article 
            className="group h-full flex flex-col bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl
                transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
        >

            {/*Image*/}
            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={projectData.imageUrl}
                    alt={`${projectData.title} image`}
                />
            </div>

            {/*Content*/}
            <div className="flex flex-col flex-1 p-2">

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                    {projectData.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1">
                    {projectData.description}
                </p>

                {hasResponsibilities && (
                    <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-auto">
                        <button
                            className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                            onClick={() => setIsResponsibilitiesExpanded(!isResponsibilitiesExpanded)}
                        >
                            <FontAwesomeIcon
                                icon={isResponsibilitiesExpanded ? faChevronDown : faChevronRight}
                                className="w-3"
                                aria-hidden="true"
                            />
                            My responsibilities
                        </button>

                        {isResponsibilitiesExpanded && (
                            <ul className="mt-2 space-y-2">
                                {responsibilities.map((responsibility, index) => (
                                    <li key={`responsibility_${index}`}
                                        className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                                    >
                                        <span className="font-bold">•</span>
                                         <span>{responsibility}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

            </div>

        </article>
    );
}
