/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com";

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
        "service_1bejh8l", // EmailJS service ID
        "template_qmkyc6f", //  EmailJS template ID
        {
          name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "hck1bHifeHTE1PZ93" // EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          }); // Clear the form
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
    <div
      id="contact-section"
      className="bg-gradient-to-b w-full from-[#F5E9FF] to-white md:pt-[30px] pb-[50px] px-5 sm:px-40 pt-[50px] flex flex-col"
    >
      <p className="md:text-[41px] text-[25px] text-black font-bold text-center mb-10">
        Contact Me.
      </p>
      <div
        id="form-container"
        className="w-full min-h-[500px] bg-gradient-to-b from-[#F5E9FF] to-[#e6ecfd] rounded-2xl shadow-lg hover:shadow-2xl duration-700 flex flex-col sm:flex-row justify-center items-center"
      >
        <div
          id="left-container"
          className="cursor-pointer relative w-full sm:py-0 py-20 sm:w-1/2 sm:min-h-[500px] rounded-tl-2xl sm:rounded-bl-2xl rounded-tr-2xl sm:rounded-tr-none flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
            style={{
              backgroundImage:
                "url('./contact-bg.avif')", // Replace with the actual image path
              backgroundBlendMode: "darken",
              backgroundColor:
                "rgba(0, 0, 0, 0.5)", // Adds a dark overlay
            }}
          ></div>
          <p
            className="relative z-10 text-white text-[20px] sm:text-[22px] leading-relaxed font-medium px-6 md:px-10 text-center"
            style={{
              textShadow:
                "2px 2px 4px rgba(0, 0, 0, 0.7)", // Enhance text visibility
            }}
          >
            Got a question, a suggestion, or just
            want to chat? Fill out the form, and
            I&apos;ll get back to you shortly!
          </p>
        </div>

        <div
          id="right-container"
          className="w-full sm:w-1/2 sm:h-[100%] rounded-bl-2xl rounded-br-2xl sm:rounded-bl-none sm:rounded-tr-2xl sm:pt-10"
        >
          <p className="text text-center mt-3  font-extrabold text-24 sm:text-[28px] mb-2 sm:mb-8  tracking-wide drop-shadow-md text">
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
          </p>

          <form onSubmit={sendEmail}>
            <div className="flex flex-col gap-5 p-5">
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={handleChange}
                value={formData.email}
              />
              <textarea
                required
                name="message"
                placeholder="Message"
                className="p-3 rounded-lg sm:h-28 focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500  text-white p-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
