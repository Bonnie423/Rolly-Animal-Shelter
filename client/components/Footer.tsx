import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="site-footer">
      <button className="back-to-top-button" onClick={handleBackToTop}>
        Back to top
      </button>
      <p className="copyright">Copyright &copy; ✧2023 Rolly Animal Shelter</p>
      <br></br>
      <p style={{fontSize:'9PX', textAlign: 'right', paddingRight: '10px'}}>All the images used for this website are from https://pixabay.com</p>
    </footer>
  )
}

export default Footer
