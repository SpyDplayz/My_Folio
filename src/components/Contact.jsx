import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:100}}
            transition={{duration:1}}
            className="my-10 text-center text-4xl space-x-4 ">Get in Touch</motion.h1>
            <div 
            className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <motion.p 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1}}
                className="my-4">{CONTACT.phoneNo}
                </motion.p>

                <motion.a 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1}}
                href="mailto:spydplayz@gmail.com" type="email" className="border-b ">E-Mail
                </motion.a>
            </div>
        </div>
    )
}

export default Contact;
