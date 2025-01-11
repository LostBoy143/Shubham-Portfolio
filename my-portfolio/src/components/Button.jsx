/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const DownloadResumeButton = () => {
  const [isExpanded, setIsExpanded] =
    useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded); // Toggle the button state
  };

  return (
    <div
      className={`fixed right-3 bottom-3 sm:bottom-6 sm:right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg ${
        isExpanded
          ? "w-56 h-14 rounded-lg px-4 py-2"
          : "w-16 h-16 rounded-full animate-bounce"
      } flex items-center justify-center cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out ${
        !isExpanded
          ? "shadow-[0px_0px_15px_5px_rgba(139,92,246,0.7)]"
          : ""
      }`}
      onClick={handleClick}
    >
      {isExpanded ? (
        <div className="flex items-center gap-2">
          <a
            href="./Shubham_SIngh-Resume.pdf" // Replace with the actual path to your resume
            download
            className="font-bold text-sm transition-opacity duration-300 ease-in-out"
            title="Download Resume"
          >
            Download CV
          </a>
          <button
            onClick={handleClick}
            className="ml-2 bg-white text-purple-500 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs"
            title="Minimize"
          >
            ✕
          </button>
        </div>
      ) : (
        <img
          src="./download.png"
          alt="download button"
          className="w-8 h-8"
        />
      )}
    </div>
  );
};

export default DownloadResumeButton;
