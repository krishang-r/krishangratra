import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

type JobCardProps = {
  companyName: string;
  role: string;
  from: string;
  to: string;
  location: string;
  description: string;
}

const JobCard = ({ companyName, role, from, to, location, description }: JobCardProps) => {
  return (
    <div className="w-[70%] min-h-[200px] mx-auto my-7 bg-slate-50 border border-blue-600 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-103 transition-all duration-300">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-3xl font-semibold text-blue-600">{companyName}</h3>
                <h4 className="text-xl text-slate-800 mb-1 font-bold">{role}</h4>
                {from} - {to}
            </div>
            <div className="flex flex-col items-end text-gray-600">
                <div className="flex items-center space-x-1">
                    <HiOutlineLocationMarker className="text-base" />
                    <span>{location}</span>
                </div>
            </div>
        </div>
        
        <p className="text-md text-slate-600 leading-relaxed">
            {description}  
        </p>
    </div>

  )
}

export default JobCard