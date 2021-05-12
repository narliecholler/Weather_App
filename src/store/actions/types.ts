import { Action } from 'redux'
import { WeatherModel, Error } from '../types'

export const LOADING_WEATHER = 'LOADING_WEATHER'
type LOADING_WEATHER = typeof LOADING_WEATHER

export const CLEAR_STATE = 'CLEAR_STATE'
type CLEAR_STATE = typeof CLEAR_STATE

export const LOADING_SUCCESS = 'LOADING_SUCCESS'
type LOADING_SUCCESS = typeof LOADING_SUCCESS

export const LOADING_ERROR = 'LOADING_ERROR'
type LOADING_ERROR = typeof LOADING_ERROR

export interface ClearState extends Action {
  type: CLEAR_STATE
}
export interface LoadingWeather extends Action {
  type: LOADING_WEATHER
}
export interface LoadingSuccess extends Action {
  type: LOADING_SUCCESS
  payload: WeatherModel
}
export interface LoadingError extends Action {
  type: LOADING_ERROR,
  payload: Error,
}

export type WeatherActions =
  LoadingWeather | LoadingSuccess | LoadingError | ClearState