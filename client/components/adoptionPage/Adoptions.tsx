import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getAllPets } from '../../apiClient/petListAPI'
import ShowPetInfo from './ShowPetInfo'



const Adoptions = () => {
  const [selectCategory, setSelectCategory] = useState('')
  const {
    data: petsData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['pets'],
    queryFn: getAllPets,
  })

  const filteredPets = petsData?.filter((pet) =>
    selectCategory === 'All' || selectCategory === ''
      ? true
      : pet.category === selectCategory
  )

  if (isLoading) {
    return <p>Loading pet images...</p>
  }

  if (isError) {
    return <p>Error loading pet data</p>
  }

  return (
    <div>
      <div className="adoption-main">
        <div className="adoption-box">
          <h2>
            <span className="red-text heading">✧ ✦Adoptions</span>
          </h2>
          <div className="search-img-box">
            <form className="pet-filter-form">
              <label htmlFor="pet" className="pet-filter-label">
                Pets Filter
              </label>
              <select
                name="pet"
                id=""
                className="pet-select"
                onChange={(e) => {
                  setSelectCategory(e.target.value)
                }}
                value={selectCategory}
              >
                <option value="">--Please choose an option--</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
                <option value="All">All</option>
              </select>
            </form>

            <div className="adoption-img-box">
              {filteredPets?.map((pet) => (
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
    </div>
  )
}

export default Adoptions
