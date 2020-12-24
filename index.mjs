import 'dotenv/config.js'
import express from 'express'
import jsend from 'jsend'
import morgan from 'morgan'

import apiRoutes from './routes/api.mjs'

const app = express()
app.use(morgan('dev'))

app.use('/api', apiRoutes)
app.use('/', (req, res) => res.json(jsend.success({ weather: 'sunny' })))

app.listen(3001, () => console.log('Connected on port 3001'))
