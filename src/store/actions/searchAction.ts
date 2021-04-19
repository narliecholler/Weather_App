import { LoadingWeather, LoadingSuccess, LoadingError, LOADING_ERROR, LOADING_SUCCESS, LOADING_WEATHER, WeatherActions } from './types' 
import { WeatherModel, Error } from '../types'
import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { State } from '../types'

const URL = process.env.REACT_APP_WEATHER_URL
const API = process.env.REACT_APP_API_KEY

export const loadingWeather = (): LoadingWeather => ({
  type: LOADING_WEATHER
})

export const weatherSuccess = (weather: WeatherModel): LoadingSuccess => ({
  type: LOADING_SUCCESS,
  payload: weather,
})

export const loadingError = (error: Error): LoadingError => ({
  type: LOADING_ERROR,
  payload: error,
})


// ThunkAction<ReturnType, RootState, unknown, Action>
type Effect = ThunkAction<void, State, unknown, WeatherActions>

export const fetchWeatherData = (city: string): Effect => async (dispatch) => {
  dispatch(loadingWeather())
  try {
    return await axios.get(`${URL}${city}&appid=${API}`)
      .then((resp) => {
        console.log('res', resp)
        dispatch(weatherSuccess(resp.data))
      })
      .catch((err) => {
        console.log('err', err)
        dispatch(loadingError(err))
      })
  }
  catch(e) {
    throw Error(`Network Error: ${e}`)
  }
}