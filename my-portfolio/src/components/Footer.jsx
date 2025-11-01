// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Explore",
    items: [
      { label: "Projects", href: "/#projects-section" },
      { label: "Experience", href: "/#experience-section" },
      { label: "Contact", href: "/#contact-section" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-singh-35153122b/" },
      { label: "GitHub", href: "https://github.com/LostBoy143" },
      { label: "Instagram", href: "https://www.instagram.com/intro_vertedguyy/" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Resume", href: "/Resume-SHUBHAM_SINGH.pdf", external: true },
      { label: "Case Studies", href: "/projects" },
      { label: "Email", href: "mailto:singhshubham620278@gmail.com" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative px-6 py-16 sm:px-12 lg:px-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 rounded-t-full bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-emerald-400/15 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 text-slate-700 dark:text-slate-300">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-white/70 bg-white/95 p-6 shadow-[0_20px_60px_rgba(148,163,255,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(99,102,241,0.3)]"
            >
              <p className="font-heading text-2xl text-slate-900 dark:text-white">Shubham Singh</p>
              <p className="text-sm text-purple-500 dark:text-purple-300">Full Stack Engineer · AI Systems</p>
              <p className="mt-3 text-sm">
                Building immersive, intelligent experiences across the stack—partnering with founders and teams to move from concept to product.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:singhshubham620278@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-white/80 px-4 py-2 text-xs font-semibold text-purple-600 shadow-sm transition hover:-translate-y-[2px] hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-purple-200"
                >
                  Email me ↗
                </a>
                <a
                  href="/Resume-SHUBHAM_SINGH.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:-translate-y-[2px] dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  Download resume
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {footerLinks.map((column) => (
              <div key={column.title} className="rounded-[24px] border border-white/70 bg-white/95 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <p className="font-heading text-sm text-slate-900 dark:text-white">{column.title}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex items-center gap-2 text-slate-600 transition hover:text-purple-500 dark:text-slate-300 dark:hover:text-purple-300"
                      >
                        {item.label}
                        <span className="text-xs">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/70 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Shubham Singh. Crafted with React, motion, and obsessiveness.</p>
          <div className="flex items-center gap-3">
            <span>Available for freelance</span>
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
