import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a self-taught UI UX Engineer from Sri Lanka. I’m very
              interested in UI/UX designing and Front-end development. I’m
              skilled in designing and implementing highly-responsive user
              interface components using React concepts. Proficient in
              translating designs and wireframes into high-quality code. 
              
              <p>pursued a degree in Information and Communication Technology
              (BICT) Honours with a specialization in Multimedia Technology at
              the Faculty of Technology, University of Sri Jayewardenepura.</p>

              <p>I have gained valuable one-year experience as a UI/UX Engineer.</p>
              
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <li>React Js</li>
                  <li>MUI</li>
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                </Col>
                <Col md={5}>
                  <li>UI UX Design</li>
                  <li>Adobe XD / Figma</li>
                  <li>GIT</li>
                  <li>GitHub / AWS</li>
                  
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
