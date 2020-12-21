import { useEffect, useState } from 'react'
import { WiUmbrella } from 'react-icons/wi'

import AtmosphereDisplay from './components/AtmosphereDisplay'
import DetailDisplay from './components/DetailDisplay'
import SearchBox from './components/SearchBox'
import TempDisplay from './components/TempDisplay'

const getPrecipitationType = weatherObj => {
  return weatherObj.rain ? 'Rain' : weatherObj.snow ? 'Snow' : 'none'
}

function App () {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(undefined)
  const [notFound, setNotFound] = useState(false)
  const [geoCoords, setGeoCoords] = useState(undefined)
  const [location, setLocation] = useState(undefined)

  useEffect(() => {
    if (geoCoords) {
      fetch(`/current?lat=${geoCoords.latitude}&lng=${geoCoords.longitude}`)
        .then(resp => resp.json())
        .then(({ data, status }) => {
          if (status === 'error') {
            setWeather(undefined)
            setNotFound(true)
          } else {
            setWeather(data.weather)
            setLocation(data.location)
            setNotFound(false)
          }
        })
        .catch(console.log)
    }
  }, [geoCoords])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geolocationSuccess, console.log)
  }, [])

  const geolocationSuccess = ({ coords }) => {
    setGeoCoords(coords)
  }

  return (
    <div className='bg-gradient-to-b from-blue-600 to-blue-300 min-h-screen min-w-max'>
      <header className='h-16 w-full flex'>
        <div>
          <h1 className='text-3xl text-blue-100 font-light uppercase tracking-widest inline'>
            umbrella
          </h1>
          <WiUmbrella className='text-4xl text-blue-100 mb-4 inline' />
        </div>
      </header>
      <main>
        <SearchBox onSubmit={setCity} />
        {weather && (
          <>
            <TempDisplay
              cityName={weather.name}
              time={weather.dt}
              temp={weather.main.temp}
              feelsLike={weather.main.feels_like}
            />

            <div className='pt-6 container mx-auto flex justify-center'>
              <div className='w-1/2 flex text-blue-100'>
                <AtmosphereDisplay
                  weather={weather.weather[0]}
                  clouds={weather.clouds}
                  wind={weather.wind}
                  precipitationType={getPrecipitationType(weather)}
                  precipitationAmount={weather.rain ?? weather.snow ?? 0}
                />
                <DetailDisplay
                  high={weather.main.temp_max}
                  low={weather.main.temp_min}
                  humidity={weather.main.humidity}
                  pressure={weather.main.pressure}
                />
              </div>
            </div>
          </>
        )}
        {notFound && (
          <div className='container mx-auto text-center'>
            <h2 className='text-2xl text-blue-100'>
              We're sorry, we could not locate that city.
            </h2>
            <h3 className='text-xl text-blue-100'>
              Please try your search again.
            </h3>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
