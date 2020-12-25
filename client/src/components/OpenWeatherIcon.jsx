import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayFog,
  WiDayRain,
  WiDayShowers,
  WiDaySnow,
  WiDaySunny,
  WiDayThunderstorm,
  WiNightAltCloudy,
  WiNightAltPartlyCloudy,
  WiNightAltRain,
  WiNightAltShowers,
  WiNightAltSnow,
  WiNightAltThunderstorm,
  WiNightClear,
  WiNightFog
} from 'react-icons/wi'

const ICON_SET = {
  '01d': <WiDaySunny className='w-full h-full' />,
  '02d': <WiDayCloudy className='w-full h-full' />,
  '03d': <WiCloud className='w-full h-full' />,
  '04d': <WiCloudy className='w-full h-full' />,
  '09d': <WiDayShowers className='w-full h-full' />,
  '10d': <WiDayRain className='w-full h-full' />,
  '11d': <WiDayThunderstorm className='w-full h-full' />,
  '13d': <WiDaySnow className='w-full h-full' />,
  '50d': <WiDayFog className='w-full h-full' />,
  '01n': <WiNightClear className='w-full h-full' />,
  '02n': <WiNightAltPartlyCloudy className='w-full h-full' />,
  '03n': <WiNightAltCloudy className='w-full h-full' />,
  '04n': <WiCloudy className='w-full h-full' />,
  '09n': <WiNightAltShowers className='w-full h-full' />,
  '10n': <WiNightAltRain className='w-full h-full' />,
  '11n': <WiNightAltThunderstorm className='w-full h-full' />,
  '13n': <WiNightAltSnow className='w-full h-full' />,
  '50n': <WiNightFog className='w-full h-full' />
}

const OpenWeatherIcon = ({ className, code }) => {
  return <div className={className}>{ICON_SET[code]}</div>
}

export default OpenWeatherIcon
