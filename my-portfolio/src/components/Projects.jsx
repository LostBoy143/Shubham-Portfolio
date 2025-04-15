/* eslint-disable no-unused-vars */
import React from "react";

const data = [
  {
    name: "AI Code Reviewer",
    image: "./code-review.png",
    description:
      " A web tool that uses AI to analyze code snippets and provide instant feedback on quality, performance, and best practices.",
    tech: [
      "React",
      "ThreeJs",
      "Tailwind",
      "Gemini",
      "Nodejs",
      "Expressjs",
      "Github",
      "Vercel",
      "render",
    ],
    link: "https://ai-code-review-blush.vercel.app/",
  },
  {
    name: "DigiGrove",
    image: "./digigrove.png",
    description:
      "A landing page for a business with great animations and design.",
    tech: [
      "React",
      "Tailwind",
      "Github",
      "Vercel",
    ],
    link: "https://extraordinary-sunflower-12d7fc.netlify.app/",
  },
  {
    name: "Attyre",
    image: "./att-img.png",
    description:
      "An AI-powered web app that recommends optimal clothing color palettes based on a user’s skin tone, hair, and eye color using image analysis and color theory.",
    tech: [
      "React",
      "Tailwind",
      "Github",
      "Vercel",
    ],
    link: "https://attyre-assignment.vercel.app/",
  },
  {
    name: "Zappy",
    image: "./zappy.png",
    description:
      " An online food delivery platform built for speed and simplicity, offering real-time restaurant browsing, order tracking, and a seamless checkout experience.",
    tech: [
      "React",
      "Tailwind",
      "Nodejs",
      "Expressjs",
      "Mongodb",
      "Stripe",
    ],
    link: "https://github.com/LostBoy143/zappy",
  },
  // {
  //   name: "textUtils",
  //   image: "./taxtutils.png",
  //   description:
  //     "A website for text analysis tools",
  //   tech: ["React", "Tailwind", "Github"],
  //   link: "https://textu-tils.vercel.app/",
  // },
];

const Projects = () => {
  return (
    <div id="projects-section">
      <div className="bg-gradient-to-b from-[#e6ecfd] to-[#F5E9FF] pb-10 ">
        <p className="text-[28px] sm:text-[41px] text-center pt-8 sm:pt-20 mb-5 font-bold">
          My Work
        </p>
        <div>
          {/* Projects */}
          {data.map((project, idx) => (
            <div
              key={idx}
              className="md:mx-[100px] md:my-[50px] rounded-2xl md:flex md:flex-row flex justify-center items-center   flex-col bg-[#FFFFFF] shadow-lg hover:shadow-2xl duration-700 mx-[30px] my-[10px]"
            >
              <div className="md:w-1/2 w-fit md:m-10 mx-5 mt-8">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className=" flex  flex-col justify-start items-center md:mt-[10px] p-5 gap-5 md:w-1/2">
                <p className="md:text-[41px] text-[20px] font-bold ">
                  {project.name}
                </p>
                <p className="md:text-[20px] text-[15px] font-extralight text-center w-full">
                  {project.description}
                </p>
                <div className="flex flex-col gap-5 text-white text-center">
                  {/* Dynamically Render Tech Stack */}
                  <div className="font-bold flex  flex-wrap justify-center">
                    {project.tech.map(
                      (tech, techIdx) => (
                        <div
                          key={techIdx}
                          className="rounded-2xl mr-3 mt-2 bg-[#6B5FB4] md:w-fit md:px-3 px-4 hover:scale-105 transition-all cursor-pointer md:text-[15px] text-[10px]"
                        >
                          {tech}
                        </div>
                      )
                    )}
                  </div>
                  {/* Project Link */}
                  <div className="flex justify-center items-center font-bold">
                    <button className="rounded-2xl  md:w-fit px-8  transition-all cursor-pointer md:text-[15px] text-[10px]  shadow-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white  py-1  transform duration-500 ease-in-out hover:scale-110 hover:from-blue-500 hover:to-purple-500 animate-float">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
