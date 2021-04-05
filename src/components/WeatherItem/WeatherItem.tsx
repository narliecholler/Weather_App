import React from 'react'
import WeatherItemWrapper from './style'

export interface Props {
  text: string,
  item: string | number,
  finalItem?: string | number,
}

export const WeatherItem: React.FC<Props> = ({
  text,
  item,
  finalItem,
}) => {
  return (
    <WeatherItemWrapper>
      <div>{text}</div>
      <div>{item}</div>
      { finalItem 
        ? <div>{finalItem}</div>
        : null 
      }
    </WeatherItemWrapper>
  )
}