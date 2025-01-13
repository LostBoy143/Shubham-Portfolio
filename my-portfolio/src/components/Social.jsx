/* eslint-disable no-unused-vars */
import React from "react";

const Social = () => {
  return (
    <div
      id="social-section"
      className="bg-gradient-to-b from-white to-[#e6ecfd] p-5 sm:p-20 pb-8"
    >
      <p className="md:text-[41px] text-[25px] text-black font-bold text-center mb-10 sm:px-10">
        Where to Find Me
      </p>
      <div
        id="social-links"
        className="flex justify-center space-x-5 sm:space-x-10"
      >
        <a
          href="https://www.linkedin.com/in/shubham-singh-35153122b/"
          target="_blank"
        >
          <img
            src="./linkedin.png"
            alt="linkedin"
            loading="lazy"
            className="h-14 sm:h-[72px]"
          />
        </a>
        <a
          href="https://www.instagram.com/intro_vertedguyy/"
          target="_blank"
        >
          <img
            src="./instagram.png"
            alt="instagram"
            loading="lazy"
            className="h-16 sm:h-20 "
          />
        </a>
        <a
          href="https://github.com/LostBoy143"
          target="_blank"
        >
          <img
            src="./github-logo.png"
            alt="github"
            loading="lazy"
            className="h-14 sm:h-[72px] "
          />
        </a>
      </div>
      <p className="text-center text-black mt-10">
        OR
      </p>
      <div className="flex flex-col  justify-center items-center space-y-5 mt-5">
        <div
          id="call"
          className="flex items-center"
        >
          <img
            src="./call.png"
            alt="call"
            className="h-8"
          />
          <p className="text-gray-500 ml-2 text-sm sm:text-base">
            Call: +91 6202784603
          </p>
        </div>
        <div
          id="mail"
          className="flex items-center"
        >
          <img
            src="./gmail.png"
            alt="mail"
            className="h-8"
          />
          <p className="text-gray-500 ml-2 text-sm sm:text-base">
            Mail: singhshubham620278@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
