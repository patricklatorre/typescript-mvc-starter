import path from 'path'
import express from 'express'
import cors from 'cors'

import * as hello from './api/hello'

const app = express()

app.use(cors())
app.use(express.json())
app.use(
  express.static(path.join(__dirname, '../../client/dist/'))
)

/**
 * API
 */
app.get('/api/hello/', hello.index)

export default app
