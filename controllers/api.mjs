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
    const [weatherResult, locationResult] = await Promise.all([
      weatherPromise,
      locationPromise
    ])

    let data = {}
    if (weatherResult) data.weather = weatherResult.data
    if (locationResult) data.location = extractLocation(locationResult.data)

    return data
  } catch (error) {
    return {
      message: 'City could not be found.',
      code: error.response.status
    }
  }
}

function extractLocation (geocodeResp) {
  return geocodeResp.results[0]?.address_components?.reduce(
    (location, component) => {
      if (component.types[0] === 'locality')
        location.city = component.short_name
      if (component.types[0] === 'administrative_area_level_1')
        location.state = component.short_name
      if (component.types[0] === 'country')
        location.country = component.short_name
      return location
    },
    {}
  )
}
