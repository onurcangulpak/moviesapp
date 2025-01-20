import React, { useState } from "react";
import glad from "../assets/images/Gladiator_resized.jpg";
import madMax from "../assets/images/MadMax.jpg";
import therevenant from "../assets/images/Revenant_resized.jpg";
import whiplash from "../assets/images/Whiplash_resized.jpg";
import "./BackgroundSection.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const BackgroundSection = () => {
  const [ slide, setSlide ] = useState(0);
  
  const nextSlide = ()=> { 
    setSlide( slide === backgroundImages.length -1 ? 0 : slide + 1)

  }

  const prevSlide = ()=> { 
    setSlide(slide === 0? backgroundImages.length -1 : slide - 1)
    
  }


  const backgroundImagesText = [
    { text1: "Gladiator" },
    { text2: "Mad Max" },
    { text3: "The Revenant" },
    { text4: "Whiplash" },
  ];
  const backgroundImages = [
    { img: glad, alt: "gladiator" },
    { img: madMax, alt: "madmax" },
    { img: therevenant, alt: "therevenant" },
    { img: whiplash, alt: "whiplash" },
  ];

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {backgroundImages.map((bgimg, index) => {
        return (
          <img
            src={bgimg.img}
            alt={bgimg.alt}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {backgroundImages.map((_, index) => {
          return (
            <button key={index} onClick={()=> setSlide(index)} className={slide === index ? "indicator": "indicator indicator-inactive"}></button>
          );
        })}
      </span>
    </div>
  );
};

export default BackgroundSection;
