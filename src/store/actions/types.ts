import { Action } from 'redux'
import { WeatherModel, Error } from '../api/types'

export const LOADING_WEATHER = 'LOADING_WEATHER'
type LOADING_WEATHER = typeof LOADING_WEATHER

export const LOADING_SUCCESS = 'LOADING_SUCCESS'
type LOADING_SUCESS = typeof LOADING_SUCCESS

export const LOADING_ERROR = 'LOADING_ERROR'
type LOADING_ERROR = typeof LOADING_ERROR

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

export type WeatherActions =
  LoadingWeather | LoadingSucces | LoadingError