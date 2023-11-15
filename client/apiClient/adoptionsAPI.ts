import request from 'superagent'
import { DogData } from '../Model/dogData'

export async function getPetImages(): Promise<DogData>  {
  const response = await request.get('/api/v1/adoptions')
  // console.log(response)
  
  return response.body
}