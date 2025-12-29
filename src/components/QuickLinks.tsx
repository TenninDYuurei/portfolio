// import { Link } from "react-router-dom"
import { links } from "../utils"

const QuickLinks = () => {
    return (
        <div className="flex flex-wrap gap-4 items-center justify-center">
            {links.map((link, index) => (
                <a
                    className="text-primary-gold visited:text-primary-gold"
                    key={index}
                    title={link.title}
                    href={link.link}>{link.title}
                </a>
            ))}
        </div>
    )
}

export default QuickLinks