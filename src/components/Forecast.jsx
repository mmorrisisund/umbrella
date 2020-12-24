import ForecastCard from './ForecastCard'

const Forecast = () => {
  return (
    <section className='flex flex-col pb-5 space-y-6 md:space-y-0 md:flex-row md:justify-evenly sm:px-16 xl:text-3xl'>
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
    </section>
  )
}

export default Forecast
