import DDEIcon from "@/components/DDEImg.tsx"
import QuickLinks from "@/components/QuickLinks"
import MyImage from "@/assets/images/myImage.jpg"

const FirstSection = () => {
    return (
        <div className="w-full flex p-4 justify-center bg-dark-black">
            {/* HEADER */}
            <div className="w-[80%] flex justify-between ">
                <DDEIcon />
                <QuickLinks />
            </div>
            {/* HERO SECTION */}
            <div className="bg-primary-black">
                <div className="resize-contain w-full md:w-40%">
                    <img src={MyImage} alt="My Image" />
                </div>
                <div className="w-full">
                    <p>Hi, I'm Joseph, Your Friendly Neighborhood Tech Bro</p>
                    <p>Web Developer</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab incidunt praesentium culpa animi! Earum facere accusamus laboriosam vitae incidunt magni iste? Consequuntur distinctio quas in totam autem, maxime, esse perspiciatis ex iusto ratione repellendus! Earum quod quos laboriosam impedit, soluta ipsum autem deleniti consequuntur, a aut iusto, molestias quo numquam.</p>
                </div>
            </div>
        </div>
    )
}

export default FirstSection