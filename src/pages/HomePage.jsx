import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import TopFiveMovies from "../components/TopFiveMovies";
import BackgroundSection from "../components/BackgroundSection";
import NavBar from "../components/NavBar";



const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
 
  
const [imagesCounter,setImagesCounter] = useState(1)


  useEffect(() => {
    axios
      .get("http://localhost:5005/movies")
      .then((response) => {
        const sortedMovies = response.data.sort(
          (a, b) => b.imdbRating - a.imdbRating
        );
        setMovies(sortedMovies.slice(0, 5));

        // Extracting unique categories dynamically

        const allCategories = response.data.flatMap(
          (movie) => movie.categories
        );
        const uniqueCategories = [...new Set(allCategories)];
        uniqueCategories.sort();
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.log("Error while getting the movies", error);
      });
  }, []);

  
  return (
    <div className="app-container">
      <NavBar/>
      <div className="splinter-general"></div>

    <div className="hpo-con">
      
          
          <div className="categories">
             <h3>Categories</h3>
                <div className="categories-under-line"></div>
                  <ul>
                   {categories.map((category) => (
                  // <li key={category}>{category}</li>
                   <li key={category}>
                   <Link to={`/categories/${category}`}>{category}</Link>
                 </li>
                ))}
                 </ul>
          </div>
         
          <div className="hp-bg-section">
      <BackgroundSection imagesCounter={imagesCounter} setImagesCounter={setImagesCounter}/>
      </div>
       <div className="hp-topfivemovies"> 
      <TopFiveMovies movies={movies}/>
      </div>
    </div>
    </div>
    
  );
};

export default HomePage;
