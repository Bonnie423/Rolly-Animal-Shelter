import React from 'react'

interface Props{
  image: string
}

const Slide = ({image}:Props) => {
  return (
    <div className="slide">
      <img src={image} alt="a pet" className='slides-img' />
    </div>
  )
}

export default Slide