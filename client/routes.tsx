import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home  from './components/Home'
import Adoptions from './components/Adoptions'
import VolunteerPage from './components/VolunteerPage'
import Contact from './components/Contact'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/adoptions' element={<Adoptions />} />
    <Route path='/volunteer' element={<VolunteerPage />} />
    <Route path='/contact' element={<Contact />} />

  </Route>
)
