import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  AiOutlineProject, 
  AiOutlineUser, 
  AiOutlineFileText, 
  AiOutlineSync 
} from "react-icons/ai";

function Services() {
  const serviceData = [
    {
      title: "Portfolio site",
      desc: "Showcase your work beautifully. Impress clients instantly.",
      icon: <AiOutlineProject size={40} />
    },
    {
      title: "Personal brand",
      desc: "Tell your story. Build trust with your audience online.",
      icon: <AiOutlineUser size={40} />
    },
    {
      title: "Landing page",
      desc: "One page. One goal. Convert visitors into customers.",
      icon: <AiOutlineFileText size={40} />
    },
    {
      title: "Redesign",
      desc: "Old site looking tired? I'll give it a fresh new look.",
      icon: <AiOutlineSync size={40} />
    }
  ];

  return (
    <Container fluid className="about-section" id="services" style={{ minHeight: "100vh", display: 'flex', alignItems: 'center' }}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: "40px" }} className="reveal fade-bottom">
          <p style={{ 
            color: "#7F77DD", 
            letterSpacing: "4px", 
            textTransform: "uppercase", 
            fontSize: "0.9rem",
            fontWeight: "600",
            marginBottom: "10px"
          }}>
            What I offer
          </p>
          <h2 style={{ color: "#26215C", fontSize: "2.8rem", fontWeight: "700", marginBottom: "15px" }}>Services for you</h2>
          <p style={{ color: "#7F77DD", fontSize: "1.1rem" }}>Simple packages to get your brand online fast</p>
        </div>

        <Row style={{ justifyContent: "center" }} className="reveal scale-up">
          {serviceData.map((service, index) => (
            <Col md={3} key={index} style={{ padding: "15px" }}>
              <Card style={{ 
                backgroundColor: "#EEEDFE", 
                borderColor: "#CECBF6", 
                borderRadius: "15px",
                padding: "25px",
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                textAlign: "center"
              }} className="service-card-item">
                <div style={{ color: "#7F77DD", marginBottom: "20px" }}>{service.icon}</div>
                <Card.Title style={{ 
                  color: "#26215C", 
                  fontWeight: "700", 
                  fontSize: "1.25rem",
                  marginBottom: "15px" 
                }}>
                  {service.title}
                </Card.Title>
                <Card.Text style={{ 
                  color: "#7F77DD", 
                  fontSize: "0.95rem",
                  lineHeight: "1.6" 
                }}>
                  {service.desc}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
