/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Rashi Technologies (Meri Bhakti)",
      role: "Full Stack Engineer",
      duration: "Feb 2025 — Present",
      logo: "/rashi_logo.jpg",
      summary:
        "Leading end-to-end development of analytics experiences and AI-driven automations for enterprise clients.",
      achievements: [
        "Rebuilt mission dashboards with Next.js + TypeScript, improving load times by 42% and boosting KPI adoption.",
        "Designed Node.js microservices with event-driven workflows; shipped AI agents that auto-generate weekly reports.",
        "Established design system foundations and DX tooling that increased team velocity by 30%.",
      ],
    },
    {
      company: "AI Social Studio",
      role: "Founder & Lead Engineer",
      duration: "Jan 2024 — Present",
      logo: "/projects/ai-social.png", // Using the project image as logo or placeholder
      summary:
        "Bootstrapped a SaaS platform from zero to launch. Built, hosted, and marketed a full-stack AI content generation tool.",
      achievements: [
        "Architected a scalable multi-tenant SaaS using Next.js, Node.js, and MongoDB, handling auth, payments, and AI generation.",
        "Configured complete DevOps pipeline: VPS hosting, Nginx reverse proxy, SSL, and CI/CD for zero-downtime deployments.",
        "Integrated multiple LLMs (OpenAI/Gemini) to generate high-quality social media content, optimizing costs and latency.",
      ],
    },
  ];

  return (
    <section
      id="experience-section"
      className="relative px-6 py-20 sm:px-12 lg:px-24 scroll-mt-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-16 h-72 rounded-full bg-gradient-to-r from-purple-500/12 via-blue-500/12 to-emerald-400/12 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-purple-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-700">
            Journey
          </span>
          <h2 className="font-heading text-[32px] sm:text-[44px] font-semibold text-slate-900 dark:text-white">
            Every chapter sharpened my craft in building intelligent, end-to-end products.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600 dark:text-slate-300">
            From enterprise dashboards to founder-led launches, here’s how each milestone pushed my engineering & design thinking forward.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 border-l border-white/60 dark:border-white/10 lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col gap-6 lg:flex-row lg:items-start ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="relative flex-1 rounded-[28px] border border-white/70 bg-white/95 p-6 shadow-[0_20px_60px_rgba(99,102,241,0.2)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(99,102,241,0.35)]">
                  <div className="absolute -top-10 right-10 hidden h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-teal-400/15 blur-2xl lg:block" />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1 text-left">
                      <p className="font-heading text-lg text-slate-900 dark:text-white">{exp.company}</p>
                      <p className="text-sm font-semibold text-purple-500 dark:text-purple-300">{exp.role}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{exp.duration}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{exp.summary}</p>
                    <div className="grid gap-3 text-sm text-slate-600 dark:text-slate-200">
                      {exp.achievements.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-2xl border border-purple-200/50 bg-white/85 px-4 py-3 shadow-sm transition group-hover:border-purple-400 dark:border-white/10 dark:bg-white/10">
                          <span className="mt-1 h-[6px] w-[6px] rounded-full bg-purple-500/70"></span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col items-center gap-4 self-start lg:self-center">
                  <div className="hidden h-16 w-16 items-center justify-center rounded-2xl border border-purple-200/60 bg-white p-2 shadow-md dark:border-white/10 dark:bg-white/5 lg:flex">
                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-full w-full object-contain" />
                  </div>
                  <div className="hidden flex-1 border-l border-dashed border-purple-200/70 dark:border-white/20 lg:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
