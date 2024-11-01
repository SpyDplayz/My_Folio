import React from 'react'
import { HERO_CONTENT } from '../constants'
import photo from '../assets/photo.jpg';


const Hero = () => {
  return (
    <div className='mx-5 border-b-4 border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-10 text-6xl font tracking-tight lg:mt-16 lg:text-5xl'>Alay Gosai</h1>
                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent underline'>Frontend Developer</span>
                    <p className='my-1 max-w-xl py-2 font-light tracking-tighter'>{HERO_CONTENT}</p>
                </div> 
            </div>
            <div className='w-full lg:w-1/2 p-4'>
                <div className='flex justify-center'>
                    <img className='h-1/2 w-1/2 rounded-3xl' src={photo} alt="Photo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
