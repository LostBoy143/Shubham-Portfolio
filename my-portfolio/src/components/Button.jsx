/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

const DownloadResumeButton = () => {
  const [isExpanded, setIsExpanded] =
    useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 180 }}
      className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-30 flex flex-col gap-3 text-[12px] font-semibold`}
    >
      <div className="relative overflow-hidden rounded-[26px] border border-white/70 bg-white/95 p-[2px] shadow-[0_15px_45px_rgba(99,102,241,0.35)] backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-[0_15px_45px_rgba(99,102,241,0.4)]">
        <div className="flex h-full w-full items-center gap-2 sm:gap-3 rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-2.5 py-1.5 sm:px-3 sm:py-2 text-white dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-900/90">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path d="M10 3a.75.75 0 0 1 .75.75v6.638l2.408-2.408a.75.75 0 1 1 1.061 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06L9.25 10.387V3.75A.75.75 0 0 1 10 3Z" />
              <path d="M3.5 16a.75.75 0 0 1 0-1.5h13a.75.75 0 0 1 0 1.5h-13Z" />
            </motion.svg>
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-purple-300">Resume</span>
            <span className="font-heading text-[13px] sm:text-[15px]">Download CV</span>
          </div>
          <a
            href="/Resume-SHUBHAM_SINGH.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold text-purple-600 shadow-sm transition hover:-translate-y-[2px] hover:text-purple-500"
          >
            Save
            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>

      <motion.button
        onClick={() => (window.location.href = "mailto:singhshubham620278@gmail.com")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-[0_10px_30px_rgba(99,102,241,0.2)] transition hover:-translate-y-[2px] hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-purple-200"
      >
        Let’s talk ↗
      </motion.button>
    </motion.div>
  );
};

export default DownloadResumeButton;
