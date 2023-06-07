'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  const itecLabsImage =
    'https://live.staticflickr.com/65535/52951904516_9676b728de_o_d.jpg'
  const techs = [
    'https://live.staticflickr.com/65535/52955118245_ca86392979_b_d.jpg', //js
    'https://live.staticflickr.com/65535/52957606073_d46e2e0a14_t_d.jpg', //node
    'https://live.staticflickr.com/65535/52957097631_caef7366ff_o_d.png', //ts
    'https://live.staticflickr.com/65535/52957090881_9cf9122bc9_b_d.jpg', //react
    'https://live.staticflickr.com/65535/52957233194_ec6ea38bf7_o_d.png', //next
    'https://live.staticflickr.com/65535/52957472725_c88bcbb8be_b_d.jpg', //python
    'https://live.staticflickr.com/65535/52957472470_367e0bccfd_b_d.jpg', //flask
    'https://live.staticflickr.com/65535/52957089086_6659206b4b_b_d.jpg', //mongo
    'https://live.staticflickr.com/65535/52957232644_aa99059db3_o_d.png', //mysql
    'https://live.staticflickr.com/65535/52956535452_d1150f6166_o_d.png', //docker
  ]
  const techItecLabs = [
    'https://live.staticflickr.com/65535/52957472725_c88bcbb8be_b_d.jpg', //python
    'https://live.staticflickr.com/65535/52955118245_ca86392979_b_d.jpg', //js
    'https://live.staticflickr.com/65535/52957472470_367e0bccfd_b_d.jpg', //flask
    'https://live.staticflickr.com/65535/52957232644_aa99059db3_o_d.png', //mysql
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen overflow-hidden text-lft md:text-left
        md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-50">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap snap-mandatory">
        <ExperienceCard
          urlArray={techItecLabs}
          companyImage={itecLabsImage}
          companyName={'iteclabs'}
          started={'12/02'}
          ended={'30/10'}
          summary={[]}
          type={'fullStack developer'}
        />
      </div>
    </motion.div>
  )
}
export default Experience
