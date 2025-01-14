import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import TopFiveMovies from "../components/TopFiveMovies";
import glad from "../assets/images/Glad.jpg"
import madMax from "../assets/images/MadMax.jpg"
import therevenant from "../assets/images/the-revenant.jpg"
import whiplash from "../assets/images/Whiplash.jpg"



const HomePage = () => {
  const [movies, setMovies] = useState([]);
  //   const [categories, setCategories] = useState([
  //   "Action", "Fantasy", "Drama", "Romance", "Science Fiction", "Adventure",
  //   "Horror", "Thriller", "Comedy", "Crime", "Mastery", "History", "Animation",
  //   "Family", "Biography", "Mystery", "Western", "Music", "War"
  // ]);
  const [categories, setCategories] = useState([]);

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
    <div className="hpo-con">

          <div className="categories">
             <h2>Categories</h2>
                <div className="hp-under-line"></div>
                  <ul>
                   {categories.map((category) => (
                  // <li key={category}>{category}</li>
                   <li key={category}>
                   <Link to={`/categories/${category}`}>{category}</Link>
                 </li>
                ))}
                 </ul>
          </div>
      
      <div className="images"> </div>

      <div className="hp-topfivemovies"> 
      <TopFiveMovies movies={movies}/>
      </div>
    </div>
    
  );
};

export default HomePage;
