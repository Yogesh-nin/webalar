import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import hero from '../../Assets/hero.png'
import './index.css'
const Hero = () => {
  return (
    <Container fluid className="hero-section">
        <Row className='justify-content-between'>
            <Col lg={5} className="d-flex align-items-center my-2">
                <div className='hero-col'>
                    <h1>Let’s create something great together</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec ultrices venenatis in. Sed elit aenean mattis vulputate aliquet vitae.</p>
                    <Button className="btn bg-blue">Let's Talk</Button>
                </div>
            </Col>
            <Col lg={6} className="my-2">
                <img className="hero-img img img-fluid" src={hero} alt="" />
            </Col>
        </Row>
    </Container>
  )
}

export default Hero