'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ['Developer', 'Designer', 'Creator'],
    loop: true,
    delaySpeed: 3000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="https://live.staticflickr.com/65535/52938424672_bb2d915944_o_d.jpg"
        alt=""
        width={150}
        height={150}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div>
        <h2 className="text-sm uppercase text-yellow-50 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6-xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
      </div>
      <div className="pt-5    ">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">skills</button>
        </Link>
      </div>
    </div>
  )
}
export default Hero
