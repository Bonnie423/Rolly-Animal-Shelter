import { useQuery } from '@tanstack/react-query'

import { getPetById } from '../apiClient/petListAPI'
import CatofTheweek from './CatofTheweek'
import { Link } from 'react-router-dom'

const DogofTheWeek = () => {
  const dogId = 35
  const {
    data: pet,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['pets', dogId],
    queryFn: () => getPetById(Number(dogId)),
  })

  if (isLoading) {
    return <p>Loading pet info...</p>
  }

  if (isError) {
    return <p>Error loading pet data</p>
  }

  return (
    <div className="week-pet-container">
      <div className="week-pet-box">
      <Link to={`/adoptions/${dogId}`}>
        <img
          src={pet?.image}
          alt={pet?.name}
          className="week-pet-img"
        ></img>
        </Link>
        <div className="week-pet-p">
          <h4> ✧ Dog of the week</h4>
          <p>
            Name:
            {pet?.name}
          </p>
          <p>Age: {pet?.age}</p>
          <p>Gender: {pet?.gender}</p>
          <p>Breed: {pet?.breed}</p>
        </div>
      </div>
      {/* <div className="week-pet-box cat-week">
        <CatofTheweek />
      </div> */}
    </div>
  )
}

export default DogofTheWeek
