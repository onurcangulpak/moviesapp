import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './MoviesPage.css'
import { Link } from 'react-router-dom'

const MoviesPage = () => {


const [movies,setMovies]= useState([])
// Get movies from db
useEffect(()=>{ 
  axios.get('http://localhost:5005/movies')
  .then(response=> { 
    setMovies(response.data)
  })
  .catch (error=> { 
    console.log("Error while getting the movies",error)
  })
},[])

// no movies loading
if (movies.length === 0) { 
  return <div>Loading...</div>;
}

  return (
    <div className='movies-list'>
    <h1>Movies List</h1>
    <div  className='movies-container'> 
    <ul className='movies-ul'> 
      {movies.map(movie => (
        <li key={movie.id}> 
        <Link to={`/movies/${movie.id}`}> 
          <img src={movie.image} alt="movieimages"/>
          <h2>{movie.title}</h2>
          </Link>
        </li>
      ))}
    </ul>67
    </div>
  </div>
  )
}

export default MoviesPage