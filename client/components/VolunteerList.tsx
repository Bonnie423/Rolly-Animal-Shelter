import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getVolunteerList } from '../apiClient/addVolunteerAPI'

const VolunteerList = () => {

  const {data:volunteer, isError, isLoading}=useQuery({
    queryKey:['volunteers'],
    queryFn: getVolunteerList
  })

  if (isError) {
    return <p>volunteers not found</p>
  }

  if (isLoading) {
    return <p>Loading...</p>

  }
  return (
    <div>VolunteerList</div>
  )
}

export default VolunteerList