'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
type Props = {
  urlArray?: Array<String>
  companyImage?: string
  companyName?: string
  started?: string
  ended?: string
  type?: string
  summary?: Array<String>
}
const ExperienceCard = ({
  urlArray,
  companyImage,
  companyName,
  started,
  ended,
  summary,
  type,
}: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl-:w[900px] snap-center bg-[#292929] p-10
     hover:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={companyImage}
        alt=""
      ></motion.img>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light uppercase"> {companyName} </h4>
        <p className="font-bolt text-2xl mt-1">{type}</p>
        <div className="flex space-x-2 my-2">
          {urlArray &&
            urlArray.map((url, index) => (
              <div
                key={index}
                className="h-10 w-10 rounded-full overflow-hidden"
              >
                <Image src={url.toString()} alt="" width={40} height={40} />
              </div>
            ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          started work-{started} -ended-{ended}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg"></ul>
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
