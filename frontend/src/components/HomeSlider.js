import React from "react";
import Carousel from "react-bootstrap/Carousel"; 
import Loader from "./Loader";
import Message from "./Message";
import { useGetSliderQuery } from "../slices/sliderApiSlice";

function HomeSlider() {
  // get slider list data using redux toolkit
  const { data, isLoading, error } = useGetSliderQuery(); 

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Carousel>
          {data.map((slider) => (
            <Carousel.Item interval={1000} key={slider._id}>
              <img src={`../${slider.image}`}alt="" width="100%" />
              <Carousel.Caption>
                <h3>{slider.name}</h3>
                <p>{slider.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
}

export default HomeSlider;
