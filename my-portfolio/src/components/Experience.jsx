/* eslint-disable no-unused-vars */
import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Freelancing",
      role: "Frontend Developer",
      duration: "Jul 2024 - Nov 2024",
      logo: "./freelance.png", // Replace with the actual path to the logo
      details: [
        "Developed  responsive and engaging landing pages for businesses.",
        "Implemented modern UI design using React.js and Tailwind CSS.",
        "Ensured cross-browser compatibility and improved website performance.",
      ],
    },
    {
      company: "Attyre",
      role: "Frontend Developer Intern",
      duration: "Nov 2024 - Dec 2024",
      logo: "./attyre.png", // Replace with the actual path to the logo
      details: [
        "Collaborated with the design team to build pixel-perfect UI components.",
        "Integrated dynamic functionalities using React.js.",
        "Optimized code for faster load times and better user experience.",
      ],
    },
  ];

  return (
    <div
      id="experience-section"
      className="bg-gradient-to-b from-[#F5E9FF] to-[#e6ecfd] px-5 sm:px-32 py-10 flex justify-center items-center min-h-screen"
    >
      <div className="w-full max-w-6xl">
        <p className="md:text-[41px] text-[25px] text-black font-bold text-center mb-10">
          My Journey So Far
        </p>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[30px] top-0 w-[2px] bg-blue-500 h-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex md:gap-10 gap-5 mb-10 relative md:pl-20 pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[23px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

              {/* Logo */}
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="md:w-[60px] md:h-[60px] w-[40px] h-[40px] object-contain"
              />

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start md:gap-20 gap-5">
                  <div>
                    <h3 className="text-[20px] md:text-[25px] font-bold text-black">
                      {exp.company}
                    </h3>
                    <p className="text-[16px] text-gray-700">
                      {exp.role}
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-500">
                    {exp.duration}
                  </p>
                </div>
                <ul className="list-disc mt-3 pl-5 text-gray-800 md:text-[18px] text-[14px]">
                  {exp.details.map(
                    (detail, idx) => (
                      <li key={idx}>{detail}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
