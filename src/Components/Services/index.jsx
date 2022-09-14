import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SlickSlider from '../Slider/SlickSlider'
import './index.css'
import rectangle1 from '../../Assets/design-service/Rectangle 12.png'
import rectangle2 from '../../Assets/design-service/Rectangle 13.png'
import rectangle3 from '../../Assets/design-service/Rectangle 14.png'

const Services = () => {
  return (
    <div className="service-container">
    <Container fluid className="dark-bg service">
        <Row>
            <h2 className='text-center'>Trusted Companies</h2>
            <div className='slider'>
                <SlickSlider />
            </div>
            <hr className="service-hr"  />
        </Row>
        <Row className="justify-content-between align-items-center service-row">
          <Col lg={6}>
            <h3>Our Services that we provide</h3>
          </Col>
          <Col lg={5}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra diam arcu massa amet non metus ornare.</p>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col lg={4} className="service-col my-2 border-side">
            <div className="service-logo">
              <img src={rectangle1} alt="" id="rectangle1" />
              <img src={rectangle2} alt="" id="rectangle2" />
              <img src={rectangle3} alt="" id="rectangle3" />
            </div>
            <h4>Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
          </Col>
          <Col lg={4} className="service-col border-side my-2">
            <div className="service-logo">
              <img src={rectangle1} alt="" id="rectangle1" />
              <img src={rectangle2} alt="" id="rectangle2" />
              <img src={rectangle3} alt="" id="rectangle3" />
            </div>
            <h4>Development</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
          </Col>
          <Col lg={4} className="service-col my-2">
          <div className="service-logo">
              <img src={rectangle1} alt="" id="rectangle1" />
              <img src={rectangle2} alt="" id="rectangle2" />
              <img src={rectangle3} alt="" id="rectangle3" />
            </div>
            <h4>Marketing</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
          </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Services