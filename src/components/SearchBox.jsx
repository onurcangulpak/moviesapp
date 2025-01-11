import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBox.css"


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
      <button className="search-box-button" onClick={handleSearchClick}> 
        <img src="../src/assets/images/search.png"/>
      </button>
    </div>
  );
};

export default SearchBox;
