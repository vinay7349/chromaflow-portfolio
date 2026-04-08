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
        <div style={{ textAlign: "center", marginBottom: "50px" }} className="reveal fade-bottom">
          <p style={{ 
            color: "rgba(220, 210, 235, 0.6)", 
            letterSpacing: "4px", 
            textTransform: "uppercase", 
            fontSize: "0.95rem",
            fontWeight: "600",
            marginBottom: "10px"
          }}>
            What I offer
          </p>
          <h2 style={{ 
            color: "white", 
            fontSize: "2.8rem", 
            fontWeight: "700", 
            marginBottom: "15px",
            textShadow: "0 0 10px rgba(199, 112, 240, 0.4)"
          }}>
            Services <span className="purple">for you</span>
          </h2>
          <p style={{ color: "rgba(220, 210, 235, 0.8)", fontSize: "1.1rem" }}>Simple packages to get your brand online fast</p>
        </div>

        <Row style={{ justifyContent: "center" }} className="reveal scale-up">
          {serviceData.map((service, index) => (
            <Col md={3} sm={6} key={index} style={{ padding: "15px" }}>
              <Card 
                style={{ 
                  background: "rgba(20, 15, 35, 0.5)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(199, 112, 240, 0.15)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  borderRadius: "20px",
                  padding: "30px 20px",
                  height: "100%",
                  transition: "all 0.4s ease",
                  textAlign: "center",
                  cursor: "pointer"
                }} 
                className="service-card-item"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(199, 112, 240, 0.2)';
                  e.currentTarget.style.border = '1px solid rgba(199, 112, 240, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.border = '1px solid rgba(199, 112, 240, 0.15)';
                }}
              >
                <div style={{ 
                  background: "rgba(199, 112, 240, 0.1)",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto 20px auto",
                  color: "#c770f0",
                  boxShadow: "0 0 20px rgba(199, 112, 240, 0.15)",
                  transition: "all 0.3s ease"
                }} className="service-icon">
                  {service.icon}
                </div>
                <Card.Title style={{ 
                  color: "white", 
                  fontWeight: "600", 
                  fontSize: "1.3rem",
                  marginBottom: "15px",
                  letterSpacing: "0.5px"
                }}>
                  {service.title}
                </Card.Title>
                <Card.Text style={{ 
                  color: "rgba(220, 210, 235, 0.7)", 
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
