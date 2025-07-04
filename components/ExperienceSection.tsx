import React from 'react'
import JobCard from './ui/JobCard'
import CourseCard from './ui/CourseCard'

const ExperienceSection = () => {
  return (
    <div className='min-h-screen'>
      <div className='text-5xl text-primary text-center font-extrabold my-10'>
        Experience
      </div>
      <div className='mx-auto w-[72%] text-4xl text-secondary font-bold'>
        Professional Journey
      </div>
      <JobCard 
        companyName={"Fortis Healthcare Limited"}
        role={"Software Intern"}
        from={"June 2024"}
        to={"July 2024"}
        location={"Gurugram, Haryana, India"}
        description={"Developed a web-based invoicing tool using Flask, reducing manual invoice generation time by 70%. Integrated cloud-based storage with automated invoice dispatch through email and WhatsApp, significantly improving delivery efficiency. The internship provided valuable hands-on experience in a professional corporate setting, and I had the opportunity to work with a highly supportive and collaborative team that made the learning process enjoyable and productive."}
      />
      <JobCard
        companyName='Insurance Samadhan'
        role='Python Intern'
        from='Dec 2023'
        to='Dec 2023'
        location='Noida, Uttar Pradesh, India'
        description='In this one-month internship, I engineered a data analysis dashboard using Flask, enabling real-time visualization of numerical data and anomaly detection. I automated the outlier detection and exclusion process, reducing manual review errors by 40%.
        This experience deepened my understanding of data analytics and gave me hands-on exposure to building functional tools that improve decision-making. I also gained practical skills in translating raw data into meaningful insights through interactive visualizations.'
      />
      <div className='mx-auto w-[72%] text-4xl text-secondary font-bold'>
        Courses & Certifications
      </div>
      <CourseCard
        title='Oracle Cloud Infrastructure 2025 Certified Generative AI Professional'
        org='Oracle'
        validity='July 2025 - July 2027'
        orgLogo='oracle.png'
      />
      <CourseCard
        title='AWS Certified Cloud Practitioner'
        org='Amazon Web Services'
        validity='June 2025 - June 2028'
        orgLogo='aws.png'
      />
      <CourseCard
        title='The Complete Full Stack Web Development Bootcamp by Dr. Angela Yu'
        org='Udemy'
        validity='May 2025'
        orgLogo='udemy.png'
      />
    </div>
    
  )
}

export default ExperienceSection