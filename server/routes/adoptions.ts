import express from 'express'
import request from 'superagent'
import * as db from '../db/db.js'
import 'dotenv/config'
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = req.body

    const newSubmission = { name, email, phone_number: phoneNumber, message }

    const newAdoption = await db.addAdoption(newSubmission)

    if (!newAdoption) {
      res.status(404).json({ message: 'Submition falied' })
      return
    }
    res.status(200).json(newAdoption)
  } catch (err) {
    res.status(500).json({
      message: 'Something is wrong here, try again',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

router.get('/:category', async (req, res) => {
  try {
    const petCategory = req.params.category

    const pet = await db.getPetByCategory(petCategory)
    // console.log(pet)

    res.json(pet)
  } catch (err) {
    console.log(err)
    res.status(500).send('Pet not found')
  }
})

export default router
