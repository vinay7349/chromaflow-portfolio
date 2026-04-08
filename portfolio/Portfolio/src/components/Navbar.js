import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineProject,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar({ activeSection }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef({});

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    updateExpanded(false);
  };

  useEffect(() => {
    const updateIndicator = () => {
      // Map 'intro' and 'skills' to 'about' for the primary About highlight
      const trackedSection = (activeSection === "intro" || activeSection === "about" || activeSection === "skills") 
        ? "about" 
        : activeSection;
        
      const activeElement = navRefs.current[trackedSection];
      
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setIndicatorStyle({
          left: offsetLeft + "px",
          width: offsetWidth + "px",
          opacity: 1
        });
      } else {
        setIndicatorStyle({ left: 0, width: 0, opacity: 0 });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection]);

  useEffect(() => {
    const mainWrapper = document.querySelector(".main-scroll-wrapper");
    const scrollHandler = () => {
      if (mainWrapper && mainWrapper.scrollTop >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };

    if (mainWrapper) {
      mainWrapper.addEventListener("scroll", scrollHandler);
    }
    return () => {
      if (mainWrapper) {
        mainWrapper.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "12px" }}>
            {/* Main Petals */}
            <circle cx="50" cy="25" r="12" fill="#AFA9EC" />
            <circle cx="50" cy="75" r="12" fill="#AFA9EC" />
            <circle cx="25" cy="50" r="12" fill="#AFA9EC" />
            <circle cx="75" cy="50" r="12" fill="#AFA9EC" />
            {/* Diagonal Petals */}
            <circle cx="32" cy="32" r="12" fill="#CECBF6" />
            <circle cx="68" cy="32" r="12" fill="#CECBF6" />
            <circle cx="32" cy="68" r="12" fill="#CECBF6" />
            <circle cx="68" cy="68" r="12" fill="#CECBF6" />
            {/* Center Circle */}
            <circle cx="50" cy="50" r="14" fill="#534AB7" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: "1" }}>
            <span style={{ 
              color: "#26215C", 
              fontWeight: "800", 
              fontSize: "1.6rem",
              fontFamily: "var(--brand-font)" 
            }}>
              Chroma
            </span>
            <span style={{ 
              color: "#7F77DD", 
              fontSize: "0.85rem", 
              fontWeight: "500",
              letterSpacing: "3px", 
              textTransform: "uppercase",
              marginTop: "2px"
            }}>
              Flow
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{ position: "relative" }}>
            {/* Removed sliding indicator block */}
            
            <Nav.Item ref={el => navRefs.current["home"] = el}>
              <Nav.Link 
                onClick={() => scrollToSection("home")}
                className={activeSection === "home" ? "active-section" : ""}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item ref={el => navRefs.current["about"] = el}>
              <Nav.Link 
                onClick={() => scrollToSection("about")}
                className={activeSection === "about" || activeSection === "intro" || activeSection === "skills" ? "active-section" : ""}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item ref={el => navRefs.current["services"] = el}>
              <Nav.Link 
                onClick={() => scrollToSection("services")}
                className={activeSection === "services" ? "active-section" : ""}
              >
                <AiOutlineProject style={{ marginBottom: "2px" }} /> Services
              </Nav.Link>
            </Nav.Item>

            <Nav.Item ref={el => navRefs.current["projects"] = el}>
              <Nav.Link 
                onClick={() => scrollToSection("projects")}
                className={activeSection === "projects" ? "active-section" : ""}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item ref={el => navRefs.current["resume"] = el}>
              <Nav.Link 
                onClick={() => scrollToSection("resume")}
                className={activeSection === "resume" ? "active-section" : ""}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item ref={el => navRefs.current["blogs"] = el}>
              <Nav.Link 
                onClick={() => scrollToSection("blogs")}
                className={activeSection === "blogs" ? "active-section" : ""}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/vinaykharvi7349/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
