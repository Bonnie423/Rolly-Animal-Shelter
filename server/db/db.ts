import knexfile from './knexfile.js'
import knex from 'knex'
import { VolunteerData, FormType } from '../../client/Model/volunteer.js'
import { contactFormType } from '../../client/Model/contactData.js'
import { petFormData } from '../../client/Model/petData.js'
import { User, UserSnakeCase } from '../../client/Model/userType.js'
import connection from './connection.ts'


const db = connection

export async function getVolunteerList() {
  await db('volunteers').select('*')
}

export async function addVolunteers(
  newVlunteer: FormType
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

export async function addContact(newContact: contactFormType) {
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

export async function getAllPets(): Promise<petFormData[]> {
  const pets = await db('pets').select('*')
  return pets
}

export async function getPetById(petId: number): Promise<petFormData[]> {
  const pet = await db('pets').where('id', petId).select('*').first()
  return pet
}

export async function addAdoption(newAdoption: FormType) {
  const [result] = await db('adoption')
    .insert(newAdoption)
    .returning([
      'id',
      'name',
      'email',
      'phone_number as phoneNumber',
      'message',
    ])

  return result
}

export async function getPetByCategory(
  category: string
): Promise<petFormData[]> {
  const pets = await db('pets')
    .where('category', category)
    .select('*')

    .returning('*')

  return pets
}

export async function addUser(newUser: UserSnakeCase) {
  const result = await db('users')
    .insert(newUser)
    .returning([
      'id',
      'auth0_id as auth0Id',
      'username',
      'full_name as fullName',
      'location',
      'image',
    ])
  console.log('line 15', result)
  return result
}

export async function getAllProfiles(): Promise<User[]> {
  const users = await db('users').select([
    'id',
    'auth0_id as auth0Id',
    'username',
    'full_name as fullName',
    'location',
    'image',
  ])
  return users
}
