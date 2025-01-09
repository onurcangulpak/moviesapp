import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  //   const [categories, setCategories] = useState([
  //   "Action", "Fantasy", "Drama", "Romance", "Science Fiction", "Adventure",
  //   "Horror", "Thriller", "Comedy", "Crime", "Mastery", "History", "Animation",
  //   "Family", "Biography", "Mystery", "Western", "Music", "War"
  // ]);
  const [categories, setCategories] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");
  const navigate = useNavigate()

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

  ///filtering movies by search inpout

  const filteredMoviesToSearch = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchMovies.toLowerCase())
  );

/// handlesearchclick 

const handleSearchClick =()=> { 
  const trimmedQuery = searchMovies.trim()
  if(trimmedQuery !== "") { 
    navigate(`/search/${trimmedQuery}`)
  }
}


  // top 5 movies
  return (
    <div className="home-page-out-container">
      <div className="categories">
        <h1>categories</h1>
        <ul>
          {categories.map((category) => (
            // <li key={category}>{category}</li>
            <li key={category}>
              <Link to={`/categories/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchMovies}
          onChange={(e) => setSearchMovies(e.target.value)}
      
        />
        <button onClick={handleSearchClick}></button>
      </div>
      <div className="top-5-movies">
        {movies.length === 0 ? (
          <div> Loading... </div>
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <img src={movie.image} alt="movieimages" />
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
