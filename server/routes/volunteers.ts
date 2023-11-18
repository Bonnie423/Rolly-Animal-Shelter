import express from 'express'
import request from 'superagent'
import * as db from '../db/db.js'
import {
  VolunteerDataType,
  VolunteerData,
  volunteerFormType
} from '../../client/Model/volunteer.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const volunteers = await db.getVolunteerList()
    res.json(volunteers)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get volunteers')
  }
})

router.post('/', async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = req.body 

    const newSubmission: volunteerFormType = { name, email, phone_number: phoneNumber, message }

    const newVolunteer = await db.addVolunteers(newSubmission)
  
    if (!newVolunteer) {
      res.status(404).json({ message: 'Submition falied' })
      return
    }
    res.status(200).json(newVolunteer)
  } catch (err) {
    res.status(500).json({
      message: 'Something is wrong here, try again',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

export default router
