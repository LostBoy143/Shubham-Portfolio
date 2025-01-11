/* eslint-disable no-unused-vars */
import React from "react";

const Skills = () => {
  return (
    <div
      className="bg-gradient-to-b from-[#e6ecfc] to-[#F5E9FF] min-h-[300px] flex flex-col justify-center items-center"
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
              key={index + 12}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
