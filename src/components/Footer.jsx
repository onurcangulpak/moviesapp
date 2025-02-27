import React from "react";
import "./Footer.css";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";

const Footer = () => {
  return (
  <div className="xx">
     <div className="splinter"></div>

    <div className="footer">
    
      <div className="social-media">
        <h3>Social Media</h3>
        <ul className="sm-ul">
          <li>
            <a
              href="https://www.linkedin.com/in/onurcangulpak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/onurcangulpak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/onurcangulpak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-text">
        <p>
          {" "}
          "Bring Me Movies" is your ultimate gateway to a world of cinematic
          magic. Discover, stream, and enjoy a vast collection of movies, from
          timeless classics to the latest blockbusters. <br/>Whether you're in the
          mood for action, romance, comedy, or suspense, we've got something for
          everyone. Sit back, relax, and let the movies come to you!
        </p>
        <p>
          Copyright © 2010-2025 Bring Me Movie Company S.L. All rights reserved.
        </p>
      </div>
      <div className="footer-links">
        <a href="/aboutus">
          <h3>About Us</h3>
        </a>
        <a href="/contactus">
          <h3>Contact us</h3>
        </a>
      </div>
    </div>
    </div>
  
  );
};

export default Footer;
