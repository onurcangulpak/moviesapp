import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import AboutUs from './pages/AboutUs';
import OneMovie from './pages/OneMovie';


function App() {

  return (

<>
<Router> 
<NavBar/> 
<Routes> 
      <Route path='/' element={<HomePage/>}/> 
      <Route path='/allmovies' element={<MoviesPage/>}/> 
      <Route path='/movies/:id' element={<OneMovie/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/> 


</Routes>
</Router>
</>
  )
}

export default App
