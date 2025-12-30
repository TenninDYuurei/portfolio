import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bhMobile from "@/assets/images/bh-mobile.png";
import bhTablet from "@/assets/images/bh-tablet.png";
import bhDesktop from "@/assets/images/bh-desktop.png";
import ln from "@/assets/images/ln1.png";
import bh from "@/assets/images/bh1.png";
import bhTwo from "@/assets/images/bh2.png";
import gtMetrixOne from "@/assets/images/gtMetrixStats.png"
import gtMetrixTwo from "@/assets/images/gtMetrixStats2.png"
import ReusableSLideLeftAnimationWrapper from "./reusbleSLideLeftAnimationWrapper";

type Project = {
    title: string;
    description: string;
    images: string[];
    url?: string;
};

const projects: Project[] = [
    {
        title: "Good score on GtMetrix",
        description: "A near perfect score on GTmetrix.",
        images: [gtMetrixOne, gtMetrixTwo],
    },
    {
        title: "Buildhive Responsive",
        description: "Responsive across all devices.",
        images: [bhMobile, bhTablet, bhDesktop],
    },
    {
        title: "Long Night Syling",
        description: "Masterful use of SASS. Click to view source code.",
        images: [ln],
        url: "https://github.com/TenninDYuurei/The-long-night",
    },
    {
        title: "Buildhive",
        description: "Clean well structured code.",
        images: [bh, bhTwo],
        // url: "https://buildhive.vercel.app/",
    },
];

const SlideCard: React.FC<{ project: Project }> = ({ project }) => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const images = project.images;
    const autoplayRef = useRef<number | null>(null);

    useEffect(() => {
        if (!isPaused) {
            autoplayRef.current = window.setInterval(() => {
                setIndex((i) => (i + 1) % images.length);
            }, 1000);
        }

        return () => {
            if (autoplayRef.current) window.clearInterval(autoplayRef.current);
        };
    }, [images.length, isPaused]);

    const goTo = (i: number) => setIndex((i + images.length) % images.length);

    return (
        <div
            className="group block relative overflow-hidden rounded-lg shadow-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <a href={project.url ?? undefined} target={project.url ? "_blank" : undefined} rel="noreferrer">
                <img src={images[index]} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
            </a>

            {/* arrows */}
            {images.length > 1 && (
                <>
                    <p
                        onClick={(e) => {
                            e.stopPropagation();
                            goTo(index - 1);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/30 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="font-bold text-md w-4 h-4  text-white" />
                    </p>

                    <p
                        onClick={(e) => {
                            e.stopPropagation();
                            goTo(index + 1);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/30 hover:bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-4 h-4 text-white" />
                    </p>
                </>
            )}

            {/* glass overlay */}
            <div className="absolute inset-0 flex items-end">
                <div className="w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="backdrop-blur-md bg-dark-black/30  border border-white/20 rounded-lg p-4">
                        <h3 className="text-white text-lg font-semibold drop-shadow">{project.title}</h3>
                        <p className="mt-1 text-sm text-white/90 drop-shadow">{project.description}</p>
                    </div>
                </div>
            </div>

            {/* dots */}
            {images.length > 1 && (
                <div className="absolute left-0 right-0 bottom-3 flex items-center justify-center gap-2 z-30">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => {
                                e.stopPropagation();
                                goTo(i);
                            }}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`w-2 h-2 rounded-full transition-opacity ${i === index ? "bg-white" : "bg-white/40"}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const CarouselProjects: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <ReusableSLideLeftAnimationWrapper 
                    direction="right"
                    key={p.title}
                    >
                        <SlideCard project={p} />
                    </ReusableSLideLeftAnimationWrapper>
                ))}
            </div>
        </div>
    );
};

export default CarouselProjects;
