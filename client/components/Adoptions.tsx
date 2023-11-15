import React, { useState } from 'react'
import { DogData } from '../Model/dogData'
import { useQueries, useQuery } from '@tanstack/react-query'
import { getPetImages } from '../apiClient/adoptionsAPI'

const Adoptions = () => {
  // const [pets, setPets]= useState<DogData | null>(null)

  const {
    data: petsData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['pets'],
    queryFn: getPetImages,
  })

  if (isLoading) {
    return <p>Loading pet images...</p>
  }

  if (isError) {
    return <p>Error loading pet data</p>
  }
  return (
    <div>
      <h2>
        <span className="red-text">✧ ✦Adoptions</span>
      </h2>
      <div className='adoption-box'>

      {petsData?.photos.map((pet) => {
        
        return <img src={pet.src.medium} alt={pet.alt} key={pet.id} className='adoption-img'></img>
      })}
      </div>
    </div>
  )
}

export default Adoptions
