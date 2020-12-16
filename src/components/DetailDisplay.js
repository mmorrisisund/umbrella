import React from 'react'

const DetailDisplay = ({ high, low, humidity, pressure }) => {
  return (
    <div className='w-1/2'>
      <div className='h-16 flex items-center'>
        <span className='text-4xl text-blue-100'>Details</span>
      </div>
      <table className='table-fixed w-3/4'>
        <tbody>
          <tr>
            <td className='w-3/4'>High</td>
            <td className='w-1/4'>{Math.round(high)}&#176;</td>
          </tr>
          <tr>
            <td>Low</td>
            <td>{Math.round(low)}&#176;</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{humidity}%</td>
          </tr>
          <tr>
            <td>Air Pressure</td>
            <td>{pressure}hPa</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DetailDisplay
