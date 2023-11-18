import request from 'superagent'
import { petDataType, petFormData } from '../../client/Model/petData.js'

export async function getAllPets() {
  const response = await request.get('/api/v1/pets')

  return response.body as petFormData[]
}

export async function getPetById(petId: number) {
  // console.log(petId)
  const response = await request.get(`/api/v1/pets/${petId}`)
// console.log(response.body.pet)
  return response.body as petFormData
}

export async function getPetByCategory(category: string) {
  // console.log(category)

  const response = await request.get(`/api/v1/adoptions/${category}`)
// console.log(response.body)
  return response.body as petFormData[]
}

