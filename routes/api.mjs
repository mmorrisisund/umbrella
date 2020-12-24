import { Router } from 'express'
import { getCurrentWeather } from '../controllers/api.mjs'

import { getCurrentWeatherByCityName } from '../controllers/api.mjs'

const router = Router()

// router.get('/:name', getCurrentWeatherByCityName)
router.get('/', getCurrentWeather)

export default router
