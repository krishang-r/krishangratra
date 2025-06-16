import React from 'react'
import { BentoGrid } from './ui/bento-grid'
import { BentoGridDemo } from './ui/grid-layout'

const Projects = () => {
  return (
    <div className='min-h-screen'>
        <div className='text-center text-5xl text-primary mt-30 font-semibold'>
            Projects
        </div>
        <div className='mt-15'>
            <BentoGridDemo />
        </div>
    </div>
  )
}

export default Projects