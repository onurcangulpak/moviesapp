import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css";

const NavBar = () => {
  return (
 <nav className='nav-bar'> 

    <ul> 
        <li> 
           <Link to="/"> Home</Link> 
        </li>
        <li> 
        <Link to="/allmovies"> Movies</Link>
        </li>
        <li> <Link to="/aboutus"> About Us </Link>

        </li>
    </ul>
 </nav>
  )
}

export default NavBar
