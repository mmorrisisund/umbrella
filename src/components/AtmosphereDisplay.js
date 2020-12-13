import React from 'react'
import { WiDaySunnyOvercast } from 'react-icons/wi'

const AtmosphereDisplay = () => {
  return (
    <div className='w-1/2'>
      <div className='h-16 flex items-center'>
        <WiDaySunnyOvercast className='text-6xl text-blue-100 inline' />
        <span className='text-4xl text-blue-100'>Few Clouds</span>
      </div>
      <table className='table-fixed w-3/4'>
        <tbody>
          <tr>
            <td className='w-3/4'>Clouds</td>
            <td className='w-1/4'>11%</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>4m N</td>
          </tr>
          <tr>
            <td>Rain</td>
            <td>0mm</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AtmosphereDisplay
