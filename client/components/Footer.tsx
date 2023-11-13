import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: adds smooth scrolling
    })
  }

  return (
    <footer className="site-footer">
      <button className="back-to-top-button" onClick={handleBackToTop}>
        Back to top
      </button>
      <p className="copyright">Copyright &copy; ✧2023 Rolly Animal Shelter</p>
    </footer>
  )
}

export default Footer
