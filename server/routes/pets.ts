import express from 'express'
import request from 'superagent'
import * as db from '../db/db.js'
import { petDataType } from '../../client/Model/petData.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const pets = await db.getAllPets()
    res.json(pets)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get pets')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const petId = Number(req.params.id)
    const pet = await db.getPetById(petId)

    res.json(pet)
  } catch (err) {
    console.log(err)
    res.status(500).send('Pet not found')
  }
})


export default router
