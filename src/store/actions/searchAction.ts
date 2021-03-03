import { LoadingWeather, LoadingSucces, LoadingError, LOADING_ERROR, LOADING_SUCCESS, LOADING_WEATHER } from './types' 
import { WeatherModel, Error } from '../api/types'

export const loadingWeather = (): LoadingWeather => ({
  type: LOADING_WEATHER
})

export const weatherSuccess = (weather: WeatherModel): LoadingSucces => ({
  type: LOADING_SUCCESS,
  payload: weather,
})

export const loadingError = (error: Error): LoadingError => ({
  type: LOADING_ERROR,
  payload: error,
})