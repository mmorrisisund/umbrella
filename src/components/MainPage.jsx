import Forecast from './Forecast'
import LocationTitle from './LocationTitle'
import TemperatureDisplay from './TemperatureDisplay'

const MainPage = () => {
  return (
    <div>
      <main className='mt-2'>
        <LocationTitle />
        <TemperatureDisplay />
        <Forecast />
      </main>
    </div>
  )
}

export default MainPage
