import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/categories" className='nav-item'>Categories</Link>
            <Link to="/about" className='nav-item'>About</Link>
            <Link to="/login" className='nav-item'>Login</Link>
        </nav>
    </>
  )
}

export default Navbar