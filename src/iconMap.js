import {
  WiThunderstorm,
  WiSprinkle,
  WiRain,
  WiSnow,
  WiFog,
  WiSmoke,
  WiDayHaze,
  WiSandstorm,
  WiDust,
  WiVolcano,
  WiTsunami,
  WiTornado,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayCloudy,
  WiDayCloudyHigh,
  WiCloudy
} from 'react-icons/wi'

const maps = {
  '200': WiThunderstorm,
  '300': WiSprinkle,
  '500': WiRain,
  '600': WiSnow,
  '701': WiFog,
  '711': WiSmoke,
  '721': WiDayHaze,
  '731': WiSandstorm,
  '741': WiFog,
  '751': WiSandstorm,
  '761': WiDust,
  '762': WiVolcano,
  '771': WiTsunami,
  '781': WiTornado,
  '800': WiDaySunny,
  '801': WiDaySunnyOvercast,
  '802': WiDayCloudy,
  '803': WiDayCloudyHigh,
  '804': WiCloudy
}

export const getIcon = weatherCode => {
  let code =
    weatherCode < 700 ? Math.floor(weatherCode / 100) * 100 : weatherCode
  return maps[code]
}
