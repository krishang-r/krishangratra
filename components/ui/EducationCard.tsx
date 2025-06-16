import React from 'react';

type EducationCardProps = {
  institute: string;
  location: string;
  degree: string;
  duration: string;
  cgpa: string;
  image: string;
};

const EducationCard = ({ institute, location, degree, duration, cgpa, image }: EducationCardProps) => {
  return (
    <div className="w-[80%] mx-auto my-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-blue-700">{institute}</h3>
          <p className="text-sm text-gray-600 mb-1">{location}</p>
          <p className="text-base text-gray-800">{degree}</p>
          <p className="text-sm text-gray-600">{duration}</p>
          <p className="text-sm text-gray-600"> {cgpa}
          </p>
        </div>

        {/* Right Section */}
        <div className="max-w-[35%] h-100 flex items-center justify-center">
          <img
            src={`/education/${image}`}
            alt={`${institute} logo`}
            className="object-contain w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default EducationCard;
