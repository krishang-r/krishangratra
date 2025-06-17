import React from 'react';
import { BackgroundGradientAnimation } from './ui/BackgroundGradient';
import { TextGenerateEffect } from './ui/TextGenerate';
import { IoMdDownload } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

const Hero = () => {
  return (
    <div className='relative min-h-screen'>
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
              className='md:w-[50%] w-[90%] mx-auto' // Adjusted width for small screens
              words="Somewhere between caffeine and caffeine and creativity, you'll find me building things that matter."
            />
            {/* THIS IS THE CRUCIAL CHANGE FOR BUTTONS */}
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 my-4 font-bold max-w-full mx-auto p-4'>
              <a href="/files/Resume.pdf" download className="w-full md:w-[200px]"> {/* Make link full width on small screens */}
                <button className="p-[3px] relative w-full cursor-pointer"> {/* Button takes full width of its parent link */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg" />
                  <div className="px-8 py-2 bg-transparent rounded-[6px] relative group transition duration-200 text-white hover:text-xl">
                    RESUME <span><IoMdDownload className='inline-block -mt-1 p-0' /></span>
                  </div>
                </button>
              </a>
              <a href="mailto:ratrakrishang@gmail.com" className="w-full md:w-[200px]"> {/* Make link full width on small screens */}
                <button className="p-[3px] relative w-full cursor-pointer"> {/* Button takes full width of its parent link */}
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
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </div>
  )
}

export default Hero;