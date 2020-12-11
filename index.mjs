import express from 'express'
import jsend from 'jsend'

const app = express()

app.use('/', (req, res) => res.json(jsend.success({ weather: 'sunny' })))

app.listen(3000, () => console.log('Connected on port 3000'))
