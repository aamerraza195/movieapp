import React from 'react'
import './Navbar.css'
import logo from '../../images/Logo.png'

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <img className="logo" src={logo} alt="LOGO" />
        </li>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Categories">Categories</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li
          onClick={() => {
            props.movieAddBtn()
          }}
        >
          Add Movie
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
