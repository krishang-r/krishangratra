import React from 'react';

type CourseCardProps = {
  title: string;
  org: string;
  validity: string;
  orgLogo: string; // Just the filename like 'aws-logo.png'
};

const CourseCard = ({ title, org, validity, orgLogo }: CourseCardProps) => {
  return (
    <div className="w-[90%] md:w-[70%] min-h-[100px] mx-auto my-7 bg-slate-50 border border-blue-600 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-stretch gap-4">
        {/* Left Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600">{title}</h3>
          <h4 className="text-lg sm:text-xl text-slate-800 mb-1 font-bold">
            <span className='font-normal'>Issued by: </span>{org}
          </h4>
          <p className="text-base text-black">{validity}</p>
        </div>

        {/* Right Section with Centered Logo */}
        <div className="flex justify-center sm:items-center">
          <img
            src={`/logo/${orgLogo}`}
            alt={`${org} logo`}
            className="w-16 sm:w-20 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
