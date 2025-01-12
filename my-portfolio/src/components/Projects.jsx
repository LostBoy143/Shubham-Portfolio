/* eslint-disable no-unused-vars */
import React from "react";

const data = [
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
      "A website which consists of color analysis tool.",
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
      "An Online food ordering website with payment gateway",
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
  {
    name: "textUtils",
    image: "./taxtutils.png",
    description:
      "A website for text analysis tools",
    tech: ["React", "Tailwind", "Github"],
    link: "https://textu-tils.vercel.app/",
  },
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
              className="md:mx-[100px] md:my-[50px] rounded-2xl md:flex md:flex-row flex justify-center items-center flex-col bg-[#FFFFFF] shadow-lg mx-[30px] my-[10px]"
            >
              <div className="md:w-1/2 w-fit md:m-10 mx-5 mt-8">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-start items-center md:mt-[60px] p-5 gap-5 md:w-1/2">
                <p className="md:text-[41px] text-[20px] font-bold">
                  {project.name}
                </p>
                <p className="md:text-[20px] text-[15px] font-extralight text-center w-full">
                  {project.description}
                </p>
                <div className="flex flex-col gap-5 text-white text-center">
                  {/* Dynamically Render Tech Stack */}
                  <div className="font-bold flex md:gap-10 gap-4 flex-wrap justify-center">
                    {project.tech.map(
                      (tech, techIdx) => (
                        <div
                          key={techIdx}
                          className="rounded-2xl bg-[#A99CE7] md:w-fit md:px-3 px-4 hover:scale-105 transition-all cursor-pointer md:text-[15px] text-[10px]"
                        >
                          {tech}
                        </div>
                      )
                    )}
                  </div>
                  {/* Project Link */}
                  <div className="flex justify-center items-center font-bold">
                    <button className="rounded-2xl bg-[#B3C8FF] md:w-fit px-8 hover:scale-105 transition-all cursor-pointer md:text-[15px] text-[10px]">
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
