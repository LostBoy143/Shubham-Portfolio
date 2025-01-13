/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Button from "./components/Button";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <Button />
      <Experience />
      <Projects />
      <Contact />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
