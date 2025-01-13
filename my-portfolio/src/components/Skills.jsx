/* eslint-disable no-unused-vars */
import React from "react";

const Skills = () => {
  const skillIcons = [
    {
      src: "./javascript.png",
      alt: "JavaScript Logo",
    },
    { src: "./sql.png", alt: "SQL Logo" },
    {
      src: "./tailwind.png",
      alt: "Tailwind CSS Logo",
    },
    {
      src: "./github-logo.png",
      alt: "GitHub Logo",
    },
    { src: "./figma.png", alt: "Figma Logo" },
    { src: "./cpp.png", alt: "C++ Logo" },
    { src: "./python.png", alt: "Python Logo" },
    { src: "./react.png", alt: "React Logo" },
    { src: "./nextjs.jpeg", alt: "Next.js Logo" },
    { src: "./mongodb.png", alt: "MongoDB Logo" },
    { src: "./nodejs.png", alt: "Node.js Logo" },
    {
      src: "./bootstrap.png",
      alt: "Bootstrap Logo",
    },
    { src: "./gsap.avif", alt: "GSAP Logo" },
  ];

  const skillNames = [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript",
    "GitHub",
    "Figma",
    "C++",
    "Python",
    "GSAP",
    "SQL",
  ];

  return (
    <div
      id="skills"
      className="min-h-[300px] flex flex-col justify-center items-center pb-5 bg-gradient-to-b from-[#e6ecfc] to-[#F5E9FF]"
    >
      {/* Title */}
      <p className="text-center font-bold text-black text-[25px] md:text-[41px] mb-10">
        Skills That Make Things Happen.
      </p>

      {/* Marquee Section */}
      <div className="marquee-container relative w-full overflow-hidden">
        <div className="marquee flex gap-8">
          {skillIcons
            .concat(skillIcons)
            .map((icon, index) => (
              <img
                src={icon.src}
                alt={icon.alt}
                className="icon"
                loading="lazy"
                key={index}
              />
            ))}
        </div>
      </div>

      {/* Skill Tags */}
      <div className="px-5 sm:px-52 py-2 sm:py-5">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skillNames.map((skill, index) => (
            <div
              key={index}
              className="px-3 py-1 rounded-full text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl transform transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 hover:from-blue-500 hover:to-purple-500 animate-float"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
