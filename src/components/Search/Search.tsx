import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadWeather } from '../../store/api/getWeather'
import SearchBar from './style'

export interface Props {}

export const Search: React.FC<Props> = (props: Props) => {

  const [citySearch, setCitySearch] = useState<string>('')
  const dispatch = useDispatch()

  const debounce = (value: string, delay: number) => {
    const handler = setTimeout(() => {
      setCitySearch(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(e.target.value, 500)
  }, [])

  const handleClick = () => {
    dispatch(loadWeather(citySearch))
  }


  return (
    <>
      <SearchBar
        onChange={handleChange}
      />
      <button onClick={handleClick}>search</button>
    </>
  ) 
}