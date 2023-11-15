import request from 'superagent'
import { contactDataType, contactData } from '../../client/Model/contactData.js'

export async function getVolunteerList() {
  const response = await request.get('/api/v1/volunteers')
  return response.body
}

export async function addVolunteers(newVolunteer: contactDataType) {
  const response = await request.post('/api/v1/volunteers').send(newVolunteer)

  return response.body
}
