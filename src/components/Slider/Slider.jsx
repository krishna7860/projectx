/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import data from "./data";
import "./slick-theme.css";
import "./slick.css";
import "./common.css";
import SliderCard from "../SliderCard/SliderCard";

const HeroSlider = () => {
  const [state, setState] = useState({ oldSlide: 0, activeSlide: 0 });
  let slide;
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3.5,
    speed: 500,
    arrows: false,
    beforeChange: (current, next) =>
      setState({ oldSlide: current, activeSlide: next }),
    // afterChange: (current) => setState({ activeSlide2: current })
  };
  useEffect(() => {
    console.log(state);
  }, [state]);
  const handleNext = () => {
    slide.slickNext();
  };
  const handlePrev = () => {
    slide.slickPrev();
  };
  return (
    <div
      style={{
        width: "60%",
      }}
    >
      <Slider {...settings} ref={(c) => (slide = c)}>
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </Slider>
      <div>
        <button type="button" onClick={handlePrev}>
          Prev
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
