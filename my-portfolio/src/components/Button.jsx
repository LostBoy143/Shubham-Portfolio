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
      className={`fixed z-20 right-3 bottom-3 sm:bottom-6 sm:right-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg ${
        isExpanded
          ? "sm:w-56 h-12 w-40 sm:h-14 rounded-lg px-4 py-2"
          : "sm:w-16 h-12 w-12 sm:h-16 rounded-full animate-bounce"
      } flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out ${
        !isExpanded
          ? "shadow-[0px_0px_25px_8px_rgba(100,100,255,0.5)]"
          : ""
      }`}
      onClick={handleClick}
    >
      {isExpanded ? (
        <div className="flex items-center gap-2">
          <a
            href="/Resume-SHUBHAM_SINGH.pdf"
            download
            className="font-bold text-[10px] sm:text-sm transition-opacity duration-300 ease-in-out"
            title="Download Resume"
          >
            Download CV
          </a>
          <button
            onClick={handleClick}
            className="ml-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs"
            title="Minimize"
          >
            ✕
          </button>
        </div>
      ) : (
        <img
          src="./down-arrow.png"
          alt="download button"
          className="w-5 h-5"
        />
      )}
    </div>
  );
};

export default DownloadResumeButton;
