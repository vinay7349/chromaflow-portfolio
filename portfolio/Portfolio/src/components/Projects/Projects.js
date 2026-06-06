import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import volleyballImg from "../../Assets/volleyball.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "100px" }} className="reveal scale-up">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volleyballImg}
              isBlog={false}
              title="Fly High League"
              description="A premium web platform designed for the Fly High League volleyball and throwball tournament. Features match schedules, team registration forms, points tables, and dynamic results showcasing an elegant glassmorphism dark UI."
              ghLink="https://github.com/vinay7349"
              demoLink="https://vollyball-ad4ce.web.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
