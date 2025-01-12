/* eslint-disable no-unused-vars */
import React from "react";

const Skills = () => {
  return (
    <div
      className="bg-gradient-to-b from-[#e6ecfc] to-[#F5E9FF] min-h-[300px] flex flex-col justify-center items-center pb-5"
      id="skills"
    >
      <p className="text-center text-black font-bold md:text-[41px] text-[25px] mb-10">
        Skills That Make Things Happen.
      </p>
      <div className="marquee-container overflow-hidden relative w-full">
        <div className="marquee flex gap-8">
          {/* Icons */}
          {[
            "./javascript.png",
            "./sql.png",
            "./tailwind.png",
            "./github-logo.png",
            "./figma.png",
            "./cpp.png",
            "./python.png",
            "./react.png",
            "./nextjs.jpeg",
            "./mongodb.png",
            "./nodejs.png",
            "./bootstrap.png",
            "./gsap.avif",
          ].map((src, index) => (
            <img
              src={src}
              alt={`Skill ${index}`}
              className="icon"
              loading="lazy"
              key={index}
            />
          ))}
          {/* Duplicate for smooth scrolling */}
          {[
            "./javascript.png",
            "./sql.png",
            "./tailwind.png",
            "./github-logo.png",
            "./figma.png",
            "./cpp.png",
            "./python.png",
            "./react.png",
            "./nextjs.jpeg",
            "./mongodb.png",
            "./nodejs.png",
            "./bootstrap.png",
            "./gsap.avif",
          ].map((src, index) => (
            <img
              src={src}
              alt={`Skill duplicate ${index}`}
              className="icon"
              loading="lazy"
              key={index + 12}
            />
          ))}
        </div>
      </div>
      <div
        id="stack"
        className="px-5 sm:px-52 py-2 sm:py-5"
      >
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
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
          ].map((skill, index) => (
            <div
              key={index}
              className="cursor-pointer shadow-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110 hover:from-blue-500 hover:to-purple-500 animate-float"
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
