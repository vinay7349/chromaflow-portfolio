import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container fluid className="about-section" id="skills" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <Container>
        <h1 className="project-heading reveal fade-bottom section-title">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <div className="reveal scale-up" style={{ padding: "0 20px" }}>
          <Techstack />
        </div>

        <h1 className="project-heading reveal fade-bottom section-title" style={{ marginTop: "40px" }}>
          <strong className="purple">Tools</strong> I use
        </h1>
        <div className="reveal scale-up" style={{ padding: "0 20px" }}>
          <Toolstack />
        </div>
      </Container>
    </Container>
  );
}

export default Skills;
