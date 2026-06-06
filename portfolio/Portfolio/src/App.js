import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import Services from "./components/Home/Services";
import Skills from "./components/About/Skills";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollIndicator from "./components/ScrollIndicator";
import useScrollAnimation from "./hooks/useScrollAnimation";
import useDragToScroll from "./hooks/useDragToScroll";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const sectionsList = [
    { id: "home" },
    { id: "intro" },
    { id: "services" },
    { id: "skills" },
    { id: "projects" },
    { id: "resume" },
    { id: "blogs" }
  ];

  useScrollAnimation(setActiveSection);

  useEffect(() => {
    const mainWrapper = document.querySelector(".main-scroll-wrapper");
    if (!mainWrapper) return;

    const handleScroll = () => {
      const scrolled = (mainWrapper.scrollTop / (mainWrapper.scrollHeight - mainWrapper.clientHeight)) * 100;
      setScrollProgress(scrolled);
    };

    mainWrapper.addEventListener("scroll", handleScroll);
    
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => {
      mainWrapper.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const currentSectionIndex = sectionsList.findIndex(s => s.id === activeSection);

  const scrollToSection = (index) => {
    const mainWrapper = document.querySelector(".main-scroll-wrapper");
    const sections = document.querySelectorAll(".page-section");
    if (mainWrapper && sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }} 
        />
        <Navbar activeSection={activeSection} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <ScrollIndicator 
                sections={sectionsList} 
                currentSectionIndex={currentSectionIndex !== -1 ? currentSectionIndex : 0} 
                scrollToSection={scrollToSection}
              />
              <div className="main-scroll-wrapper">
              <section id="home" className="page-section reveal"><Home /></section>
              <section id="intro" className="page-section reveal"><Home2 /></section>
              <section id="services" className="page-section reveal"><Services /></section>
              <section id="skills" className="page-section reveal"><Skills /></section>
              <section id="projects" className="page-section reveal"><Projects /></section>
              <section id="resume" className="page-section reveal"><Resume /></section>
              <section id="blogs" className="page-section reveal"><Blogs /></section>
              <Footer />
            </div>
            </>
          } />
          <Route path="/project" element={<Navigate to="/#projects"/>} />
          <Route path="/resume" element={<Navigate to="/#resume"/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
