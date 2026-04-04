import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section" style={{ minHeight: "100vh", display: 'flex', alignItems: 'center' }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }} className="reveal fade-bottom">
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <h1 style={{ fontSize: "2.4em", paddingBottom: "20px" }} className="section-title">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "20px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{ maxHeight: "400px" }} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
