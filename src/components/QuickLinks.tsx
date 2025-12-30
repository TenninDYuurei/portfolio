// import { Link } from "react-router-dom"
import { links } from "../utils"

const QuickLinks = () => {
    return (
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 items-center justify-start font-orbitron">
            {links.map((link, index) => (
                <a
                    className="text-white font-bold  visited:text-primary-gold hover:text-white focus:text-white"
                    key={index}
                    target="blank"
                    title={link.title}
                    href={link.link}>{link.title}
                </a>
            ))}
        </div>
    )
}

export default QuickLinks