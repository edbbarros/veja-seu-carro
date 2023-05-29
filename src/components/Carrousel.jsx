import React, { useState, useEffect, useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";
import post4 from "../assets/post4.jpg";
import post5 from "../assets/post5.jpg";
import post6 from "../assets/post6.jpg";

const Carrousel = () => {
  const settings = {
    className: "center,",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
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
    <div>
      <Slider {...settings}>
        <div className=" px-2 lg:px-5">
          <a href="https://www.instagram.com/p/CrV7okhrVwU/">
            <img src={post1} alt="" />
          </a>
        </div>
        <div className=" px-2 lg:px-5">
          <a href="https://www.instagram.com/p/CrakccdOxgS/">
            <img src={post2} alt="" />
          </a>
        </div>
        <div className=" px-2 lg:px-5">
          <a href="https://www.instagram.com/p/Cq3ygPYLdHh/">
            <img src={post3} alt="" />
          </a>
        </div>
        <div className=" px-2 lg:px-5">
          <a href="https://www.instagram.com/p/CrKGUdQLkAL/">
            <img src={post4} alt="" />
          </a>
        </div>
        <div className=" px-2 lg:px-5">
          <a href="https://www.instagram.com/p/CrszV6auR6x/">
            <img src={post5} alt="" />
          </a>
        </div>
        <div className=" px-2 lg:px-5">
          <a href="https://www.instagram.com/p/CrdikN7OkEe/">
            <img src={post6} alt="" />
          </a>
        </div>
      </Slider>
    </div>

  );
};

export default Carrousel;
