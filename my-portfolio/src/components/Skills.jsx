/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

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
      className="min-h-[300px] flex flex-col justify-center items-center pb-5 scroll-mt-20"
    >
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading text-center font-bold text-black dark:text-white text-[28px] md:text-[42px] mb-10"
      >
        Skills That Make Things Happen.
      </motion.p>

      {/* Marquee Section */}
      <div className="marquee-container relative w-full overflow-hidden">
        <div className="marquee flex gap-8">
          {skillIcons
            .concat(skillIcons)
            .map((icon, index) => (
              <motion.img
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                src={icon.src}
                alt={icon.alt}
                className="icon"
                loading="lazy"
              />
            ))}
        </div>
      </div>

      {/* Skill Tags */}
      <div className="px-5 sm:px-52 py-2 sm:py-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {skillNames.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="px-3 py-1 rounded-full text-white bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 shadow-xl transform transition-all duration-500 ease-in-out cursor-pointer hover:from-blue-500 hover:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
