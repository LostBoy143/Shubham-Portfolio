/* eslint-disable no-unused-vars */
import React from "react";

const showSidebar = () => {
  const sidebar = document.getElementById(
    "sidebar-container"
  );
  const navbar = document.getElementById(
    "navbar-container"
  );
  if (sidebar && navbar) {
    sidebar.classList.remove("hidden");
    sidebar.classList.add("flex");
    navbar.classList.add("hidden");
    navbar.classList.remove("flex");
  }
};
const hideSidebar = () => {
  const sidebar = document.getElementById(
    "sidebar-container"
  );
  const navbar = document.getElementById(
    "navbar-container"
  );
  if (sidebar && navbar) {
    sidebar.classList.add("hidden");
    sidebar.classList.remove("flex");
    navbar.classList.remove("hidden");
    navbar.classList.add("flex");
  }
};
const Navbar = () => {
  return (
    <>
      <div
        id="navbar-container"
        className="fixed  top-0 left-0 z-20 h-[50px] sm:h-[80px] w-full flex justify-center items-center "
      >
        <div
          id="navbar"
          className="flex   justify-between w-[90%] py-3 px-5 sm:px-2 gap-3 text-[12px] md:gap-20 bg-[#bdaaf0] mt-6 md:py-3 md:px-10 md:text-[18px] rounded-full sm:w-fit text-white shadow-xl  "
        >
          <a
            href="#hero-section"
            className="hover:text-black  duration-300 hidden sm:block"
          >
            About Me
          </a>
          <a
            href="#skills-section"
            className="hover:text-black duration-300 hidden sm:block"
          >
            Skills
          </a>
          <a
            href="#experience-section"
            className="hover:text-black duration-300 hidden sm:block"
          >
            Experience
          </a>
          <a
            href="projects-section"
            className="hover:text-black duration-300 hidden sm:block"
          >
            Projects
          </a>
          <a
            href="#contact-section"
            className="hover:text-black duration-300 hidden sm:block"
          >
            Contact me
          </a>
          <img
            id="menu"
            src="./favicon.png"
            className="h-[28px] sm:hidden"
          ></img>
          <img
            id="menu"
            src="./menu.png"
            className="h-[28px] sm:hidden cursor-pointer"
            onClick={showSidebar}
          ></img>
        </div>
      </div>
      {/* Sidebar */}
      <div
        id="sidebar-container"
        className=" fixed hidden top-[13px] left-0 z-20 w-full  justify-center"
      >
        <div
          id="sidebar"
          className="px-[20px] h-[60vh] text-[18px] text-[#333333]  py-[15px] flex  items-end flex-col gap-4 bg-[#bdaaf0] w-[90%]  rounded-xl  "
        >
          <div className="w-full flex justify-between items-center">
            <img
              id="menu"
              src="./favicon.png"
              className="h-[28px] sm:hidden"
            ></img>
            <img
              id="menu"
              src="./cross.png"
              className="h-[28px] sm:hidden cursor-pointer"
              onClick={hideSidebar}
            ></img>
          </div>
          <a
            href="#hero-section"
            className=" duration-300 hover:text-white border-b-[1px] pb-2 w-full text-right border-gray-500"
          >
            About me
          </a>
          <a
            href="#skills-section"
            className=" duration-300 hover:text-white border-b-[1px] pb-2 w-full text-right border-gray-500"
          >
            Skills
          </a>
          <a
            href="experience-section"
            className=" duration-300 hover:text-white border-b-[1px] pb-2 w-full text-right border-gray-500"
          >
            Experience
          </a>
          <a
            href="projects-section"
            className=" duration-300 hover:text-white border-b-[1px] pb-2 w-full text-right border-gray-500"
          >
            Projects
          </a>
          <a
            href="#contact-section"
            className=" duration-300 hover:text-white border-b-[1px] pb-2 w-full text-right border-gray-500"
          >
            Contact me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
