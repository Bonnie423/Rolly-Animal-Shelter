import React, { useState, useEffect, useRef } from 'react'
import DogSlides from './DogSlides'

// type PropType = {
//   slides: number[]
//   options?: EmblaOptionsType
// }

const imagesData = [
  '/images/dogs/dog2.jpg',
  '/images/dogs/dog3.jpg',
  '/images/dogs/dog4.jpg',
  '/images/dogs/dog6.jpg',
]

const DogGallery = () => {
  const [images, setImages] = useState(imagesData)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = images.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > images.length - 1) {
      setIndex(0)
    }
  }, [index, images])

  useEffect(() => {
    const intervalId = setInterval(() => setIndex(index + 1), 3000)
    return () => {
      clearInterval(intervalId)
    }
  }, [index])

  return (
    <div>
    <div className="pet-gallery dog-gallery">
      {images.map((image, petIndex) => {
       let position = 'nextSlide'
        if (petIndex === index) {
          position = 'activeSlide'
        }
        if (
          petIndex === index - 1 ||
          (index === 0 && petIndex === images.length - 1)
        ) {
          position = 'lastSlide'
        }

        return (
          <article key={petIndex} className={`pet-slide ${position}`}>
            <img src={image} alt="a pet slide" className="pet-slide-img"></img>
          </article>
        )
      })}
    </div>
        <h2 className='adoptable-pet'>✧ Adoptable dogs</h2>
    </div>
  )
}

export default DogGallery
