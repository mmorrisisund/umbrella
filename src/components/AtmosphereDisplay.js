import React from 'react'

import { getIcon } from '../iconMap'

const getDirection = deg => {
  if (deg > 315 && deg <= 45) return 'N'
  if (deg > 45 && deg <= 135) return 'E'
  if (deg > 135 && deg <= 225) return 'S'
  if (deg > 225 && deg < 315) return 'W'
  return ''
}

const AtmosphereDisplay = ({
  weather,
  clouds,
  wind,
  precipitationType,
  precipitationAmount
}) => {
  const WeatherIcon = getIcon(weather.id)

  return (
    <div className='w-1/2'>
      <div className='h-16 flex items-center'>
        <WeatherIcon className='text-6xl text-blue-100 inline ' />
        <span className='text-4xl text-blue-100 capitalize'>
          {weather.description}
        </span>
      </div>
      <table className='table-fixed w-3/4'>
        <tbody>
          <tr>
            <td className='w-3/4'>Clouds</td>
            <td className='w-1/4'>{clouds.all}%</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>
              {Math.round(wind.speed)}m {getDirection(wind.deg)}
            </td>
          </tr>
          {precipitationType !== 'none' && (
            <tr>
              <td>{precipitationType}</td>
              <td>{precipitationAmount['1h']}mm</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AtmosphereDisplay
