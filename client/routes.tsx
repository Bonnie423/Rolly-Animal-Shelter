import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Adoptions from './components/Adoptions'
import VolunteerPage from './components/VolunteerPage'
import Contact from './components/Contact'
import SinglePetInfo from './components/SinglePetInfo'
import PetCategory from './components/PetCategory'
import SignUp from './components/SignUp'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/adoptions" element={<Adoptions />} />
    <Route path="/adoptions/:petId" element={<SinglePetInfo />} />
    <Route path="/pets/:category" element={<PetCategory />} />
    <Route path="/volunteer" element={<VolunteerPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/sign-up" element={<SignUp />} />
  </Route>
)
