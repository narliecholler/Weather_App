import React from 'react'
import { shallowEqual, useSelector, TypedUseSelectorHook } from 'react-redux'
import { useTypedSelector } from '../../store/reducer/searchReducer'
import CardWrapper from './style'
import Search from '../Search'
import WeatherItem from '../WeatherItem'
import { WeatherModel } from '../../store/api/types'

export interface Props {

}

export const Card: React.FC<Props> = () => {

  const weather = useTypedSelector(state => state.weather)

  console.log('secletor', weather.coord)
  return (
    <CardWrapper>
      <Search />
      {/* <WeatherItem
        text={selector.weather[0].description}
        item=
      /> */}
    </CardWrapper>
  )
}