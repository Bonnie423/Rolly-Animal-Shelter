import request from 'superagent'
import { DogData } from '../Model/dogData'
import { contactDataType } from '../Model/contactData'

export async function addAdoption(newAdoption: contactDataType) {
  const response = await request.post('/api/v1/adoptions').send(newAdoption)
 
  return response.body
}