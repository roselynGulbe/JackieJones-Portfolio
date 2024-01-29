import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moile from "../../Assets/Projects/moile.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moile}
              isBlog={false}
              title="Skeri Mobile App"
              description="A mobile app for plant enthusiast!"
              ghLink=""
              demoLink=""
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
