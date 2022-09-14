import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./index.css";
import insta from "../../Assets/footer/insta.png";
import fb from "../../Assets/footer/fb.png";
import twitter from "../../Assets/footer/twitter.png";

const ContactForm = () => {
  return (
    <Container fluid className="my-4 contact-form-section">
      <Row className="">
        <h2>Connect with us</h2>
        <Col lg={7} className="form-col">
          <div>
            <h3>Tell us about your project</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum lobortis mi vulputate potenti orci.
            </p>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" className="input" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" className="input" />
                  </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your phone number</Form.Label>
                    <Form.Control type="text" className="input" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" rows="3" className="input" />
              </Form.Group>

              <Button className="bg-blue btn" style={{marginTop: "44px"}}>Submit</Button>
            </Form>
          </div>
        </Col>
        <Col lg={4} className="address-col px-5 my-4">
            <div>
                <h4>Address</h4>
                <span>0199 Taylor Park, North Dakota, USA</span>

                <hr style={{border: "2px solid rgb(51, 51, 51)", backgroundColor: "rgb(51, 51, 51)"}} />

                <h4>Call us on</h4>
                <span>
                    +1 98723 42023 <br />
                    info@logoipsum.com
                </span>

                <hr style={{border: "2px solid rgb(51, 51, 51)", backgroundColor: "rgb(51, 51, 51)"}} />

                <div className="social">
                    <h4>Social Media</h4>
                    <ul className='list-unstyled d-flex social-icons'>
                        <li className='align-items-center bg-blue'><a href="#"><img src={insta} width="18px" height="18px" alt="" /></a></li>
                        <li className="bg-blue"><a href="#"><img src={twitter} width="20px" height="16px" alt="" /></a></li>
                        <li className="bg-blue"><a href="#"><img src={fb} width="10.52px" height="20px" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
