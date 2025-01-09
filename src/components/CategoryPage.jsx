import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    <div>
      <h1>{categoryName}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movies) => (
              <li key={movies.id}>
                <Link to={`/movies/${movies.id}`}>
                  {" "}
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
  );
};

export default CategoryPage;
