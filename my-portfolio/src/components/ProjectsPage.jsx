import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import projects from "../data/projects";





const ProjectsPage = () => {
  const { isDark } = useTheme();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative px-6 py-20 sm:px-12 lg:px-24 min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-16 h-72 rounded-full bg-gradient-to-r from-purple-500/12 via-blue-500/12 to-emerald-400/12 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 mt-4 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-center"
        >
          <h1 className="font-heading text-[32px] sm:text-[48px] font-semibold text-slate-900 dark:text-white">
            Work I’ve shipped recently — from AI copilots to immersive web
            experiences.
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-600 dark:text-slate-300">
            Browse the case studies, live demos, and stacks that illustrate how
            I think about product, motion, and performance.
          </p>
        </motion.div>



        <AnimatePresence mode="wait">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-8 lg:grid-cols-2"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/95 p-6 shadow-[0_20px_60px_rgba(99,102,241,0.2)] backdrop-blur transition hover:shadow-[0_24px_70px_rgba(99,102,241,0.3)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_24px_70px_rgba(99,102,241,0.4)]"
              >
                {project.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                    Featured
                  </span>
                )}
                <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-heading text-2xl text-slate-900 dark:text-white">
                        {project.name}
                      </h3>
                      <span className="inline-flex w-fit items-center rounded-full border border-purple-200/60 bg-white/80 px-3 py-1 text-xs font-semibold text-purple-600 dark:border-white/10 dark:bg-white/10 dark:text-purple-200">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {project.description.substring(0, 100)}...
                    </p>
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
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-white/80 px-4 py-2 text-xs font-semibold text-purple-600 transition hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-purple-200 whitespace-nowrap"
                      >
                        Read More
                      </Link>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 whitespace-nowrap"
                      >
                        Visit live ↗
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[28px] border border-white/70 bg-white/95 p-6 text-center shadow-lg dark:border-white/10 dark:bg-white/5"
        >
          <h3 className="font-heading text-lg text-slate-900 dark:text-white">
            Looking for something specific?
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Let’s build it together. Share your idea, and I’ll map the systems,
            UI, and AI pieces needed to ship fast.
          </p>
          <a
            href="mailto:singhshubham620278@gmail.com"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 text-xs font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:from-blue-500 hover:to-purple-500"
          >
            Start a build ↗
          </a>
        </motion.div>

        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-white/80 px-5 py-2 text-xs font-semibold text-slate-600 transition hover:border-purple-400 hover:text-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </section >
  );
};

export default ProjectsPage;
