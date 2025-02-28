import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="app-container">
      <NavBar />
      <div className="splinter-general"></div>
      <div className="abconus-container">
        <h3>📌 About Us</h3>
        <div className="abconus-content">
          
        <div className="abconus-text">
  <p>
    Welcome to <strong>MoesOne</strong>, your ultimate hub for in-depth insights into the world of cinema.  
    Our mission is to create a space where movie enthusiasts can explore detailed information about their favorite films, genres, and actors.
  </p>

  <p>
    Whether you're looking for classic masterpieces, the latest blockbusters, or indie gems,  
    MoesOne provides **accurate, well-organized, and easily accessible** information for every film lover.
  </p>

  <h4>🎯 Our Vision</h4>
  <p>
    Our vision is to **become the most trusted** and **comprehensive** source of movie-related information worldwide.  
    <br/>We believe that movies are more than just entertainment—they are an art form that shapes cultures, inspires minds, and connects people.
  </p>

  <h4>🚀 Why Choose MoesOne?</h4>
  <p>
    ✅ <strong> Comprehensive Database: </strong> We provide extensive details on thousands of movies, actors, and categories.  
    <br/>
    
    ✅ <strong> User-Friendly Experience: </strong> Our sleek and modern design ensures smooth navigation.  
    <br/>✅ *<strong> eliable & Up-to-Date:</strong> We constantly update our database with the latest information.  
    <br/>✅ <strong> Ad-Free Browsing:</strong> 
    <br/>Enjoy a seamless experience with no interruptions.  
  </p>

  <h4>🔐 Copyright & Legal Compliance</h4>
  <p>
    We strictly follow the <strong>FIPA-2030</strong> law, ensuring that MoesOne remains a copyright-safe platform.  
    <br/>No video content is hosted or streamed on our site. We only provide verified and structured data about movies and entertainment.
  </p>

  <h4>🌎 Join Our Community</h4>
  <p>
    MoesOne is more than just an information hub—it's a place where movie lovers can connect, discuss, and share their passion for cinema.  
   Want to contribute? We welcome user-submitted reviews and insights!  
  </p>

  <p>📧 Have any questions? To contact us <Link to="/contactus"> <a href="contactus-page" className="link-text">click here</a></Link> .</p>
</div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
