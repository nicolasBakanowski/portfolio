'use client'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border [#333333] rounded-full h-[280px] w-[280px] mt-52 opacity-10" />
      <div className="absolute border [#333333] rounded-full h-[350px] w-[350px] mt-52 opacity-10" />
      <div className="absolute border [#333333] rounded-full h-[530px] w-[530px] mt-52 opacity-10" />
      <div />
    </motion.div>
  )
}
export default BackgroundCircles
