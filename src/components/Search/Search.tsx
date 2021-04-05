import { relative } from 'node:path'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadWeather } from '../../store/api/getWeather'
import { SearchContainer, SearchBar, Icon } from './style'

export interface Props {}

export const Search: React.FC<Props> = (props: Props) => {

  const [citySearch, setCitySearch] = useState<string>('')

  const dispatch = useDispatch()

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setCitySearch(e.target.value), [])

  const handleClick = () => dispatch(loadWeather(citySearch))

  return (
    <SearchContainer>
      <Icon className="fab fa-searchengin"></Icon>
      <SearchBar
        type="text"
        placeholder="Enter a city"
        onChange={handleChange}
        // onSubmit={handleClick}
      />
      <a onClick={handleClick} style={{ position: 'relative'}}>
        <Icon className="fas fa-arrow-right"></Icon>
      </a>
    </SearchContainer>
  ) 
}