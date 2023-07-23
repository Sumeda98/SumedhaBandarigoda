import React from "react";
import "../../pages/style.css";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import IMG1 from "../../Assets/github.png";
import IMG2 from "../../Assets/behance.jpeg";
import IMG3 from "../../Assets/research.jpg";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12} className="project-card">
              <Container>
                <Row className="workExtextbackground">
                  <Col md={12}>
                    <h3 className="workExtext">
                      Work <span>Experience</span>
                    </h3>
                    <p className="workExdetails">
                      I have been involved in an exciting new products at the
                      company. We are developing an online tool, in
                      collaboration with top compliance experts in Sweden,
                      designed to guide companies through the certification
                      preparation process, providing step-by-step guidance and
                      support. This project showcases my ability to closely
                      collaborate with Business Analysts and Product Owners to
                      deliver innovative solutions.
                    </p>
                    <Col md={10}>
                      <div className="workExskilllist">
                        <li>
                          Worked on Friendly Swedish - Sri Lankan working
                          Environment
                        </li>
                        <li>Worked on on-site offshore model</li>
                        <li>
                          Hands-on experience in advanced software technologies
                        </li>
                        <li>Full Agile Scrum practices</li>
                        <li>
                          Worked on online training delivery product (Start to
                          Production)
                        </li>
                        <li>
                          Worked on online company management product (Start to
                          Production)
                        </li>
                      </div>
                    </Col>
                    <h5 style={{ color: "#ffff", marginTop: "20px" }}>
                      Roles and Responsibility
                    </h5>
                    <Col md={12}>
                      <div className="workExskilllist">
                        <li>R & D works</li>
                        <li>Design user-friendly Prototypes </li>
                        <li>React Component Development</li>
                        <li>Customizing MUI components related to designs</li>
                        <li>
                          Research for third party react libraries and
                          Documentation (Confluence)
                        </li>
                        <li>Mobile responsive design and development</li>
                        <li>
                          Maintaining user interface with translation using
                          i18next
                        </li>
                      </div>
                    </Col>
                    <h5 style={{ color: "#ffff", marginTop: "30px" }}>
                      Tools and Technologies used
                    </h5>
                    <Col md={12}>
                      <div className="workExskilllist">
                        <Row>
                          <Col md={3}>
                            <li>React Js</li>
                            <li>Redux</li>
                            <li>i18next</li>
                            <li>HTML / CSS</li>
                            <li>i18next</li>
                          </Col>
                          <Col md={3}>
                            <li>MUI</li>
                            <li>Git</li>
                            <li>AWS</li>
                            <li>Jira</li>
                          </Col>
                          <Col md={3}>
                            <li>Figma</li>
                            <li>Adobe XD</li>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={IMG1}
                isBlog={false}
                title="Git Hub"
                description="View Projects on Git Hub"
                ghLink="https://github.com/Sumeda98"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={IMG2}
                isBlog={false}
                title="Behance"
                description="View Designs on Behance"
                ghLink="https://www.behance.net/sumedasankalpa"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={IMG3}
                isBlog={false}
                title="Research Project"
                description="Final year research project"
                ghLink="https://smartaijapura.000webhostapp.com/"
              />
            </Col>
            
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
