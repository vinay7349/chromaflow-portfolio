import React from "react";
import Home from "./Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/ResumeNew";
import { motion, useScroll, useSpring } from "framer-motion"; // If I were using framer, but I'll use CSS

function MainContent() {
  return (
    <main className="main-scroll-container">
      <section id="home" className="scroll-section">
        <Home />
      </section>
      <section id="about" className="scroll-section">
        <About />
      </section>
      <section id="projects" className="scroll-section">
        <Projects />
      </section>
      <section id="resume" className="scroll-section">
        <Resume />
      </section>
    </main>
  );
}

export default MainContent;
