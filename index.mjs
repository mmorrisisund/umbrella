import 'dotenv/config.js'
import express from 'express'
import jsend from 'jsend'

import currentWeatherRoutes from './routes/current.mjs'

const app = express()

app.use('/current', currentWeatherRoutes)
app.use('/', (req, res) => res.json(jsend.success({ weather: 'sunny' })))

app.listen(3000, () => console.log('Connected on port 3000'))
