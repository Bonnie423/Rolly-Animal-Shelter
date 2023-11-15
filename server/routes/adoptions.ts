import express from 'express'
import request from 'superagent'

import 'dotenv/config'
const router = express.Router()


router.get('/', async (req, res) => {
  const response = await request
    .get('https://api.pexels.com/v1/search?query=dog')
    .set('Authorization', `${process.env.PETDB_API_TOKEN}`)

  // console.log(response.body.photos)
  res.json(response.body)
})

export default router