/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1bejh8l",
        "template_qmkyc6f",
        {
          name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "hck1bHifeHTE1PZ93"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert(
            "Failed to send message, please try again."
          );
          console.error("EmailJS Error:", error);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section
      id="contact-section"
      className="relative px-6 py-20 sm:px-12 lg:px-24 scroll-mt-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-12 h-72 rounded-full bg-gradient-to-r from-purple-500/12 via-blue-500/12 to-emerald-400/12 blur-3xl" />
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-heading md:text-[44px] text-[28px] text-black dark:text-white font-bold text-center mb-10"
      >
        Contact Me.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="form-container"
        className="relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[36px] border border-white/70 bg-white/95 shadow-[0_25px_80px_rgba(99,102,241,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_25px_80px_rgba(99,102,241,0.35)] md:flex-row"
      >
        <div className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-purple-500/25 via-blue-500/15 to-transparent p-10 md:w-1/2">
          <div className="pointer-events-none absolute -top-24 left-10 h-48 w-48 rounded-full bg-white/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-12 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl" />

          <div className="relative flex w-full max-w-sm flex-col items-center gap-6 text-center">
            <div className="relative overflow-hidden rounded-[28px] border border-white/40 bg-white/10 p-3 backdrop-blur-md">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/50 via-transparent to-white/20 opacity-70" />
              <div className="relative h-[260px] w-[260px]">
                <img
                  src="./pro_img.webp"
                  alt="Shubham Singh"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-[24px] object-cover opacity-60"
                />
                <img
                  src="./pro_img.webp"
                  alt="Shubham Singh"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-[24px] object-cover mix-blend-screen opacity-50"
                />
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-purple-500/30 via-transparent to-blue-500/20 mix-blend-overlay" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-white/10 mix-blend-soft-light" />
            </div>
            <p className="font-heading text-lg">Let’s build something ambitious.</p>
            <p className="text-sm text-slate-700 dark:text-white/80">
              Available for freelance and product engagements. Tell me about the problem you’re solving and we’ll map the solution.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-[11px] text-slate-600 dark:text-white/70">
              <span className="rounded-full border border-purple-300/60 bg-white/80 px-3 py-1 dark:border-white/30 dark:bg-white/10">Full Stack</span>
              <span className="rounded-full border border-purple-300/60 bg-white/80 px-3 py-1 dark:border-white/30 dark:bg-white/10">AI Systems</span>
              <span className="rounded-full border border-purple-300/60 bg-white/80 px-3 py-1 dark:border-white/30 dark:bg-white/10">Motion UX</span>
            </div>
          </div>
        </div>

        <div
          id="right-container"
          className="w-full bg-white/90 dark:bg-black/70 sm:w-1/2 sm:py-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading text-center mt-6 font-extrabold text-24 sm:text-[30px] mb-2 sm:mb-8 tracking-wide text-slate-900 dark:text-white"
          >
            <span>G</span>
            <span>e</span>
            <span>t</span>
            <span>&nbsp;</span>
            <span>i</span>
            <span>n</span>
            <span>&nbsp;</span>
            <span>T</span>
            <span>o</span>
            <span>u</span>
            <span>c</span>
            <span>h</span>
            <span>.</span>
          </motion.p>

          <form onSubmit={sendEmail}>
            <div className="flex flex-col gap-5 px-6 pb-8">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                required
                type="text"
                name="name"
                placeholder="Name"
                className="rounded-xl border border-gray-200/70 bg-white/90 p-3 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder-gray-400"
                onChange={handleChange}
                value={formData.name}
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                required
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-xl border border-gray-200/70 bg-white/90 p-3 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder-gray-400"
                onChange={handleChange}
                value={formData.email}
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                required
                name="message"
                placeholder="Message"
                className="rounded-xl border border-gray-200/70 bg-white/90 p-3 text-sm shadow-sm transition focus:outline-none focus:ring-2 focus:ring-purple-500 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder-gray-400"
                onChange={handleChange}
                value={formData.message}
              ></motion.textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-blue-500 hover:to-purple-500"
              >
                Send
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
