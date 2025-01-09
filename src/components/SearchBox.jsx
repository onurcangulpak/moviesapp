import React from "react";
import { useNavigate } from "react-router-dom";


const SearchBox = ({ searchMovies, setSearchMovies }) => {
  /// handlesearchclick
  const navigate = useNavigate();

  const handleSearchClick = () => {
    const trimmedQuery = searchMovies.trim();
    if (trimmedQuery !== "") {
      navigate(`/search/${trimmedQuery}`);
    }
  };
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchMovies}
        onChange={(e) => setSearchMovies(e.target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBox;
