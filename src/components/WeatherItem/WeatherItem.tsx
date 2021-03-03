import React from 'react'
import WeatherItemWrapper from './style'

export interface Props {
  text: string,
  item: string | number
}

export const WeatherItem: React.FC<Props> = ({
  text,
  item
}) => {
  return (
    <WeatherItemWrapper>
      <div>{text}</div>
      <div>{item}</div>
    </WeatherItemWrapper>
  )
}