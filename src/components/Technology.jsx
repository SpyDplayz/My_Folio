import {RiReactjsLine} from "react-icons/ri"
import {IoLogoJavascript} from "react-icons/io5"
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa"
import {motion} from 'framer-motion'

const IconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",          
        }
    }
})
const Technology = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
           <motion.h2 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0, y:-100}}
           transition={{duration:1}}
           className="my-20 text-center text-4xl">Technologies
           </motion.h2>

           <motion.div
        //    whileInView={{opacity:1,x:0}}
        //    initial={{opacity:0, x:-100}}
        //    transition={{duration:0.5, delay:0.5}}
           className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                variants={IconVariants(2.5)}
                // initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.6}}
                variants={IconVariants(3)}
                // initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div 
                variants={IconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-orange-600"/>
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.6}} 
                variants={IconVariants(2)}
                // initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-blue-500"/>
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                variants={IconVariants(3.5)}
                // initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </motion.div>
           </motion.div>
        </div>
    )
}

export default Technology;