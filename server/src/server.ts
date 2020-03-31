import path from 'path'
import express from 'express'
import http from 'http'

import apiRoutes from './api/routes'

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(
  express.static(path.join(__dirname, '../../client/dist/'))
)

app.use('/api', apiRoutes)

export default server
