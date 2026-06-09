"use client"

import { useState } from "react";
import { IAllProjectData } from "../data/project-data";

export interface IProjectCard {
    projectData: IAllProjectData;
}

export default function ProjectCard(props: IProjectCard) {
    const {projectData} = props;

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

            </div>

        </article>
    );
}
