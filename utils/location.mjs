import { Client } from '@googlemaps/google-maps-services-js'
const axios = require('axios')

const API_KEY = process.env.GOOGLE_API_KEY

async function getLocationByCoords (lat, lng) {
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=`
  )

  if (!data || data.status !== 'OK') {
    throw new HttpError(
      'No location could be found for the given address.',
      404
    )
  }

  return data.results[0].geometry.location
}

async function getLocationByName (name) {
  try {
  } catch (error) {}
}

function extractLocation () {}

module.exports = { getCoordsFromAddress }
