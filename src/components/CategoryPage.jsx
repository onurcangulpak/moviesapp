import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";

const CategoryPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5005/movies")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, "error while fetching movies");
        setLoading(false);
      });
  }, []);

  const filteredMovies = movies
    .filter((movie) => movie.categories.includes(categoryName))
    .sort((a, b) => a.title.localeCompare(b.title));
  
  
  
    return (
    <div className="app-container"> 
    <NavBar/>
    <div className="splinter-contact-us"></div>

    <div className="movie-container">
      <h1>{categoryName}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
       
        <ul className="movies-general">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movies) => (
              <li key={movies.id}> 
              <Link to={`/movies/${movies.id}`}> 
                <img src={movies.image} alt="movieimages"/>
                <h2>{movies.title}</h2>
                </Link>
              </li>
            ))
          ) : (
            <p>No movies found in {categoryName}.</p>
          )}
        </ul>
       
      )}
    </div>
    </div>
  );
};

export default CategoryPage;
