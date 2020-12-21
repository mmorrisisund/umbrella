import { Router } from 'express'
import { getCurrentWeather } from '../controllers/current.mjs'

import { getCurrentWeatherByCityName } from '../controllers/current.mjs'

const router = Router()

// router.get('/:name', getCurrentWeatherByCityName)
router.get('/', getCurrentWeather)

export default router
