/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import projects from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects-section"
      className="relative px-6 py-12 sm:px-12 lg:px-24 scroll-mt-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-10 h-72 rounded-full bg-gradient-to-r from-purple-500/12 via-blue-500/12 to-emerald-400/12 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-purple-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-700">
            Showcase
          </span>
          <h2 className="font-heading text-[32px] sm:text-[44px] font-semibold text-slate-900 dark:text-white">
            Selected builds that mix experience, craft, and intelligence.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 dark:text-slate-300">
            A snapshot of products I’ve shipped recently—from AI copilots to
            high-conversion marketing experiences.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {projects.slice(0, 2).map((project, idx) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/95 p-6 shadow-[0_20px_60px_rgba(99,102,241,0.2)] backdrop-blur transition hover:shadow-[0_24px_70px_rgba(99,102,241,0.3)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_24px_70px_rgba(99,102,241,0.4)]"
              >
                <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/15 to-teal-400/15 blur-2xl" />
                <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1 text-left">
                      <p className="font-heading text-2xl text-slate-900 dark:text-white">
                        {project.name}
                      </p>
                      <p className="text-sm text-purple-500 dark:text-purple-300">
                        Highlighted project
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full border border-purple-200/60 bg-white/80 px-3 py-1 text-xs font-semibold text-purple-600 transition group-hover:border-purple-400 dark:border-white/10 dark:bg-white/10 dark:text-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 whitespace-nowrap"
                      >
                        Visit project ↗
                      </a>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl border border-purple-200/60 bg-gradient-to-br from-purple-500/15 via-blue-500/10 to-transparent lg:aspect-video">
                    <img
                      src={project.image.startsWith('/') ? project.image : '/' + project.image}
                      alt={project.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {projects.slice(2, 4).map((project) => (
              <article
                key={project.name}
                className="group flex flex-col gap-4 rounded-[24px] border border-white/60 bg-white/95 p-5 shadow-lg transition hover:border-purple-400/70 hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)] dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-heading text-lg text-slate-900 dark:text-white">
                      {project.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                      Selected
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-white/80 px-3 py-1 text-xs font-semibold text-purple-600 transition hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-purple-200"
                  >
                    View ↗
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-purple-200/60 bg-white/80 px-3 py-1 text-[11px] font-semibold text-purple-600 transition group-hover:border-purple-400 dark:border-white/10 dark:bg-white/10 dark:text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-[24px] border border-purple-200/60 bg-white/95 p-6 text-center shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="font-heading text-lg text-slate-900 dark:text-white">
                Want the full tour?
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Explore detailed case studies, production writeups, and live
                demos on the dedicated showcase page.
              </p>
              <Link
                to="/projects"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 text-xs font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:from-blue-500 hover:to-purple-500"
              >
                View project showcase
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
