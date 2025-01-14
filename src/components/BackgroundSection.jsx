import React from "react";
import glad from "../assets/images/Glad.jpg";
import madMax from "../assets/images/MadMax.jpg";
import therevenant from "../assets/images/the-revenant.jpg";
import whiplash from "../assets/images/Whiplash.jpg";

const BackgroundSection = ({ imagesCounter, setImagesCounter }) => {
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
    <div>
      <div className="bs-images-text">
        <p>{backgroundImagesText[imagesCounter].text1}</p>
        <p>{backgroundImagesText[imagesCounter].text2}</p>
        <p>{backgroundImagesText[imagesCounter].text3}</p>
        <p>{backgroundImagesText[imagesCounter].text4}</p>
      </div>
      <div className="bs-images">
        <img
          src={backgroundImages[imagesCounter].img}
          alt={backgroundImages[imagesCounter].alt}
          className="bs-images-background"
          style={{ maxHeight: "100px" }}
        />
      </div>
      <div className="bs-images-switch">
        <ul className="image-dots">
          <li
            onClick={() => setImagesCounter(0)}
            className={imagesCounter === 0 ? "images-dot orange" : "image-dot"}
          >
            {" "}
          </li>
          <li
            onClick={() => setImagesCounter(1)}
            className={imagesCounter === 1 ? "images-dot orange" : "image-dot"}
          >
            {" "}
          </li>
          <li
            onClick={() => setImagesCounter(2)}
            className={imagesCounter === 2 ? "images-dot orange" : "image-dot"}
          >
            {" "}
          </li>
          <li
            onClick={() => setImagesCounter(3)}
            className={imagesCounter === 3 ? "images-dot orange" : "image-dot"}
          >
            {" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BackgroundSection;
