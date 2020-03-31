import { Request, Response } from 'express'
import * as models from './models'

export const randMessage = async function (req: Request, res: Response) {
  const msg = models.randMessage()
  res
    .status(200)
    .json({ msg })
}