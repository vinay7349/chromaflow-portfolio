import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading reveal fade-bottom section-title">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} className="reveal fade-bottom">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "400px" }} className="reveal scale-up">
          {/* Project cards will go here */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
