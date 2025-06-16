import React from 'react'
import EducationCard from './ui/EducationCard'

const Education = () => {
  return (
    <div className='min-h-screen mx-auto mt-20'>
        <div className='text-5xl text-primary text-center font-extrabold my-10'>
            Education
        </div>
        <EducationCard
            institute='Vellore Institute of Technology'
            location='Vellore, Tamil Nadu, India'
            degree='Bachelors of Technology in Computer Science and Engineering (BTech CSE)'
            cgpa="CGPA: 8.63"
            image='VIT.jpeg'
            duration='2022-2026'
        />
        <hr className='w-[72%] mx-auto'/>
        <EducationCard
            institute='Amity International School'
            location='Pushp Vihar, Delhi, India'
            degree='Central Board of Secondary Education (CBSE)'
            cgpa="Class 12 Board: 93.8%"
            image='amity.jpg'
            duration='2022'
        />
    </div>
  )
}

export default Education