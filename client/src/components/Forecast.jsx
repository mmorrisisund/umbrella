import ForecastCard from './ForecastCard'

const Forecast = ({ forecast }) => {
  return (
    <section className='flex flex-col pb-5 mt-6 space-y-6 md:space-y-0 md:flex-row md:justify-evenly sm:px-16 xl:text-3xl'>
      <ForecastCard
        date={forecast[1].dt}
        high={forecast[1].temp.max}
        low={forecast[1].temp.min}
        description={forecast[1].weather[0].description}
        iconCode={forecast[1].weather[0].icon}
      />
      <ForecastCard
        date={forecast[2].dt}
        high={forecast[2].temp.max}
        low={forecast[2].temp.min}
        description={forecast[2].weather[0].description}
        iconCode={forecast[2].weather[0].icon}
      />
      <ForecastCard
        date={forecast[3].dt}
        high={forecast[3].temp.max}
        low={forecast[3].temp.min}
        description={forecast[3].weather[0].description}
        iconCode={forecast[3].weather[0].icon}
      />
      <ForecastCard
        date={forecast[4].dt}
        high={forecast[4].temp.max}
        low={forecast[4].temp.min}
        description={forecast[4].weather[0].description}
        iconCode={forecast[4].weather[0].icon}
      />
      <ForecastCard
        date={forecast[5].dt}
        high={forecast[5].temp.max}
        low={forecast[5].temp.min}
        description={forecast[5].weather[0].description}
        iconCode={forecast[5].weather[0].icon}
      />
    </section>
  )
}

export default Forecast
