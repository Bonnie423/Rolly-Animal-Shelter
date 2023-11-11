import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'
import Gallery from './Gallery'

const Home = () => {
  return (
    <div>
      <Gallery />
      </div>
  )
}

export default Home