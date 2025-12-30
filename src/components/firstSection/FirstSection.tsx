import DDEIcon from "@/components/DDEImg.tsx"
import QuickLinks from "@/components/QuickLinks"
import MyImage from "@/assets/images/myImage.jpg"

const FirstSection = () => {
    return (
        <div className="w-full flex justify-center bg-dark-black flex-col items-center ">
            {/* HEADER */}
            <div className="w-[80%] flex p-4 justify-between max-w-6xl">
                <DDEIcon />
                <QuickLinks />
            </div>

            {/* HERO SECTION */}
            <div className="bg-primary-black/70 flex flex-col justify-center sm:flex-row gap-4 w-full border-white  glassmorphic p-4">
                {/* IMAGE SECTION */}
                <img className="sm:w-[20%] py-8" src={MyImage} alt="My Image" />
                {/* <div className="md:w-[40%] flex items-center justify-end overflow-hidden p-8">
                </div> */}

                {/* TEXT SECTION */}
                <div className="w-full flex flex-col justify-center px-2 md:w-1/2 gap-3">
                    <h1 className="font-orbitron text-primary-gold text-lg sm:text-2xl lg:text-3xl">Hi, I'm Joseph 👋<br /> Your Friendly Neighborhood Tech Bro 😎</h1>
                    <h2 className="text-white text-xl sm:text-3xl lg:text-5xl font-bold font-orbitron">Web Developer (MERN)</h2>
                    <p>
                        An alumni of the 3MTT cohort 1 software development track.
                        <br />
                        I help startups, businesses, and organizations grow online by combining clean, responsive web development with high-impact digital marketing.                        </p>
                </div>
            </div>
        </div>
    )
}

export default FirstSection