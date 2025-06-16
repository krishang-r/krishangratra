import React from 'react'
import { BackgroundGradientAnimation } from './ui/BackgroundGradient'
import { TextGenerateEffect } from './ui/TextGenerate'
import { IoMdDownload } from "react-icons/io"
import { IoIosSend } from "react-icons/io"

const Hero = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <BackgroundGradientAnimation
        gradientBackgroundStart='rgb(255,255,255)'
        gradientBackgroundEnd='rgb(255,255,255)'
        fifthColor='rgb(230, 232, 197)'
        size='20%'
      />
      <div className="absolute inset-0">
        <div className='flex items-center justify-center px-4 text-center h-screen mt-auto'>
          <div>
            <h1 className='text-7xl font-extrabold uppercase' style={{ color: 'var(--primary)' }}>
              Krishang Ratra
            </h1>
            <TextGenerateEffect
              className='w-[50%] mx-auto'
              words="Somewhere between caffeine and creativity, you'll find me building things that matter."
            />
            <div className='w-[30%] mx-auto my-4 flex items-center justify-around px-2 text-center font-bold'>
              <a href="/files/Resume.pdf" download>
              <button className="p-[3px] relative w-[200px] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg" />
                <div className="px-8 py-2 bg-transparent rounded-[6px] relative group transition duration-200 text-white hover:text-xl">
                  RESUME <span><IoMdDownload className='inline-block -mt-1 p-0' /></span>
                </div>
              </button>
              </a>
              <a href="mailto:ratrakrishang@gmail.com">
              <button className="p-[3px] relative w-[200px] cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg" />
                <div className="px-8 py-2 bg-transparent rounded-[6px] relative group transition duration-200 text-white hover:text-xl">
                  MAIL <IoIosSend className='inline-block -mt-1 p-0' />
                </div>
              </button>
              </a>
            </div>
          </div>
        </div>
        {/* <h2 className='absolute bottom-4'>Scroll to see more!!</h2> */}
      </div>
    </div>
  )
} 

export default Hero
