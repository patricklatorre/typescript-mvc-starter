import app from './server'

const log = console.log

// Sanitize env vars
const {
  PORT: port = 8080,
} = process.env

app.listen(port, () => log(`Running at http://localhost:${port}`))
