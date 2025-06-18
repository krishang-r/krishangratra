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
    <div className="w-[90%] md:w-[70%] min-h-[150px] mx-auto my-7 bg-slate-50 border border-blue-600 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-2">
        {/* Left: Info */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600">{companyName}</h3>
          <h4 className="text-lg sm:text-xl text-slate-800 mb-1 font-bold">{role}</h4>
          <p className="text-base text-black">{from} - {to}</p>
        </div>

        {/* Right: Location */}
        <div className="flex flex-col items-start sm:items-end text-gray-600">
          <div className="flex items-center space-x-1">
            <HiOutlineLocationMarker className="text-base" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Description (visible on medium and above) */}
      <div className='hidden md:block'>
        <p className="text-md text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default JobCard
