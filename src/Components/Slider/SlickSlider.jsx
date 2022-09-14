import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {IoIosArrowDropleft} from 'react-icons/io'
import {IoIosArrowDropright} from 'react-icons/io'
import logo1 from '../../Assets/slider/slider1-logo.png'
import slider1 from '../../Assets/slider/slider1.png'
const SlickSlider = () => {
    const settings = {
        dots: false,
        // arrow: true,
        // nextArrow: <IoIosArrowDropright />,
        // prevArrow: <IoIosArrowDropleft />,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 968,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              },
            },
      
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      
      };

  return (
    <div className="">
        <Slider {...settings} className="d-flex justify-content-center">
            <div id="slider1">
                <img src={logo1} alt="" />
                <img src={slider1} alt="" />
            </div>
            <div>
                <img src={logo1} alt="" />
                <img src={slider1} alt="" />
            </div>
            <div>
                <img src={logo1} alt="" />
                <img src={slider1} alt="" />
            </div>
            <div>
                <img src={logo1} alt="" />
                <img src={slider1} alt="" />
            </div>
            <div>
                <img src={logo1} alt="" />
                <img src={slider1} alt="" />
            </div>
        </Slider>
    </div>
  )
}

export default SlickSlider