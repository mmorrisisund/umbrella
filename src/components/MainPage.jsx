import { useEffect, useState } from 'react'

import Forecast from './Forecast'
import LocationTitle from './LocationTitle'
import TemperatureDisplay from './TemperatureDisplay'

const MainPage = () => {
  const [location, setLocation] = useState()
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setCoords(coords),
      // ({ code }) => {}
      console.log
    )
  }, [])

  useEffect(() => {
    if (coords) {
      fetch(`api/?lat=${coords.latitude}&lng=${coords.longitude}`)
        .then(res => res.json())
        .then(({ data }) => {
          setWeather(data.weather)
          setLocation(data.location)
        })
        .catch(console.log)
    }
  }, [coords])

  return (
    <div>
      <main className='mt-2'>
        {location && <LocationTitle location={location} />}
        {weather && (
          <>
            <TemperatureDisplay
              temperature={weather.current.temp}
              feelsLike={weather.current.feels_like}
              high={weather.daily[0].temp.max}
              low={weather.daily[0].temp.min}
              code={weather.current.weather[0].icon}
            />
            <Forecast forecast={weather.daily} />
          </>
        )}
      </main>
    </div>
  )
}

export default MainPage
