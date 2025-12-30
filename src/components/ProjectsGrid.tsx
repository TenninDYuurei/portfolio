import React from "react";
import dee from "@/assets/images/deesEmporium.png"
import longNight from "@/assets/images/longNight.png"
import buildhive from "@/assets/images/buildhive.png"
import telemedicinePic from "@/assets/images/vitaly-gariev-EVX9pt2dD1o-unsplash.jpg"
import ReusbleSLideLeftAnimationWrapper from "./reusbleSLideLeftAnimationWrapper";


type Project = {
    title: string;
    description: string;
    image: string;
    url?: string;
};

const projects: Project[] = [
    {
        title: "Buildhive",
        description: "A freelance platform for construction workers to find jobs made with React, TS and Tailwind",
        image: buildhive,
        url: "https://buildhive.vercel.app/",
    },
    {
        title: "Dee's Digital Emporium",
        description: "A simple landing page for a digital marketing ad.",
        image: dee,
        url: "https://dees-emporium.netlify.app/",
    },
    {
        title: "The Long Night",
        description: "A landing page for a book on amazon kindle made with React and Scss.",
        image: longNight,
        url: "https://the-long-night.pages.dev",
    },
    {
        title: "Photo by Vitaly Gariev on Unsplash",
        description: "I worked with a team to build a complex website for a telemedicine corporation, however due to an NDA i can't provide any links.",
        image: telemedicinePic,
        // no url so clicking does nothing
    },
];

const ProjectsGrid: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <ReusbleSLideLeftAnimationWrapper
                            key={p.title}
                    >
                        <a
                            target="_blank"
                            href={p.url}
                            className="group block relative overflow-hidden rounded-lg shadow-lg"
                        >
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 flex items-end">
                                <div className="w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="backdrop-blur-md bg-dark-black/30 dark:bg-gray-900/40 border border-white/20 rounded-lg p-4">
                                        <h3 className="text-white text-lg font-semibold drop-shadow">{p.title}</h3>
                                        <p className="mt-1 text-sm text-white/90 drop-shadow">{p.description}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </ReusbleSLideLeftAnimationWrapper>
                ))}
            </div>
        </div>
    );
};

export default ProjectsGrid;
