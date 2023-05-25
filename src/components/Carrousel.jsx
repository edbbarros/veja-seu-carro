import React, { useState, useEffect, useRef } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import post1 from '../assets/post1.jpg';
import post2 from '../assets/post2.jpg';
import post3 from '../assets/post3.jpg';
import post4 from '../assets/post4.jpg';
import post5 from '../assets/post5.jpg';
import post6 from '../assets/post6.jpg';

const Carrousel = () => {

  const settings = {
    className: "center,",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 300,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const carouselRef = useRef(null);

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === 'ArrowLeft') {
  //       handlePrev();
  //     } else if (event.key === 'ArrowRight') {
  //       handleNext();
  //     }
  //   };

  //   document.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  // const handlePrev = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide === 0 ? 5 : prevSlide - 1));
  // };

  // const handleNext = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide === 5 ? 0 : prevSlide + 1));
  // };

  // useEffect(() => {
  //   const carouselElement = carouselRef.current;
  //   const slideWidth = carouselElement.offsetWidth / 3;
  //   carouselElement.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  // }, [currentSlide]);

  return (

    <div>

      <Slider {...settings}>
        <div className=' px-0 lg:px-5'>
          <img src={post1} alt="" />
        </div>
        <div className=' px-0 lg:px-5'>
          <img src={post2} alt="" />
        </div>
        <div className=' px-0 lg:px-5'>
          <img src={post3} alt="" />
        </div>
        <div className=' px-0 lg:px-5'>
          <img src={post4} alt="" />
        </div>
        <div className=' px-0 lg:px-5'>
          <img src={post5} alt="" />
        </div>
        <div className=' px-0 lg:px-5'>
          <img src={post6} alt="" />
        </div>
      </Slider>
    </div>


    // <div className="relative w-96 p-2" data-carousel="slide">
    //   <div className="relative h-[600px] overflow-hidden rounded-lg">
    //     <div className="carousel-container" ref={carouselRef}>
    //       {[post1, post2, post3, post4, post5, post6].map((post, index) => (
    //         <div
    //           key={index}
    //           className="carousel-item"
    //           style={{ flexBasis: `${100 / 3}%` }}
    //         >
    //           <img
    //             src={post}
    //             className="w-full h-full object-cover"
    //             alt="..."
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
    //     {[1, 2, 3].map((slide) => (
    //       <button
    //         key={slide}
    //         type="button"
    //         className={`w-3 h-3 rounded-full ${slide === currentSlide % 3 ? 'bg-white' : ''
    //           }`}
    //         aria-current={slide === currentSlide % 3 ? 'true' : 'false'}
    //         aria-label={`Slide ${slide}`}
    //         data-carousel-slide-to={slide}
    //         onClick={() => setCurrentSlide(slide - 1)}
    //       ></button>
    //     ))}
    //   </div>
    //   <button
    //     type="button"
    //     className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    //     data-carousel-prev
    //     onClick={handlePrev}
    //   >
    //     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
    //       <svg
    //         aria-hidden="true"
    //         className="w-5 h-5 text-white sm:w-6 sm:h-6"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M15 19l-7-7 7-7"
    //         ></path>
    //       </svg>
    //       <span className="sr-only">Previous</span>
    //     </span>
    //   </button>
    //   <button
    //     type="button"
    //     className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    //     data-carousel-next
    //     onClick={handleNext}
    //   >
    //     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
    //       <svg
    //         aria-hidden="true"
    //         className="w-5 h-5 text-white sm:w-6 sm:h-6"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M9 5l7 7-7 7"
    //         ></path>
    //       </svg>
    //       <span className="sr-only">Next</span>
    //     </span>
    //   </button>
    // </div>
  );
};

export default Carrousel;
