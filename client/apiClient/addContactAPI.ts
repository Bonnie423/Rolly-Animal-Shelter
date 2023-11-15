import request from 'superagent'

import { contactDataType } from '../Model/contactData.js'

// export async function getVolunteerList() {
//   const response = await request.get('/api/v1/volunteers')
//   return response.body
// }

export async function addContact(newContact: contactDataType) {
  const response = await request.post('/api/v1/contact').send(newContact)
 
  return response.body
}
