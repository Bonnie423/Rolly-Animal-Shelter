import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Adoptions from './components/adoptionPage/Adoptions'
import VolunteerPage from './components/volunteerPage/VolunteerPage'
import Contact from './components/contactPage/Contact'
import SinglePetInfo from './components/adoptionPage/SinglePetInfo'
import PetCategory from './components/adoptionPage/PetCategory'
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
