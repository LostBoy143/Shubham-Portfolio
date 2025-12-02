/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { PixelatedCanvas } from "./Canvas";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div id="hero-section" className="relative scroll-mt-24 mt-4">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20 md:flex-row md:items-center md:gap-24">
        <div className="pointer-events-none absolute -top-32 left-10 hidden h-64 w-64 rounded-full bg-purple-500/25 blur-3xl dark:block" />
        <div className="pointer-events-none absolute -bottom-28 right-16 hidden h-72 w-72 rounded-full bg-blue-500/20 blur-3xl dark:block" />

        <div className="relative flex w-full flex-col gap-8 md:w-1/2">
          {/* <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-200/60 bg-purple-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
          >
            Full Stack · AI-Driven Developer
          </motion.span> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl lg:text-[58px] lg:leading-[1.05]"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              full-stack experiences
            </span>{" "}
            that blend intelligence and craft.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-base text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            From concept to deployment, I architect robust backends, craft
            delightful frontends, and infuse AI to deliver products that feel
            alive. Partnering with founders and product teams to launch
            scalable, high-impact experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:from-blue-500 hover:to-purple-500"
            >
              View Project Showcase
            </Link>
            <a
              href="#contact-section"
              className="inline-flex items-center justify-center rounded-full border border-purple-200/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-[2px] hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:text-slate-100 dark:hover:border-purple-400"
            >
              Let’s Collaborate
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 rounded-3xl border border-purple-100/60 bg-white/95 p-4 text-center shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <div>
              <p className="font-heading text-2xl text-slate-900 dark:text-white">
                20+
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Products shipped
              </p>
            </div>
            <div>
              <p className="font-heading text-2xl text-slate-900 dark:text-white">
                5x
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Average launch velocity
              </p>
            </div>
            <div>
              <p className="font-heading text-2xl text-slate-900 dark:text-white">
                Full stack
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                React · Node.js · AI systems
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center md:mx-0 md:w-1/2"
        >
          <div className="absolute -top-10 right-6 hidden h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/60 via-blue-500/40 to-teal-400/40 blur-2xl md:block" />
          <div className="absolute bottom-[-30px] left-10 hidden h-28 w-28 rounded-full bg-gradient-to-tr from-purple-500/40 via-fuchsia-500/30 to-transparent blur-2xl md:block" />

          <div className="relative hidden md:block rounded-[32px] border border-white/70 bg-white/95 p-3 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/10">
            <PixelatedCanvas
              src="./profile.png"
              width={420}
              height={480}
              cellSize={4}
              dotScale={0.92}
              shape="circle"
              backgroundColor="rgba(255,255,255,0)"
              tintColor="#8b5cf6"
              tintStrength={0.15}
              dropoutStrength={0.05}
              distortionStrength={1.2}
              responsive
              className="h-[480px] w-[420px] rounded-[28px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -left-10 bottom-14 hidden w-44 rounded-2xl border border-purple-100/40 bg-white/90 p-3 text-xs shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white md:block"
            >
              <p className="font-heading text-sm text-slate-900 dark:text-white">
                Currently crafting
              </p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                AI-first dashboards & full-stack product platforms
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -right-12 top-16 hidden w-44 rounded-2xl border border-purple-300/50 bg-gradient-to-br from-purple-500/25 via-blue-500/15 to-transparent p-3 text-xs text-purple-100 shadow-lg backdrop-blur md:block"
            >
              <p className="font-heading text-sm">Edge-native performance</p>
              <p className="mt-1 text-purple-100/80">
                React · Node.js · Next.js · AI & automation pipelines
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
