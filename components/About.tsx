import React from 'react'
import ImageCarousel from './ui/ImageCarousel'

const About = () => {
  return (
    <div className='relative min-h-screen mt-5'>
        <ImageCarousel />
        <div className='w-[70%] text-4xl text-secondary font-bold text-center m-auto'>
            I’m someone who finds joy in solving real problems through thoughtful design and clean code. I care about the little details, the user experience, and building things that not only work — but feel good to use. My goal is to keep learning, stay curious, and create digital experiences that leave a positive mark.
        </div>
    </div>
  )
}

export default About