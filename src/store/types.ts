import { Action } from 'redux'
import { WeatherModel } from './api/types'

type Error = string

// state schema
export type State = {
  error: Error,
  loading: boolean,
  weather: WeatherModel
}
//

// action types
export const LOADING_WEATHER = 'LOADING_WEATHER'
type LOADING_WEATHER = typeof LOADING_WEATHER

export const LOADING_SUCCESS = 'LOADING_SUCCESS'
type LOADING_SUCESS = typeof LOADING_SUCCESS

export const LOADING_ERROR = 'LOADING_ERROR'
type LOADING_ERROR = typeof LOADING_ERROR
//

// action return types
export interface LoadingWeather extends Action {
  type: LOADING_WEATHER
}

export interface LoadingSucces extends Action {
  type: LOADING_SUCESS
  payload: WeatherModel
}

export interface LoadingError extends Action {
  type: LOADING_ERROR,
  payload: Error,
}
//

// union return types
export type WeatherActions =
  LoadingWeather | LoadingSucces | LoadingError
