import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Button from "./Button";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Social from "./Social";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Skills />
      {/* <Button /> */}
      <Experience />
      <Projects />
      <Contact />
      <Social />
    </div>
  );
};

export default Home;
