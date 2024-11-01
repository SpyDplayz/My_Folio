import React from 'react'
import { HERO_CONTENT } from '../constants'
import photo from '../assets/photo.jpg';
import { animate, motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x:-100, opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: { duration:0.5 , delay: delay},
    },
});

const Hero = () => {
  return (
    <div className='mx-5 border-b-4 border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-10 text-6xl font tracking-tight lg:mt-16 lg:text-5xl'>
                        Alay Gosai
                    </motion.h1>

                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible" 
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent underline'>Frontend Developer
                    </motion.span>
                    
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-1 max-w-xl py-2 font-light tracking-tighter'>{HERO_CONTENT}
                    </motion.p>
                </div> 
            </div>
            <div className='w-full lg:w-1/2 p-4'>
                <div className='flex justify-center'>
                    <motion.img 
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:1.2}}
                    className='h-1/2 w-1/2 rounded-3xl' src={photo} alt="Photo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
