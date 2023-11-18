import React, { useState } from 'react'
import { petDataType, petFormData } from '../Model/petData'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPetById } from '../apiClient/petListAPI'

const ShowPetInfo = ({
  name,
  age,
  breed,
  gender,
  image,
  category,
  id,
}: petFormData) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div
      className="image-wrapper"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img src={image} alt={name} className="adoption-img" />
      <Link to={`/adoptions/${id}`}>
        <div className={`image-info ${showInfo ? 'fade-in' : 'fade-out'}`}>
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Breed:</b>
            {breed}
          </p>

          <p>
            <b>Age:</b> {age}
          </p>
          <p>
            <b>Gender:</b>
            {gender}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ShowPetInfo
