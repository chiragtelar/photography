import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sliderOne from "../assets/slider_1.jpg";
import sliderTwo from "../assets/slider_2.jpg";
import sliderThree from "../assets/slider_3.jpg";

function HomeSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={sliderOne} alt="" width="100%"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={sliderTwo} alt="" width="100%"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={sliderThree} alt="" width="100%" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;
