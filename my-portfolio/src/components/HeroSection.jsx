/* eslint-disable no-unused-vars */
import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="bg-gradient-to-b from-white to-[#e6ecfd]"
    >
      <div className="md:flex md:flex-row md:p-24 flex flex-col p-20 sm:p-24">
        <img
          src="./profile.png"
          alt="my_pic"
          className="md:h-[379px] md:w-[376px] md:p-5 p-5 object-contain w-full h-full"
        />
        <div className="flex flex-col items-center justify-center w-full">
          <p className="font-extrabold md:text-[45px] text-[25px] text-center">
            Hi, I am Shubham ✋!
          </p>
          <div>
            <div className="flex text-center justify-center">
              <div className="flex space-x-1 my-6">
                <div
                  className="overflow-hidden pb-2"
                  style={{
                    width: "fit-content",
                    willChange: "auto",
                  }}
                >
                  <div
                    className="text-[20px] sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div>
                      <div className="inline-block">
                        {" "}
                        <span className="text-[#bdaaf0] dark:text-[#bdaaf0]">
                          S
                        </span>
                        <span className="text-[#bdaaf0] dark:text-[#bdaaf0]">
                          o
                        </span>
                        <span className="text-[#bdaaf0] dark:text-[#bdaaf0]">
                          f
                        </span>
                        <span className="text-[#bdaaf0] dark:text-[#bdaaf0]">
                          t
                        </span>
                        <span className="text-[#bdaaf0] dark:text-[#bdaaf0]">
                          w
                        </span>
                        <span className="text-[#bdaaf0] dark:text-[#bdaaf0]">
                          a
                        </span>
                        <span className="text-[#bdaaf0] dark:text-[#bdaaf0]">
                          r
                        </span>
                        <span className="text-[#bdaaf0] dark:text-[#bdaaf0]">
                          e
                        </span>
                        &nbsp;
                      </div>
                      <div className="inline-block">
                        <span className="text-black-500 dark:text-black-500">
                          e
                        </span>
                        <span className="text-black-500 dark:text-black-500">
                          n
                        </span>
                        <span className="text-black-500 dark:text-black-500">
                          g
                        </span>
                        <span className="text-black-500 dark:text-black-500">
                          i
                        </span>
                        <span className="text-black-500 dark:text-black-500">
                          n
                        </span>
                        <span className="text-black-500 dark:text-black-500">
                          e
                        </span>
                        <span className="text-black-500 dark:text-black-500">
                          e
                        </span>
                        <span className="text-black-500 dark:text-black-500">
                          r
                        </span>
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
                <span className="block blink rounded-sm w-[4px] sm:w-[6px] h-4 mt-2 sm:mt-0 sm:h-6 xl:h-12 bg-blue-500"></span>
              </div>
            </div>
            <p className="md:text-2xl text-xl text-center">
              🎨 I specialize in turning creative
              designs into functional, responsive
              interfaces. 🚀 Building seamless,
              user-focused web experiences is my
              passion! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
