import { skills } from "@/utils"
import {motion, useInView} from "framer-motion"
import { useRef, useState } from "react"
import TechStack from "./TechStackComponent"
import Certifications from "./certifications"




const SecondSection = () => {
    const [currentInfo, setCurrentInfo] = useState("bio")

    function setCurrentInfoState(info: string) {
        setCurrentInfo(info)
    }

    const infoRef = useRef(null)
    const isInfoInView = useInView(infoRef,{once:false})
    const infoObj = [
        { key: 'bio', label: 'Bio' },
        { key: 'stack', label: 'My Tech Stack' },
        { key: 'skills', label: 'Other Skills' },
        { key: 'certs', label: 'Certifications' },
    ]

    return (
        <div className="w-full min-h-[60vw] md:min-h-fit flex p-4 items-center flex-col bg-dark-black gap-3">
            <h3 className="text-xl sm:text-3xl lg:text-5xl text-primary-gold font-bold font-orbitron pb-3">About Me</h3>
            {/* // Section containing info */}
            <div className="flex flex-col-reverse justify-center sm:flex-row max-w-6xl gap-3">
                <motion.div 
                ref={infoRef}
                initial={{opacity:0, x: -200}}
                animate={isInfoInView? {opacity:1, x: 0}:{}}
                transition={{duration:1, ease:'easeOut'}}
                className="w-full md:w-1/3 flex flex-col items-center gap-2">

                    {
                        infoObj.map((item) => (
                            <button key={item.key} className={`${currentInfo === item.key ? 'text-white bg-white/20 border-white' : 'border-primary-gold text-primary-gold'} border bg-dark-black w-48 hover:border-primary-gold focus:border-primary-gold
                            rounded-xl p-2 font-bold font-orbitron glassmorphic
                            `}
                                type="button"
                                onClick={() => { setCurrentInfoState(item.key) }}
                            >{item.label}</button>
                        ))
                    }
                </motion.div>
                {/* DETAILS SECTION */}
                <motion.div
                    className="w-full md:w-2/3 items-center justify-start p-4 bg-primary-black/60 rounded-xl glassmorphic"
                    key={currentInfo}
                    initial={{ opacity: 0, y: 20, scale: 0.995 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    {
                        currentInfo === 'bio' && (
                            <p className="p-2">
                                Full Stack Web Developer (MEAN &
                                MERN) with expertise in React, Angular,
                                and Express.
                                <br />
                                Experienced in building
                                dynamic single-page applications and
                                websites. Holds an Introduction to Data
                                Science certificate and skilled in digital
                                marketing and copywriting.
                                <br />
                                Founder of Deefinity, a B2B and
                                B2C company, with a focus on
                                delivering high-quality solutions efficiently.
                                Solution-oriented, adaptable, and effective
                                in both independent and team settings.
                            </p>
                        )
                    }
                    {
                        currentInfo === 'stack' && (
                            <div>
                                <TechStack />
                            </div>
                        )
                    }
                    {
                        currentInfo === 'skills' && (
                            <div className="flex flex-wrap gap-4 font-bold text-primary-gold">
                                {skills.map((skill, index) => (
                                    <p key={index}
                                        className="rounded-md border border-white p-2 font-orbitron hover:text-white transition  hover:bg-white/30 glassmorphic capitalize"
                                    >{skill}</p>
                                ))}
                            </div>
                        )
                    }
                    {
                        currentInfo === 'certs' && (
                            <div>
                                <Certifications />
                            </div>
                        )
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default SecondSection