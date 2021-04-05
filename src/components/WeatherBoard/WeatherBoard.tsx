import React from 'react'
import BoardWrapper from './style'
import WeatherItem from '../WeatherItem'

type MainWeather = {
  main: string,
  description: string,
  icon: string,
}

type Wind = {
  deg: number, 
  speed: number
}

type Main = {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
}

export interface Props {
  weather: MainWeather[],
  wind: Wind,
  main: Main,
}

export const WeatherBoard: React.FC<Props> = ({
  weather,
  wind,
  main,
}) => {

  return (
    <BoardWrapper>
      <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} />
      <WeatherItem 
        text='Weather'
        item={weather[0].main}
        finalItem={weather[0].description}
      />
      <WeatherItem 
        text='Wind'
        item={wind.deg}
        finalItem={wind.speed}
      />
      <WeatherItem 
        text='Temperature'
        item={main.temp}
        finalItem={main.humidity}
      />
    </BoardWrapper>
  )
}
