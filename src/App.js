import { HiOutlineSearch } from 'react-icons/hi'
import { WiDaySunnyOvercast, WiFahrenheit } from 'react-icons/wi'

import './App.css'

function App () {
  return (
    <div className='bg-gradient-to-b from-blue-600 to-blue-300 min-h-screen min-w-max'>
      <header className='h-16 border-b border-blue-900'>
        <h1>umbrella</h1>
      </header>
      <div className='container mx-auto flex justify-center'>
        <form className='mx-auto mt-4 w-1/2'>
          <label className='block'>
            <span className='text-blue-100 text-2xl tracking-wide'>
              Enter a city
            </span>
            <div className='relative'>
              <input
                type='text'
                className='mt-3 w-full block rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                placeholder='New York'
              />
              <button
                type='submit'
                className='absolute top-0 right-0 mt-2 mr-2'
              >
                <HiOutlineSearch className='text-gray-400 h-6 w-6' />
              </button>
            </div>
          </label>
        </form>
      </div>

      <div className='pt-6 text-center'>
        <h2 className='text-blue-100 text-4xl'>Des Moines, IA</h2>
        <h4 className='text-lg text-blue-100'>Time 4:18pm</h4>
        <div className='relative'>
          <h1 className='text-9xl text-blue-100 inline'>32</h1>
          <WiFahrenheit className='text-blue-100 inline absolute t-0 r-0 mt-4 h-24 w-24' />
        </div>
        <span className='text-lg text-blue-100'>Feels Like: 30&#176;</span>
      </div>

      <div className='pt-6 container mx-auto flex justify-center'>
        <div className='w-1/2 flex text-blue-100'>
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

          <div className='w-1/2'>
            <div className='h-16 flex items-center'>
              <span className='text-4xl text-blue-100'>Details</span>
            </div>
            <table className='table-fixed w-3/4'>
              <tbody>
                <tr>
                  <td className='w-3/4'>High</td>
                  <td className='w-1/4'>38&#176;</td>
                </tr>
                <tr>
                  <td>Low</td>
                  <td>26&#176;</td>
                </tr>
                <tr>
                  <td>Humidity</td>
                  <td>13%</td>
                </tr>
                <tr>
                  <td>Air Pressure</td>
                  <td>984hPa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
