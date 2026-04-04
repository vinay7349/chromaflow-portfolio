import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section className="home-section" style={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%' }}>
      <Particle />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header reveal fade-left">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> VINAY KHARVI</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }} className="reveal fade-right">
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
