import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import adoptions from './routes/adoptions'

import volunteers from './routes/volunteers'
import contact from './routes/contact'


const server = express()



server.use(express.json())
server.use(cors('*' as CorsOptions))
server.use('/api/v1/adoptions', adoptions)
server.use('/api/v1/volunteers', volunteers)
server.use('/api/v1/contact', contact)


if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
