import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadWeather } from '../../store/api/getWeather'
import SearchBar from './style'

export interface Props {}

export const Search: React.FC<Props> = (props: Props) => {

  const [citySearch, setCitySearch] = useState<string>('')

  const dispatch = useDispatch()

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setCitySearch(e.target.value), [])

  const handleClick = () => dispatch(loadWeather(citySearch))

  return (
    <>
      <SearchBar
        onChange={handleChange}
      />
      <button onClick={handleClick}>search</button>
    </>
  ) 
}