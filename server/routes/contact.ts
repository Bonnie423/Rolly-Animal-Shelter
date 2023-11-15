import express from 'express'
import request from 'superagent'
import * as db from '../db/db.js'


const router = express.Router()


router.post('/', async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = req.body

    const newSubmission = { name, email, phone_number: phoneNumber, message }

    const newContact = await db.addContact(newSubmission)
 
    if (!newContact) {
      res.status(404).json({ message: 'Submition falied' })
      return
    }
    res.status(200).json(newContact)
  } catch (err) {
    res.status(500).json({
      message: 'Something is wrong here, try again',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

export default router