import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaCode, FaReact, FaMobileAlt } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      {/* 3D Ambient Background */}
      <div className="ambient-background">
        <div className="glow-sphere glow-1"></div>
        <div className="glow-sphere glow-2"></div>
        <div className="glow-sphere glow-3"></div>
      </div>

      {/* Floating 3D Icons */}
      <div className="floating-icons">
        <Tilt className="float-icon float-icon-1" tiltMaxAngleX={35} tiltMaxAngleY={35} perspective={800} transitionSpeed={1500} scale={1.1}>
          <FaCode />
        </Tilt>
        <Tilt className="float-icon float-icon-2" tiltMaxAngleX={35} tiltMaxAngleY={35} perspective={800} transitionSpeed={1500} scale={1.1}>
          <FaReact />
        </Tilt>
        <Tilt className="float-icon float-icon-3" tiltMaxAngleX={35} tiltMaxAngleY={35} perspective={800} transitionSpeed={1500} scale={1.1}>
          <FaMobileAlt />
        </Tilt>
      </div>

      <Container style={{ position: "relative", zIndex: 10 }}>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} className="section-title">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body home-about-body-glass">
              <span style={{ display: "block", marginBottom: "12px" }}>
                I enjoy creating simple and modern websites that help businesses build their online presence.
              </span>
              <span style={{ display: "block", marginBottom: "12px" }}>
                I focus on designing clean, user-friendly information websites that clearly represent a client's services and ideas.
              </span>
              <span style={{ display: "block", marginBottom: "12px" }}>
                My main interest is in building responsive and visually appealing websites using{" "}
                <b className="purple">HTML, CSS, and JavaScript.</b>
              </span>
              <span style={{ display: "block" }}>
                Whenever possible, I work on improving my skills and creating better designs that meet customer requirements and provide a smooth user experience.
              </span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt className="tilt-avatar-wrap" tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={1500} scale={1.05}>
              <div className="avatar-3d-glow"></div>
              <img src={myImg} className="img-fluid avatar-3d" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vinay7349"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/vinaykharvi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vinaykharvi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vinay_kharvi_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
