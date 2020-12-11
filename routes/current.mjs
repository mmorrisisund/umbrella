import { Router } from 'express'

import { getCurrentWeatherByCityName } from '../controllers/current.mjs'

const router = Router()

router.get('/:name', getCurrentWeatherByCityName)

export default router
