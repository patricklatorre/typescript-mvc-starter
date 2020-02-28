import path from 'path'
import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(
  express.static(path.join(__dirname, '../../client/dist/'))
)

app.get('/', (req: Request, res: Response) => {
  res.write('<h1>Hello world!</h1>')
})

export default app
