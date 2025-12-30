import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ItemProps = {
    children: React.ReactNode;
    direction?:string;
}


const ReusbleSLideLeftAnimationWrapper = ({ children,direction }: ItemProps) => {

    const ref = useRef(null)
    const isInView = useInView(ref,{once:false})
    const slideDirection = direction === 'right' ? 200 : -200

    return (
        <motion.div
        ref={ref}
            initial={{ opacity: 0, x: slideDirection }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            {children}
        </motion.div>  
        )
}

export default ReusbleSLideLeftAnimationWrapper