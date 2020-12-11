import axios from 'axios'
import jsend from 'jsend'

const baseUrl = process.env.OPEN_WEATHER_URL
const apiKey = process.env.OPEN_WEATHER_API_KEY

export const getCurrentWeatherByCityName = async (req, res, next) => {
  const { name } = req.params

  try {
    const { data } = await axios.get(
      `${baseUrl}weather?q=${name}&appid=${apiKey}`
    )

    res.json(jsend.success(data))
  } catch (error) {
    res.json(jsend.error({ error }))
  }
}
