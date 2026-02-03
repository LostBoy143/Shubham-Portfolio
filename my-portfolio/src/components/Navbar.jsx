/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const showSidebar = () => {
  const sidebar = document.getElementById("sidebar-container");
  const navbar = document.getElementById("navbar-container");
  if (sidebar && navbar) {
    sidebar.classList.remove("hidden");
    sidebar.classList.add("flex");
    navbar.classList.add("hidden");
    navbar.classList.remove("flex");
  }
};
const hideSidebar = () => {
  const sidebar = document.getElementById("sidebar-container");
  const navbar = document.getElementById("navbar-container");
  if (sidebar && navbar) {
    sidebar.classList.add("hidden");
    sidebar.classList.remove("flex");
    navbar.classList.remove("hidden");
    navbar.classList.add("flex");
  }
};

const navItems = [
  { to: "/", label: "Home" },
  { to: "/#hero-section", label: "About" },
  { to: "/#skills", label: "Skills" },
  { to: "/#experience-section", label: "Experience" },
  { to: "/#projects-section", label: "Projects" },
  { to: "/#contact-section", label: "Contact" },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <div
        id="navbar-container"
        className="fixed top-1 left-0  z-20 h-[60px] sm:h-[70px]  w-full  flex justify-center items-end"
      >
        <motion.div
          id="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-[calc(100%-1.5rem)] mx-auto sm:w-[92%] max-w-6xl"
        >
          <div className="modern-gradient-border absolute inset-0 rounded-[30px]" />
          <div className="hidden sm:block modern-gradient-halo absolute -inset-3 rounded-[36px]" />
          <div className="absolute inset-[1px] rounded-[28px] bg-white/95 shadow-[0_12px_45px_rgba(148,163,255,0.25)] backdrop-blur-2xl dark:bg-black/85 dark:shadow-[0_12px_45px_rgba(99,102,241,0.35)]" />

          <div className="relative flex items-center gap-4 rounded-[28px] px-4 py-3 text-[12px] text-slate-800 dark:text-gray-200 sm:px-6">
            <div className="hidden sm:flex w-56 flex-col gap-1">
              <span className="font-heading text-sm text-slate-900 dark:text-white">
                Shubham Singh
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Full Stack Engineer · AI Systems
              </span>
            </div>

            <nav className="hidden sm:flex flex-1 items-center justify-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={(e) => {
                    if (
                      item.to.startsWith("/#") &&
                      window.location.pathname === "/"
                    ) {
                      e.preventDefault();
                      document
                        .getElementById(item.to.slice(2))
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-slate-600 transition hover:text-purple-600 dark:text-slate-200 dark:hover:text-purple-300"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-transparent opacity-0 blur-sm transition group-hover:opacity-100" />
                  <span className="relative">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] hover:from-blue-500 hover:to-purple-500"
              >
                View Showcase
                <span className="text-sm">↗</span>
              </Link>
              <a
                href="/Resume-SHUBHAM_SINGH.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-gray-100 dark:hover:border-purple-400"
              >
                Resume
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </a>
              <button
                onClick={toggleTheme}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-purple-200/50 bg-white/70 text-slate-600 transition hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-gray-100 dark:hover:border-purple-400"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex flex-1 items-center justify-between sm:hidden">
              <button
                onClick={showSidebar}
                className="rounded-lg border border-purple-200/60 bg-white/80 p-2 text-slate-600 shadow-sm transition hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <span className="font-heading text-sm text-slate-800 dark:text-gray-100">
                Shubham Singh
              </span>
              <button
                onClick={toggleTheme}
                className="rounded-lg border border-purple-200/60 bg-white/80 p-2 text-slate-600 shadow-sm transition hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modern Sidebar */}
      <div
        id="sidebar-container"
        className="fixed hidden top-0 left-0 z-30 w-full h-full bg-black/50 backdrop-blur-sm"
        onClick={hideSidebar}
      >
        <motion.div
          id="sidebar"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="w-80 h-full bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 shadow-2xl"
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <img
              src="./favicon.png"
              alt="logo"
              loading="lazy"
              className="h-8"
            />
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={hideSidebar}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-4 gap-2">
            {[
              { to: "/", label: "Home", icon: "🏠" },
              { to: "/#hero-section", label: "About", icon: "👤" },
              { to: "/#skills", label: "Skills", icon: "💻" },
              { to: "/#experience-section", label: "Experience", icon: "💼" },
              { to: "/#projects-section", label: "Projects", icon: "🚀" },
              {
                to: "/projects",
                label: "Project Showcase",
                icon: "📁",
                cta: true,
              },
              { to: "/Resume-SHUBHAM_SINGH.pdf", label: "Resume", icon: "📄", download: true },
              { to: "/#contact-section", label: "Contact", icon: "📧" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  onClick={hideSidebar}
                  download={item.download}
                  target={item.download ? "_blank" : undefined}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${item.cta
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:from-blue-500 hover:to-purple-500"
                    : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
                    }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
