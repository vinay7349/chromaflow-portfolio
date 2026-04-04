import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import Services from "./components/Home/Services";
import About from "./components/About/About";
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
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const mainWrapper = document.querySelector(".main-scroll-wrapper");
    
    const handleScroll = () => {
      if (!mainWrapper) return;
      const scrolled = (mainWrapper.scrollTop / (mainWrapper.scrollHeight - mainWrapper.clientHeight)) * 100;
      setScrollProgress(scrolled);
    };

    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      const sections = document.querySelectorAll(".page-section");
      
      // Current Section Tracking for Navbar
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top >= -50 && top <= 150) {
          setActiveSection(section.id);
        }
      });

      // Reveal Animations Logic
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };

    if (mainWrapper) {
      mainWrapper.addEventListener("scroll", handleScroll);
      mainWrapper.addEventListener("scroll", revealOnScroll);
    }
    
    const timer = setTimeout(() => {
      updateLoad(false);
      revealOnScroll();
    }, 1200);

    return () => {
      if (mainWrapper) {
        mainWrapper.removeEventListener("scroll", handleScroll);
        mainWrapper.removeEventListener("scroll", revealOnScroll);
      }
      clearTimeout(timer);
    };
  }, [load]);

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
            <div className="main-scroll-wrapper">
              <section id="home" className="page-section reveal"><Home /></section>
              <section id="intro" className="page-section reveal"><Home2 /></section>
              <section id="services" className="page-section reveal"><Services /></section>
              <section id="about" className="page-section reveal"><About /></section>
              <section id="skills" className="page-section reveal"><Skills /></section>
              <section id="projects" className="page-section reveal"><Projects /></section>
              <section id="resume" className="page-section reveal"><Resume /></section>
              <section id="blogs" className="page-section reveal"><Blogs /></section>
              <Footer />
            </div>
          } />
          <Route path="/about" element={<Navigate to="/#about"/>} />
          <Route path="/project" element={<Navigate to="/#projects"/>} />
          <Route path="/resume" element={<Navigate to="/#resume"/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
