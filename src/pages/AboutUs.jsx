import React from "react";
import NavBar from "../components/NavBar";
import "./AboutUs.css";
import profilepic from "../assets/images/profilepic.jpg";

const AboutUs = () => {
  return (
    <div className="app-container">
      <NavBar />
     
      <div className="profile-card-out">
      <div className="profile-card">
        <div className="profile-img">
          <img src={profilepic} alt="Profile" />
        </div>
        <h4 className="h4-element">Onurcan Gulpak</h4>
        
      </div>

      <div className="info-card">
        
        <h4 className="h4-element">Onurcan Gulpak</h4>
        <p className="info-element">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
