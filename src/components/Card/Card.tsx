import React from 'react'
// import { shallowEqual, useSelector, TypedUseSelectorHook } from 'react-redux'
import { useTypedSelector } from '../../store/reducer/searchReducer'
import CardWrapper from './style'
import Search from '../Search'
import WeatherItem from '../WeatherItem'
import WeatherBoard from '../WeatherBoard'
// import { WeatherModel } from '../../store/api/types'

export interface Props {

}

export const Card: React.FC<Props> = () => {

  const weather = useTypedSelector(state => state.weather)

  return (
    <CardWrapper>
      <Search />
      { Object.entries(weather.coord).map(i => {
        console.log(i)
        return (
          <WeatherItem
            key={i[0]}
            text={i[0]}
            item={i[1]}
          />
        )
      })}
      <WeatherBoard
        weather={weather.weather}
        wind={weather.wind}
        main={weather.main}
      />
    </CardWrapper>
  )
}