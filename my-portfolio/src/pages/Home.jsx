/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Button from "../components/Button";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <Button />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
