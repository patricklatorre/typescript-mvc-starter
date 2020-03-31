const randInt = function (max: number) {
  max = Math.floor(max)
  return Math.floor(Math.random() * (max + 1))
}

export const responses = [
  'Hi!',
  'Hi there!',
  'Hey, API here',
  'API is up!',
]

export const randMessage = function () {
  return responses[randInt(3)]
}
