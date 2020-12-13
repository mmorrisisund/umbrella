import React from 'react'
import { WiFahrenheit } from 'react-icons/wi'

const TempDisplay = () => {
  return (
    <div className='pt-6 text-center'>
      <h2 className='text-blue-100 text-4xl'>Des Moines, IA</h2>
      <h4 className='text-lg text-blue-100'>Time 4:18pm</h4>
      <div className='relative'>
        <h1 className='text-9xl text-blue-100 inline'>32</h1>
        <WiFahrenheit className='text-blue-100 inline absolute t-0 r-0 mt-4 h-24 w-24' />
      </div>
      <span className='text-lg text-blue-100'>Feels Like: 30&#176;</span>
    </div>
  )
}

export default TempDisplay
