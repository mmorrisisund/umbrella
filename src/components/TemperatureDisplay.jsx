import OpenWeatherIcon from './OpenWeatherIcon'

const TemperatureDisplay = ({ temperature, feelsLike, high, low, code }) => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <OpenWeatherIcon code={code} className='w-64 h-64 text-blue-100' />
      <span className='text-blue-100 text-8xl'>
        {Math.round(temperature)}&#176;
      </span>
      <span className='text-lg text-blue-100'>
        Feels like {Math.round(feelsLike)}&#176;
      </span>
      <div className='flex justify-between mt-8 space-x-20 text-4xl text-blue-100 xl:text-5xl'>
        <span className='text-red-700'>{Math.round(high)}&#176;</span>
        <span className='text-indigo-700'>{Math.round(low)}&#176;</span>
      </div>
    </section>
  )
}

export default TemperatureDisplay
