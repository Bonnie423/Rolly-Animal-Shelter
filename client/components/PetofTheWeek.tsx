import React from 'react'

const PetofTheWeek = () => {
  return (
    <div className='week-pet-container'>
      <div className="week-pet-box">
        <img
          src="/images/dogs/dog1.jpg/"
          alt="a orange color dog"
          className="week-pet-img"
        ></img>
        <div className='week-pet-p'>
        <h4> ✧ Dog of the week</h4>
        <p>
          ​I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you
        </p>
        </div>
      </div>
      <div className="week-pet-box cat-week">
        <img src="/images/cats/cat8.jpg" alt="" className="week-pet-img" />
        <div className='week-pet-p'>
        <h4> ✧ Cat of the week</h4>
        <p>
          ​I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you
        </p>
        </div>
      </div>
    </div>
  )
}

export default PetofTheWeek
