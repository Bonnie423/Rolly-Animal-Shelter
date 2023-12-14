import React, { useState, useEffect, useRef } from 'react'
import Slide from './Slide'
import DisplaySlogan from './DisplaySlogan'

const images = [
  // '/images/mainSlides/cat4.jpg',
  '/images/mainSlides/cat.jpg',
  '/images/mainSlides/dog.jpg',
]

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timeoutRef = useRef(null)

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length)
  }
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length)
  }

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    const intervalId = setInterval(nextSlide, 4000)

    return () => {
      clearInterval(intervalId)
    }
  }, [currentSlide])

  return (
    <div className="main-box">
      <div className="image-gallery">
        <div
          className="image-gallery-container"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <Slide
              key={index}
              image={image}
              className={index === currentSlide ? 'active' : ''}
            />
          ))}
        </div>
      </div>
      <DisplaySlogan />
    </div>
  )
}

export default Gallery
