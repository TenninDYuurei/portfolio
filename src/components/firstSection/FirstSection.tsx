import React, { useEffect, useRef, useState } from "react";
import DDEIcon from "@/components/DDEImg.tsx";
import QuickLinks from "@/components/QuickLinks";
import MyImage from "@/assets/images/myImage.jpg";
import myCv from '@/assets/ovakporayeJosephCV.pdf'
import { motion, useInView } from "framer-motion";

const FirstSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const maxOrder = 3; // number of animated items - 1
    const containerRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef(null)

    const isInView = useInView(imageRef,{once:false})

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.2 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div className="w-full flex justify-center bg-dark-black flex-col items-center ">
            {/* HEADER */}
            <div className="w-[80%] flex p-4 justify-between max-w-6xl gap-4">
                <DDEIcon />
                <QuickLinks />
            </div>

            {/* HERO SECTION */}
            <div className="bg-primary-black/70 flex flex-col justify-center sm:flex-row gap-4 w-full border-white  glassmorphic p-4">
                {/* IMAGE SECTION */}
                <motion.img 
                ref={imageRef}
                initial={{opacity:0, y: 50}}
                // exit={{opacity:0,y:-50}}
                animate={isInView? {opacity:1, y:0}: {}}
                transition={{duration:1,ease:'easeOut'}}
                className="sm:w-[20%] py-8" 
                src={MyImage} 
                alt="My Image" 
                />

                {/* TEXT SECTION */}
                <div
                    ref={containerRef}
                    className={`w-full flex flex-col justify-center px-2 md:w-1/2 gap-3 text-center sm:text-left ${isVisible ? 'visible' : 'leaving'}`}
                >
                    <h1
                        style={{ ['--delay' as any]: `0ms`, ['--out-delay' as any]: `${(maxOrder - 0) * 120}ms` }}
                        className="text-item font-orbitron text-primary-gold text-lg sm:text-2xl lg:text-3xl"
                    >Hi, I'm Joseph 👋<br /> Your Friendly Neighborhood Tech Bro 😎</h1>

                    <h2
                        style={{ ['--delay' as any]: `120ms`, ['--out-delay' as any]: `${(maxOrder - 1) * 120}ms` }}
                        className="text-item text-white text-xl sm:text-3xl lg:text-5xl font-bold font-orbitron"
                    >Web Developer (MERN)</h2>

                    <p
                        style={{ ['--delay' as any]: `240ms`, ['--out-delay' as any]: `${(maxOrder - 2) * 120}ms` }}
                        className="text-item"
                    >
                        An alumni of the 3MTT cohort 1 software development track.
                        <br />
                        I help startups, businesses, and organizations grow online by combining clean, responsive web development with high-impact digital marketing.
                    </p>

                    <a
                        download
                        href={myCv}
                        type="button"
                        style={{ ['--delay' as any]: `360ms`, ['--out-delay' as any]: `${(maxOrder - 3) * 120}ms` }}
                        className="text-item w-fit bg-primary-gold text-black hover:text-white font-sans glassmorphic p-2 rounded-xl self-center sm:self-start"
                    >Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default FirstSection