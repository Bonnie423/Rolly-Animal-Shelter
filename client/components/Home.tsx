import { Link } from 'react-router-dom'
import Gallery from './homepage/Gallery.tsx'
import Volunteer from './homepage/Volunteer.tsx'

import DogGallery from './homepage/DogGallery.tsx'
import CatGallery from './homepage/CatGallery.tsx'
import CatofTheweek from './homepage/CatofTheweek.tsx'
import DogofTheWeek from './homepage/DogofTheWeek.tsx'

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
