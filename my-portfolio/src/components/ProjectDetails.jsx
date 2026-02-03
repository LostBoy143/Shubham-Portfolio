
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Find project by ID (ensure type matching if id is string)
        const foundProject = projects.find((p) => p.id === parseInt(id));

        if (foundProject) {
            setProject(foundProject);
            window.scrollTo(0, 0);
        } else {
            // Handle not found - could redirect or show error
            navigate("/projects");
        }
    }, [id, navigate]);

    if (!project) return <div className="min-h-screen bg-white dark:bg-slate-950"></div>;

    return (
        <section className="relative min-h-screen px-6 py-24 sm:px-12 lg:px-24">
            {/* Background gradients similar to other pages */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-96 rounded-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-emerald-400/10 blur-3xl opacity-50" />

            <div className="relative mx-auto max-w-5xl">
                {/* Back Navigation */}
                <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400"
                >
                    <span className="transition-transform group-hover:-translate-x-1">←</span>
                    Back to Projects
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <h1 className="font-heading text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                                {project.name}
                            </h1>
                            <span className="rounded-full border border-purple-200/60 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600 dark:border-white/10 dark:bg-white/5 dark:text-purple-300">
                                {project.category}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                            >
                                Visit Live Site ↗
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Main Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800"
                >
                    <img
                        src={project.image.startsWith('/') ? project.image : '/' + project.image}
                        alt={project.name}
                        className="w-full object-cover"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]"
                >
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                        <h3 className="text-slate-900 dark:text-white">Overview</h3>
                        <p className="whitespace-pre-wrap leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Additional details could go here, e.g. Roles, Timeline, etc. if available in data */}
                        <div className="rounded-2xl bg-slate-50 p-6 dark:bg-white/5">
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                                Built With
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <div key={tech} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectDetails;
