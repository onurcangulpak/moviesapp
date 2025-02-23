import React from "react";
import NavBar from "../components/NavBar";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="app-container">
      <NavBar />
      <div className="splinter-contact-us"></div>
      <div className="contact-container">
        <h3>📩 Contact</h3>
        <div className="contact-content">
          <p>
            <strong>
              For advertising and suggestions, please use the contact information below.
            </strong>
          </p>
          <p>
            <a href="website" className="link-text">
              www.moesone.org
            </a>{" "}
            platform is operated under the <strong>FIPA-2030</strong> law. According to this law, publishing videos without copyright ownership is strictly prohibited. Therefore, <strong>no video content is allowed on our platform</strong>. Our site only provides information about movies, categories, actors, and similar details.
          </p>
          <p>
            To advertise, make suggestions, or get in touch with us, please send an email to
            <a href="mailto:admin@fictionalstreaming.org" className="link-text">
              {" "}
              onurcangulpak@gmail.com{""}
            </a>
            . All inquiries will be answered within 3 business days.
          </p>

          <h4>FIPA-2030 Law</h4>
          <p>
            <strong>Article 1:</strong> It is prohibited to share video content without copyright on digital platforms.
          </p>
          <p>
            <strong>Article 2:</strong> Content providers can only operate for informational purposes and cannot feature video content.
          </p>
          <p>
            <strong>Article 3:</strong> Users have the right to share and consume only legally evaluated content.
          </p>
          <p>
            <strong>Article 4:</strong> In case of a law violation, the content must be removed within 72 hours, and necessary legal steps should be taken.
          </p>
          <h4>All Rights Reserved.</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
