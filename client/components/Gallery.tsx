import React, { useState, useEffect } from 'react'
import Slide from './Slide'

const images = [
  '/images/mainSlides/cat1.jpg',
  '/images/mainSlides/brown-dog.jpg',
  '/images/mainSlides/cat.jpg',
]

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length)
  }
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length)
  }

  // useEffect(() => {
  //   const intervalId = setInterval(nextSlide, 3000)

  //   // Clear the interval when the component unmounts
  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // }, [currentSlide])

  return (
    <div className="image-gallery">
      <button onClick={prevSlide}>Previous</button>
      <Slide image={images[currentSlide]} />
      <button onClick={nextSlide}>Next</button>
    </div>
  )
}

export default Gallery
