import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Text from "../Homepage/Text";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
  AiFillFacebook,
  AiFillBehanceSquare,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">
              I'm <span className="name">Sumedha Bandarigoda</span>
            </h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/Sumeda98");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/sumedha-bandarigoda-231511190/"
                );
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.behance.net/sumedasankalpa");
              }}
              className="socailmediabtn"
            >
              <AiFillBehanceSquare className="icon" />
            </button>

            {/* <button
              onClick={() => {
                // window.open("https://twitter.com/rahulvijay8156");
              }}
              className="socailmediabtn"
            >
              <AiFillFacebook className="icon" />
            </button> */}

            {/* <button
              onClick={() => {
                // window.open("https://instagram.com/rahulvijay81");
              }}
              className="socailmediabtn"
            >
              <AiFillInstagram className="icon" />
            </button> */}

          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
