import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Logo from "../Logo";
import insta from "../../Assets/footer/insta.png";
import fb from "../../Assets/footer/fb.png";
import twitter from "../../Assets/footer/twitter.png";

import vector12 from "../../Assets/footer/Vector-12.png";
import vector10 from "../../Assets/footer/Vector-10.png";
import vector11 from "../../Assets/footer/Vector-11.png";
import vector from "../../Assets/footer/Vector.png";
import vector1 from "../../Assets/footer/Vector-1.png";
import vector2 from "../../Assets/footer/Vector-2.png";
import vector3 from "../../Assets/footer/Vector-3.png";
import vector4 from "../../Assets/footer/Vector-4.png";
import vector5 from "../../Assets/footer/Vector-5.png";
import vector6 from "../../Assets/footer/Vector-6.png";
import vector7 from "../../Assets/footer/Vector-7.png";
import vector8 from "../../Assets/footer/Vector-8.png";
import vector9 from "../../Assets/footer/Vector-9.png";

import "./index.css";
const Footer = () => {
  return (
    <div className="footer">
    <Container  fluid className="dark-bg footer-container">
      <Row className="d-flex justify-content-between">
        <Col lg={5}>
          <h2>Let’s work together</h2>
        </Col>
        <Col lg={5}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu.
          </p>
          <Button className="bg-blue btn my-2">Let's Talk</Button>
        </Col>
      </Row>
      <Row className="justify-content-between my-4">
        <Col lg={4}>
          <div>
            <img src={vector12} alt="" className="vector12" />
            <img src={vector10} alt="" className="vector10" />
            <img src={vector11} alt="" className="vector11" />
            <br />
            <img src={vector} alt="" className="vector" />
            <img src={vector1} alt="" className="vector1" />
            <img src={vector2} alt="" className="vector2" />
            <img src={vector3} alt="" className="vector3" />
            <img src={vector4} alt="" className="vector4" />
            <img src={vector5} alt="" className="vector5" />
            <img src={vector6} alt="" className="vector6" />
            <img src={vector7} alt="" className="vector7" />
            <img src={vector8} alt="" className="vector8" />
            <img src={vector9} alt="" className="vector9" />
          </div>
          <div className="social">
            <ul className="list-unstyled d-flex social-icons">
              <li className="align-items-center bg-white">
                <a href="#">
                  <img src={insta} width="18px" height="18px" alt="" />
                </a>
              </li>
              <li className="bg-white">
                <a href="#">
                  <img src={twitter} width="20px" height="16px" alt="" />
                </a>
              </li>
              <li className="bg-white">
                <a href="#">
                  <img src={fb} width="10.52px" height="20px" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={7} className="d-flex justify-content-end">
          <Row>

          <Col className="my-2">
            <h4>Address</h4>
            <address>
              {" "}
              0199 Taylor Park, <br /> North Dakota, USA
            </address>
          </Col>
          <Col className="my-2">
            <h4>Call us on</h4>
            <span>+1 98723 42023</span>
            <br />
            <span>info@logoipsum.com</span>
          </Col>
          <Col className="my-2">
            <h4>Our Policy</h4>
            <span>Privacy Policy</span>
            <br />
            <span>Terms of Use</span>
            <br />
            <span>Refund Policy</span>
            <br />
          </Col>
          </Row>
        </Col>
      </Row>
      <hr style={{ border: "2px solid #D9D9D9", backgroundColor: "#D9D9D9" }} />
      <div className="d-flex justify-content-center copyright">
        <span>Copyright © Webalar. All Rights Reserved</span>
      </div>
    </Container>
    </div>
  );
};

export default Footer;
