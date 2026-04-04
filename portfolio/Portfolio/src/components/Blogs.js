import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import { ImBlog } from "react-icons/im";

function Blogs() {
  return (
    <Container fluid className="project-section" id="blogs" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Particle />
      <Container>
        <h1 className="project-heading reveal fade-bottom section-title">
          My <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }} className="reveal fade-bottom">
          Sharing technical insights and development stories on Medium.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="reveal scale-up">
            <Col md={10} className="home-about-description">
                <div style={{ 
                    padding: "60px", 
                    background: "rgba(255, 255, 255, 0.04)", 
                    borderRadius: "24px", 
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                    transition: "all 0.5s ease"
                }} className="glass-card">
                    <ImBlog size={60} color="#c770f0" style={{ marginBottom: "25px" }} />
                    <h2 style={{ color: "white", fontWeight: "600", letterSpacing: "1px" }}>Read on Medium</h2>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.2rem", margin: "25px 0", lineHeight: "1.6" }}>
                        I regularly publish articles about modern web architecture, CSS mastery, and the future of AI in coding. 
                        Each piece is designed to be insightful and easy to read.
                    </p>
                    <a 
                        href="https://vinaykharvi7349.medium.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-primary"
                        style={{ padding: "14px 45px", fontSize: "1.1rem", borderRadius: "50px", background: "#c770f0", border: "none", boxShadow: "0 4px 15px rgba(199, 112, 240, 0.4)" }}
                    >
                        Explore My Articles
                    </a>
                </div>
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
