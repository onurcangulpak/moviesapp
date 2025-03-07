import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import AboutUs from "./pages/AboutUs";
import OneMovie from "./pages/OneMovie";
import NotFound from "./pages/NotFound";
import CategoryPage from "./components/CategoryPage";
import SearchedMovies from "./pages/SearchedMovies";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allmovies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<OneMovie />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="*" element={<NotFound />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
          <Route path="/search/:query" element={<SearchedMovies />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
