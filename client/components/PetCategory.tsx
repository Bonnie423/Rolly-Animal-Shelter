import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPetByCategory } from '../apiClient/petListAPI'
import ShowPetInfo from './ShowPetInfo'

const PetCategory = () => {
  const category = useParams().category
  const {
    data: pets,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['pets', category],
    queryFn: () => getPetByCategory(category as string),
  })
  

  if (isLoading) {
    return <p>Loading pet info...</p>
  }

  if (isError) {
    return <p>Error loading pet data</p>
  }

  return (
    <div>
      <div className="adoption-main">
        <div className="adoption-box">
          <h2>
            <span className="red-text heading">✧ ✦ Adoptable {category}s</span>
          </h2>

          <div className="adoption-img-box">
            {pets?.map((pet) => (
              <ShowPetInfo
                key={pet.name}
                image={pet.image}
                name={pet.name}
                breed={pet.breed}
                category={pet.category}
                age={pet.age}
                gender={pet.gender}
                id={pet.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetCategory
