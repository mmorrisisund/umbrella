import axios from 'axios'
import jsend from 'jsend'

const weatherUrl = process.env.OPEN_WEATHER_URL
const weatherApiKey = process.env.OPEN_WEATHER_API_KEY
const googleUrl = process.env.GOOGLE_API_URL
const googleApiKey = process.env.GOOGLE_API_KEY

export const getCurrentWeatherByCityName = async (req, res, next) => {
  const { name } = req.params

  try {
    const { data } = await axios.get(
      `${baseUrl}weather?q=${name}&units=imperial&&appid=${apiKey}`
    )

    res.json(jsend.success(data))
  } catch (error) {
    console.log(error)
    res.json(
      jsend.error({
        message: 'City could not be found.',
        code: error.response.status
      })
    )
  }
}

export const getCurrentWeather = async (req, res) => {
  const { lat, lng, city, state, name } = req.query

  if (lat && lng) {
    const data = await getDataByLatLng(lat, lng)

    res.json(jsend.success(data))
  }
}

async function getDataByLatLng (lat, lng) {
  try {
    const weatherPromise = axios.get(
      `${weatherUrl}weather?lat=${lat}&lon=${lng}&units=imperial&appid=${weatherApiKey}`
    )
    const locationPromise = axios.get(
      `${googleUrl}json?latlng=${lat},${lng}&key=${googleApiKey}`
    )
    const results = await Promise.all([weatherPromise, locationPromise])

    return processResults(results[0], results[1])
  } catch (error) {
    return {
      message: 'City could not be found.',
      code: error.response.status
    }
  }
}

function processResults (weatherResult, locationResult) {
  let result = {}

  if (weatherResult) result.weather = weatherResult.data
  if (locationResult) result.location = locationResult.data

  return result
}
