import path from 'path'
import express from 'express'
import http from 'http'

import * as hello from './api/hello'

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(
  express.static(path.join(__dirname, '../../client/dist/'))
)

// API routes
app.get('/api/hello/', hello.index)

export default server
