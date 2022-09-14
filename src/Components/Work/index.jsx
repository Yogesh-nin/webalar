import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import holder from '../../Assets/holder.png'
import {BsArrowUpRightCircle  }from 'react-icons/bs'
import './index.css'
const Work = () => {
  return (
    <Container className="work">
      <Row>
        <h2 className="text-center">Our Works</h2>
        <Col md={4} className="my-2">
          <Card>
            <Card.Img variant="top" src={holder} style={{backgroundColor: "#303030"}} />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <div className="d-flex align-items-start">
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
                <Button variant="link"><BsArrowUpRightCircle  size={42} /></Button>

              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-2">
          <Card>
            <Card.Img variant="top" src={holder} />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <div className="d-flex align-items-start">
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
                <Button variant="link"><BsArrowUpRightCircle  size={42} /></Button>

              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-2">
          <Card>
            <Card.Img variant="top" src={holder} />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <div className="d-flex align-items-start">
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
                <Button variant="link"><BsArrowUpRightCircle  size={42} /></Button>

              </div>
            </Card.Body>
          </Card>
        </Col>
        <div className="d-flex justify-content-center">
            <Button className="bg-blue btn work-btn">View More</Button>
        </div>
      </Row>
    </Container>
  );
};

export default Work;
