import { skills } from "@/utils"

import { useState } from "react"
import TechStack from "./TechStackComponent"
import Certifications from "./certifications"


const SecondSection = () => {
    const [currentInfo, setCurrentInfo] = useState("bio")

    function setCurrentInfoState(info: string) {
        setCurrentInfo(info)
    }


    return (
        <div className="w-full flex p-4 items-center flex-col bg-dark-black gap-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-primary-gold font-bold pb-3">About Me</h3>
            <div className="flex flex-col justify-center sm:flex-row max-w-6xl gap-3">
                <div className="w-full md:w-1/3 flex flex-col items-center gap-2">
                    <button className={`${currentInfo === 'bio' ? 'text-white border-white' : 'border-primary-gold text-primary-gold'} border bg-dark-black w-48 hover:border-primary-gold focus:border-primary-gold`}
                        type="button"
                        onClick={() => { setCurrentInfoState('bio') }}
                    >Bio</button>
                    <button className={`${currentInfo === 'stack' ? 'text-white border-white' : 'border-primary-gold text-primary-gold'} border bg-dark-black w-48 hover:border-primary-gold focus:border-primary-gold`}
                        type="button"
                        onClick={() => { setCurrentInfoState('stack') }}
                    >My Tech Stack</button>
                    <button className={`${currentInfo === 'skills' ? 'text-white border-white' : 'border-primary-gold text-primary-gold'} border bg-dark-black w-48 hover:border-primary-gold focus:border-primary-gold`}
                        type="button"
                        onClick={() => { setCurrentInfoState('skills') }}
                    >Other Skills</button>
                    <button className={`${currentInfo === 'certs' ? 'text-white border-white' : 'border-primary-gold text-primary-gold'} border bg-dark-black w-48 hover:border-primary-gold focus:border-primary-gold`}
                        type="button"
                        onClick={() => { setCurrentInfoState('certs') }}
                    >Certifications</button>
                </div>
                <div className="w-full md:w-2/3 items-center justify-start p-4 bg-primary-black/60 rounded-xl glassmorphic">
                    {
                        currentInfo === 'bio' && (
                            <p>
                                Full Stack Web Developer (MEAN &
                                MERN) with expertise in React, Angular,
                                and Express. Experienced in building
                                dynamic single-page applications and
                                websites. Holds an Introduction to Data
                                Science certificate and skilled in digital
                                marketing and copywriting.
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
                                    className="rounded-sm capitalize"
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
                </div>
            </div>
        </div>
    )
}

export default SecondSection