import 'dotenv/config.js'
import path from 'path'
import express from 'express'
import morgan from 'morgan'

import apiRoutes from './routes/api.mjs'

const app = express()
app.use(morgan('dev'))
app.use(express.static(path.join(process.cwd(), 'client', 'build')))
app.use('/api', apiRoutes)
app.use('/', (req, res) =>
  res.sendFile(path.join(process.cwd(), 'client', 'build', 'index.html'))
)

let port = process.env.PORT
if (port == null || port == '') {
  port = 8000
}
app.listen(port, () => console.log(`Connected on port ${port}`))
