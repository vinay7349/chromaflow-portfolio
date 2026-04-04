import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Vinay Kharvi </span>
            from <span className="purple"> Mangalore, India.</span>
            <br />
            I'm currently pursuing my Engineering degree in Computer Science & Data Science.
            <br />
            <br />
            I'm passionate about creating simple, clean, and modern websites that help businesses build their online presence. I enjoy turning ideas into user-friendly designs that are easy to understand and visually appealing.
            <br />
            <br />
            Apart from designing and building websites, I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new ideas in web design
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and improving my skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and experiencing new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to create websites that make a real impact."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
