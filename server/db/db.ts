import knexfile from './knexfile.js'
import knex from 'knex'
import {
  VolunteerDataType,
  VolunteerData,
} from '../../client/Model/volunteer.js'
import { contactDataType } from '../../client/Model/contactData.js'

const db = knex(knexfile.development)

export async function getVolunteerList() {
  await db('volunteers').select('*')
}

export async function addVolunteers(
  newVlunteer: VolunteerDataType
): Promise<VolunteerData[]> {
  const [result] = await db('volunteers')
    .insert(newVlunteer)
    .returning([
      'id',
      'name',
      'email',
      'phone_number as phoneNumber',
      'message',
    ])

  return result
}

export async function addContact(newContact: contactDataType) {
  const [result] = await db('contact')
    .insert(newContact)
    .returning([
      'id',
      'name',
      'email',
      'phone_number as phoneNumber',
      'message',
    ])

  return result
}
