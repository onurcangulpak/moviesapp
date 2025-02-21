import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchBox from "./SearchBox";

const NavBar = () => {
  const [searchMovies, setSearchMovies] = useState("");

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/allmovies"> All Movies</Link>
        </li>
        <li>
          {" "}
          <Link to="/aboutus"> About Us </Link>
        </li>
      </ul>
      <div className="hp-searchbox">
        <SearchBox
          searchMovies={searchMovies}
          setSearchMovies={setSearchMovies}
        />
      </div>
    </nav>
  );
};

export default NavBar;
