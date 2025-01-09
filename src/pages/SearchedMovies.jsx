import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchedMovies = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/movies")
      .then((response) => {
        const filteredMovies = response.data.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLocaleLowerCase())
        );
        setMovies(filteredMovies);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, "Error while fetching [Searched movies]");
        setLoading(false);
      });
  }, [query]);

  return (
    <div>
      <h1>Search results for "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <li key={movie.id}>
                <h2>{movie.title}</h2>
              </li>
            ))
          ) : (
            <p>No movies found matching "{query}" </p>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchedMovies;
