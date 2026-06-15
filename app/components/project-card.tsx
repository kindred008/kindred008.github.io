"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { IProjectData } from "../data/project-data";

interface ProjectModalProps {
    projectData: IProjectData;
    onClose: () => void;
    onOpenLightbox: () => void;
}

function ProjectModal(props: ProjectModalProps) {
    const {projectData, onClose, onOpenLightbox} = props;

    const responsibilities = projectData.responsibilities;
    const hasResponsibilities = responsibilities && responsibilities.length > 0;

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl 
                bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >

                <button type="button" aria-label="Close project details"
                    className="absolute right-4 top-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800"
                    onClick={() => onClose()}
                >
                    <FontAwesomeIcon icon={faXmark} className="w-4" />
                </button>

                <div className="overflow-hidden rounded-t-xl bg-slate-100 dark:bg-slate-800"
                >
                    <Image
                        className="w-full h-full object-cover max-h-[50vh]"
                        src={projectData.bannerUrl}
                        alt={`${projectData.title} image`}
                        width={600}
                        height={400}
                    />
                </div>

                <div className="flex flex-col gap-1 flex-1 p-2 text-slate-900 dark:text-white">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1">
                        {projectData.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 flex-1">
                        {projectData.description}
                    </p>

                    {projectData.imageUrls && projectData.imageUrls.length > 0 && (
                        <div className="flex justify-center">
                            <button
                                onClick={onOpenLightbox}
                                className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold cursor-pointer"
                            >
                                View Gallery
                            </button>
                        </div>
                    )}

                    {hasResponsibilities && (
                        <div className="rounded-xl p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700">
                            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300">
                                My Contributions
                            </h4>

                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                {responsibilities.map((responsibility, index) => (
                                    <li key={`responsibility_${index}`}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="font-bold">•</span>
                                        <span>{responsibility}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}

export interface IProjectCard {
    projectData: IProjectData;
}

export default function ProjectCard(props: IProjectCard) {
    const {projectData} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const slides = projectData.imageUrls?.map((src) => ({ src })) ?? [{ src: projectData.bannerUrl }];

    return (
        <>
            {isModalOpen && 
                <ProjectModal
                    projectData={projectData}
                    onClose={() => setIsModalOpen(false)}
                    onOpenLightbox={() => setIsLightboxOpen(true)}
                />
            }

            <Lightbox
                open={isLightboxOpen}
                close={() => setIsLightboxOpen(false)}
                slides={slides}
            />

            <article 
                className="group h-full flex flex-col break-inside-avoid-column mb-5 bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl
                    transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >

                {/*Image*/}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                    <Image
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        src={projectData.bannerUrl}
                        alt={`${projectData.title} image`}
                        width={320}
                        height={192}
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/70 via-black/10 to-transparent text-white text-sm font-semibold pb-2">
                        View Details
                    </span>
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
        </>
    );
}
