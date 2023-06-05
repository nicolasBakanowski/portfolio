'use client'
import React  from 'react'
import { motion } from 'framer-motion'
type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl-:w[900px] snap-center bg-[#292929] p-10
     hover:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{duration: 1.2}} 
        whileInView={{opacity: 1, y:0 }}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://live.staticflickr.com/65535/52951904516_9676b728de_o_d.jpg' alt=''>
        </motion.img>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'> DEVELOPER </h4>
            <p className='font-bolt text-2xl mt-1'>
                fullstack 
            </p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="https://live.staticflickr.com/65535/52951904516_9676b728de_o_d.jpg" alt="" />
                {/* tech used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>started work ..  -   ended..</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'></ul>
                <li>Summary point</li>
                <li>Summary point</li>
                <li>Summary point</li>
                <li>Summary point</li>
            <ul>summary</ul>
        </div>
    </article>
  )
}
export default ExperienceCard