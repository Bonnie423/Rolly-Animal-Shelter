import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'
import Gallery from './Gallery'
import Volunteer from './Volunteer.tsx'
import PetofTheWeek from './PetofTheWeek.tsx'
import DogGallery from './DogGallery.tsx'
import CatGallery from './CatGallery.tsx'

const Home = () => {
  return (
    <div>
      <Gallery />
      <div className="second-main">
        <Volunteer />
        <PetofTheWeek />
      </div>
      <div className="pet-gallery-box">
        <DogGallery />
        <CatGallery />
      </div>
    </div>
  )
}

export default Home
