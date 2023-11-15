import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="header">
      <div className="logo-box">
        <img
          src="/images/logoImage/logo.webp"
          alt="cat logo"
          className="logo"
        ></img>
        <div className="header-text">
          <h2>Rolly</h2>
          <h2>Animal Shelter</h2>
        </div>
      </div>
      <div className='nav-box'>
        <Link to="/">
          <button className="nav-button">Home</button>
        </Link>
        <Link to="/adoptions">
          <button className="nav-button">Adoption</button>
        </Link>
        <Link to="/volunteer">
          <button className="nav-button">Volunteer</button>
        </Link>
        <Link to="/contact">
          <button className="nav-button">Contact Us</button>
        </Link>
      </div>
    </div>
  )
}

export default Nav
