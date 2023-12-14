import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPetById } from '../../apiClient/petListAPI'
import { Link } from 'react-router-dom'

const CatofTheweek = () => {
  const catId = 42
  const {
    data: pet,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['pets', catId],
    queryFn: () => getPetById(Number(catId)),
  })

  if (isLoading) {
    return <p>Loading pet info...</p>
  }

  if (isError) {
    return <p>Error loading pet data</p>
  }

  return (
    <div className="week-pet-container cat-of-week">
      <div className="week-pet-box">
        <Link to={`/adoptions/${catId}`}>
          <img src={pet?.image} alt={pet?.name} className="week-pet-img"></img>
        </Link>
        <div className="week-pet-p">
          <h4> ✧ Cat of the week</h4>
          <p>
            Name:
            {pet?.name}
          </p>
          <p>Age: {pet?.age}</p>
          <p>Gender: {pet?.gender}</p>
          <p>Breed: {pet?.breed}</p>
        </div>
      </div>
    </div>
  )
}

export default CatofTheweek
