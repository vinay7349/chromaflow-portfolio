import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiOutlineFilePdf, AiOutlineClockCircle } from "react-icons/ai";

function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume reveal scale-up" style={{ justifyContent: "center", padding: "80px 0" }}>
          <Col md={8} lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
            {/* ... card content ... */}
            <div className="resume-placeholder-card" style={{
              background: "rgba(20, 15, 35, 0.5)",
              backdropFilter: "blur(10px)",
              webkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(199, 112, 240, 0.15)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
              borderRadius: "20px",
              padding: "50px 30px",
              textAlign: "center",
              width: "100%",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="resume-placeholder-icon" style={{
                background: "rgba(199, 112, 240, 0.1)",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto 25px auto",
                boxShadow: "0 0 30px rgba(199, 112, 240, 0.2)",
                animation: "pulseIcon 3s infinite alternate"
              }}>
                <AiOutlineFilePdf size={60} color="#c770f0" />
              </div>
              <h2 style={{ color: "white", fontWeight: "600", letterSpacing: "1px" }} className="section-title">Resume Coming Soon</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", marginTop: "15px", lineHeight: "1.6" }}>
                I am currently updating my resume to include my latest projects, skills, and experiences. <br />
                Please check back later!
              </p>
              <div style={{ marginTop: "35px", display: "flex", justifyItems: "center", justifyContent: "center", alignItems: "center", gap: "10px", color: "#c770f0", fontWeight: "500", fontSize: "1.1rem" }}>
                <AiOutlineClockCircle size={24} className="spin-slow" />
                <span>Upload Pending</span>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
