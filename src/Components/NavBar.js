import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='nav-bar'>
    <Link to="/">Login Page</Link>
    <Link to="/home-page">Home</Link>
    <Link to="/todo-form">ToDo-Form</Link>
    
    </header>
  )
}

export default NavBar