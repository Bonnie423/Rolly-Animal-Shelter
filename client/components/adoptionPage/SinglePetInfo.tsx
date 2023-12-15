import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getPetById } from '../../apiClient/petListAPI'
import { useParams } from 'react-router'
import { petFormData } from '../../Model/petData'
import AdoptionForm from './AdoptionForm'
import { useAuth0 } from '@auth0/auth0-react'

const SinglePetInfo = () => {
  const [showForm, setShowForm] = useState(false)
  const { petId } = useParams()
  const { isAuthenticated } = useAuth0()

  const {
    data: pet,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['pets', petId],
    queryFn: () => getPetById(Number(petId)),
  })

  if (isLoading) {
    return <p>Loading pet info...</p>
  }

  if (isError) {
    return <p>Error loading pet data</p>
  }

  return (
    <div className="pet-into-container">
      <div className="pet-intro-box">
        <div>
          <img src={pet?.image} alt={pet?.name} className="pet-intro-img"></img>
        </div>
        <div className="pet-details">
          <p>
            Hi, My name is <span className="pet-intro-text">{pet?.name}</span>,
            I am <span className="pet-intro-text">{pet?.age}</span> years old
            now, a member of the{' '}
            <span className="pet-intro-text">{pet?.breed}</span> family and I am{' '}
            <span className="pet-intro-text">{pet?.gender}.</span>
          </p>
          <br></br>
          <p>
            Could you <span className="pet-intro-text">please</span> take me
            home and let me be part of your family?
          </p>
          <br></br>
          <br></br>
          <button
            className="submit-btn"
            onClick={() => {
              isAuthenticated
                ? setShowForm(!showForm)
                : alert('Please log in first')
            }}
          >
            {pet?.gender === 'Female' ? 'Take her home' : 'Take him home'}
          </button>
          {showForm && <AdoptionForm />}
        </div>
      </div>
    </div>
  )
}

export default SinglePetInfo
