import dayjs from 'dayjs'
import { WiDaySunnyOvercast } from 'react-icons/wi'

const ForecastCard = ({ date, high, low, description }) => {
  return (
    <article className='flex items-center justify-between px-8 text-lg font-semibold text-blue-100 xl:text-2xl md:flex-col'>
      <span>{dayjs.unix(date).format('dddd')}</span>
      <div className='flex items-center justify-between md:flex-col-reverse md:mt-2'>
        <span className='md:mt-2'>
          {Math.round(high)} / {Math.round(low)}
        </span>
        <div className='ml-2 md:ml-0'>
          <WiDaySunnyOvercast className='w-10 h-10' />
        </div>
      </div>
    </article>
  )
}

export default ForecastCard
