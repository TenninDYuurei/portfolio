import { useRef } from "react"
import DDEIcon from "../DDEImg"
import QuickLinks from "../QuickLinks"
import { useInView, motion } from "framer-motion"

const FifthSection = () => {

    const contactRef = useRef<HTMLDivElement | null>(null)
    const slideRef = useRef(null)
    const isInView = useInView(slideRef, { once: false })

    return (
        <motion.div
            ref={slideRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="bg-primary-black py-12 w-full flex flex-col items-center justify-center gap-8">
            <div className="h-full border border-white/30 hover:bg-white/30 hover:scale-[1.02] transition duration-300 rounded-xl bg-white/15 glassmorphic p-2 m-4">
                <h2 className="text-2xl md:text-4xl font-bold font-orbitron text-primary-gold text-center mb-2">Let's work on your next project!</h2>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between">
                    <p className="text-white text-center w-full  mb-4">
                        Whether you're a startup, a small business, or an established enterprise, I'm here to help you bring your vision to life. Let's collaborate to create a stunning online presence that drives results.
                    </p>

                    {/* Contact me button */}
                    <p
                        onClick={() => { contactRef.current?.focus(); }}
                        className="cursor-pointer font-sans text-nowrap text-white text-center mb-4 font-bold border border-white/30 h-fit w-fit self-center p-2 bg-primary-gold/60 glassmorpic  font-orbitron rounded-xl">Contact me 👇</p>

                    {/* View souurce code */}
                    <p>Click <a href="https://github.com/TenninDYuurei/portfolio" target="_blank" rel="noopener noreferrer" className="text-primary-gold font-sans font-bold ">
                        here
                    </a> to view the source code for this site.</p>
                </div>
            </div>
            <div
                ref={contactRef}
                tabIndex={-1}
                className="w-[80%] flex p-4 focus:border border-white/50 rounded-md justify-between max-w-6xl gap-4">
                <QuickLinks />
                <DDEIcon />
            </div>
        </motion.div>
    )
}

export default FifthSection