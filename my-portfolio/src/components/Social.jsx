/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Social = () => {
  const socialButtons = [
    {
      href: "https://www.linkedin.com/in/shubham-singh-35153122b/",
      label: "LinkedIn",
      handle: "Connect professionally",
      accent: "from-[#7f5af0] to-[#2cb1ff]",
      icon: "./linkedin.png",
    },
    {
      href: "https://github.com/LostBoy143",
      label: "GitHub",
      handle: "Explore the code",
      accent: "from-[#9333ea] to-[#14b8a6]",
      icon: "./github-logo.png",
    },
    {
      href: "https://www.instagram.com/intro_vertedguyy/",
      label: "Instagram",
      handle: "Design + daily drops",
      accent: "from-[#ec4899] to-[#f97316]",
      icon: "./instagram.png",
    },
  ];

  return (
    <section
      id="social-section"
      className="relative overflow-hidden px-5 sm:px-10 py-16"
    >
      <div className="pointer-events-none absolute -top-40 -right-44 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-36 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gray-700 dark:border-white/5 dark:bg-white/5 dark:text-gray-300">
            Connect
          </span>
          <h2 className="font-heading text-[30px] sm:text-[44px] font-semibold text-gray-900 dark:text-white">
            Let’s build something remarkable together.
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Whether it’s a product sprint, full-stack launch, or just a quick
            brainstorm—my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-3xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-white/5 dark:bg-white/5 dark:shadow-[0_20px_70px_rgba(147,51,234,0.2)]">
            <p className="font-heading text-lg text-gray-900 dark:text-white">
              Let’s connect
            </p>
            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Join me on the platforms where I share builds, ship ideas, and
              connect with founders & designers.
            </p>
            <div className="mt-6 space-y-4">
              {socialButtons.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, translateX: 4 }}
                  className={`group flex items-center justify-between rounded-2xl border border-white/40 bg-gradient-to-r ${item.accent} p-[1px] transition-shadow hover:shadow-[0_15px_45px_rgba(99,102,241,0.25)]`}
                >
                  <div className="flex w-full items-center justify-between rounded-[22px] bg-white/90 px-4 py-3 backdrop-blur dark:bg-black/60">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 p-1 backdrop-blur dark:bg-white/10">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="h-6 w-6 object-contain"
                        />
                      </span>
                      <div>
                        <p className="font-heading text-base text-gray-900 dark:text-white">
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-300">
                          {item.handle}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 transition group-hover:text-purple-600 dark:text-gray-200">
                      Visit ↗
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-white/20 bg-white/90 p-6 shadow-lg backdrop-blur dark:border-white/5 dark:bg-white/5"
            >
              <h3 className="font-heading text-lg text-gray-900 dark:text-white">
                Prefer direct contact?
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Reach out instantly via phone or email—expect a quick response.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="tel:+916202784603"
                  className="flex items-center justify-between rounded-2xl border border-gray-200/60 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/10 dark:text-gray-100"
                >
                  <span className="flex items-center gap-2">
                    <img src="./call.png" alt="phone" className="h-6" />
                    +91 6202784603
                  </span>
                  <span className="text-xs text-purple-500">Tap to call</span>
                </a>
                <a
                  href="mailto:singhshubham620278@gmail.com"
                  className="flex items-center justify-between rounded-2xl border border-gray-200/60 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/10 dark:text-gray-100"
                >
                  <span className="flex items-center gap-2">
                    <img src="./gmail.png" alt="email" className="h-6" />
                    singhshubham620278@gmail.com
                  </span>
                  <span className="text-xs text-purple-500">Compose ↗</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border  border-purple-500/30 bg-gradient-to-br from-purple-500/15 via-blue-500/10 to-teal-400/10 p-6 shadow-lg backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.3em] dark:text-purple-400 text-black">
                Status
              </p>
              <h4 className="mt-3 font-heading text-lg dark:text-purple-50 text-gray-800 ">
                Available for freelance & product collaborations
              </h4>
              <p className="mt-2 text-sm dark:text-purple-100/80 text-gray-600">
                Building delightful, performant interfaces with AI-first
                thinking, motion, and craft.
              </p>
              <a
                href="/Resume-SHUBHAM_SINGH.pdf"
                download
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-purple-600 shadow-lg transition hover:scale-[1.02] dark:bg-white/90"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Social;
