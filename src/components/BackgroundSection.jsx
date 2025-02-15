import React, { useState } from "react";
import glad from "../assets/images/Gladiator_resized.jpg";
import madMax from "../assets/images/MadMax.jpg";
import therevenant from "../assets/images/Revenant_resized.jpg";
import whiplash from "../assets/images/Whiplash_resized.jpg";
import "./BackgroundSection.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackgroundSection = () => {
  const [ slide, setSlide ] = useState(0);
  
  const nextSlide = ()=> { 
    setSlide( slide === backgroundImages.length -1 ? 0 : slide + 1)

  }

  const prevSlide = ()=> { 
    setSlide(slide === 0? backgroundImages.length -1 : slide - 1)
    
  }

  
  const backgroundImages = [
    { img: glad, alt: "Gladiator" , id:9 },
    { img: madMax, alt: "Mad Max", id:42 },
    { img: therevenant, alt: "The Revenant" , id:27},
    { img: whiplash, alt: "Whiplash", id:29 },
  ];

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {backgroundImages.map((bgimg, index) => {
        return (
          <div
          key={index}
          className={slide === index ? "slide-container" : "slide-container slide-hidden"}
        >
          <Link to={`/movies/${bgimg.id}`}> 
          <img src={bgimg.img} alt={bgimg.alt} className="slide" />
       
          <div className="gradient-overlay">
            <div className="slide-title">{bgimg.alt}</div>
          </div>
          </Link>
        </div>
       
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
