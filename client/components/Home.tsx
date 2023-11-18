import { Link } from 'react-router-dom'
import Gallery from './Gallery'
import Volunteer from './Volunteer.tsx'

import DogGallery from './DogGallery.tsx'
import CatGallery from './CatGallery.tsx'
import CatofTheweek from './CatofTheweek.tsx'
import DogofTheWeek from './DogofTheWeek.tsx'

const Home = () => {
  return (
    <div>
      <Gallery />
      <div className="second-main">
        <Volunteer />
        <div>
          <DogofTheWeek />

          <CatofTheweek />
        </div>
      </div>
      <div className="pet-gallery-box">
        <DogGallery />
        <CatGallery />
      </div>
    </div>
  )
}

export default Home
