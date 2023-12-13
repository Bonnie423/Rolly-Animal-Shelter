import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUser } from 'react-icons/fa'

const Nav = () => {
  const { loginWithRedirect } = useAuth0()
  const { logout } = useAuth0()
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

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
      <div className="nav-box">
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
      <div>
        <div className='user-icon'>
          <FaUser />
        </div>
        <button onClick={() => loginWithRedirect()}>
          {isAuthenticated ? user?.nickname : 'Log in'}
        </button>
      </div>
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log out
        </button>
      ) : (
        <Link to="/sign-up">
          <button>Sign up</button>
        </Link>
      )}
    </div>
  )
}

export default Nav
