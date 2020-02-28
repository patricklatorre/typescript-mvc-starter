import { Request, Response } from "express";

const responses = [
  'Hi!',
  'Hi there!',
  'Hey, API here',
  'API is up!',
]

function randInt(max: number) {
  max = Math.floor(max)
  return Math.floor(Math.random() * (max + 1))
}

function randMessage() {
  return responses[randInt(3)]
}

export const index = async (req: Request, res: Response) => {
  res
    .status(200)
    .json({ msg: randMessage() })
}