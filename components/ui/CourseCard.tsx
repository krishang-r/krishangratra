import React from 'react';

type CourseCardProps = {
  title: string;
  org: string;
  validity: string;
  orgLogo: string; // Just the filename like 'aws-logo.png'
};

const CourseCard = ({ title, org, validity, orgLogo }: CourseCardProps) => {
  return (
    <div className="w-[70%] min-h-[100px] mx-auto my-7 bg-slate-50 border border-blue-600 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-103 transition-all duration-300">
      <div className="flex justify-between items-stretch mb-2">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-600">{title}</h3>
          <h4 className="text-xl text-slate-800 mb-1 font-bold">
            <span className='font-normal'>Issued by: </span>{org}
          </h4>
          {validity}
        </div>

        {/* Right Section with Centered Logo */}
        <div className="flex items-center mt-2">
          <img
            src={`/logo/${orgLogo}`} // Assuming image is in /public/logo/
            alt={`${org} logo`}
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
