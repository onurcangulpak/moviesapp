import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css"
import { Link } from "react-router-dom";
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

        const allCategories = response.data.flatMap((movie)=> movie.categories )
        const uniqueCategories = [...new Set(allCategories)]
        setCategories(uniqueCategories)
      })
      .catch((error) => {
        console.log("Error while getting the movies", error);
      });
  }, []);
// top 5 movies
  return (

<div>
  <h1>categories</h1>
<div className="categories"> 
<ul> 
  {categories.map((category)=>(
    // <li key={category}>{category}</li>
    <li key={category}><Link to={`/categories/${category}`}>{category}</Link></li>
  ) )}
</ul>
</div>
      <div className="top-5-movies">
        {movies.length === 0 ? (
          <div> Loading... </div>
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                 <Link to={`/movies/${movie.id}`}> 
          <img src={movie.image} alt="movieimages"/>
          <h2>{movie.title}</h2>
          </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
  );
};

export default HomePage;
