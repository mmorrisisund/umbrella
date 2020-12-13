import React from 'react'
import { WiFahrenheit } from 'react-icons/wi'
import * as dayjs from 'dayjs'

const TempDisplay = ({ time, temp, feelsLike, cityName }) => {
  const timestamp = dayjs.unix(time).format('h:mma')
  return (
    <div className='pt-6 text-center'>
      <h2 className='text-blue-100 text-4xl'>{cityName}</h2>
      <h4 className='text-lg text-blue-100'>As of {timestamp}</h4>
      <div className='relative'>
        <h1 className='text-9xl text-blue-100 inline'>{Math.round(temp)}</h1>
        <WiFahrenheit className='text-blue-100 inline absolute t-0 r-0 mt-4 h-24 w-24' />
      </div>
      <span className='text-lg text-blue-100'>
        Feels Like: {Math.round(feelsLike)}&#176;
      </span>
    </div>
  )
}

export default TempDisplay
