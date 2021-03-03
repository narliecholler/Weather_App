import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { State, WeatherActions } from '../types'
import { loadingWeather, weatherSuccess, loadingError } from '../actions/searchAction'

// this file will call our api to async dispatch actions to reducer
const URL = ''
const API = ''

type Effect = ThunkAction<void, State, unknown, WeatherActions>

export const loadWeather = (city: string): Effect => async (dispatch) => {
  dispatch(loadingWeather())

  try {
    return await axios.get(`${URL}${city}${API}`)
    .then((resp) => {
      dispatch(weatherSuccess(resp.data))
    })
    .catch(() => dispatch(loadingError('There was an error with your request - maybe try city name?')))
  }
  catch(e) {
    throw Error(e)
  }
}
