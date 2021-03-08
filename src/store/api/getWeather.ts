import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { WeatherActions } from '../actions/types'
import { State } from '../types'
import { loadingWeather, weatherSuccess, loadingError } from '../actions/searchAction'

// this file will call our api to async dispatch actions to reducer

const URL = process.env.REACT_APP_WEATHER_URL
const API = process.env.REACT_APP_API_KEY

// ThunkAction<ReturnType, RootState, unknown, Action>
type Effect = ThunkAction<void, State, unknown, WeatherActions>

export const loadWeather = (city: string): Effect => async (dispatch) => {
  dispatch(loadingWeather())

  try {
    return await axios.get(`${URL}${city}&appid=${API}`)
    .then((resp) => {
      dispatch(weatherSuccess(resp.data))
    })
    .catch((e) => {
      console.log('e', e)
      dispatch(loadingError('There was an error with your request - maybe try city name?'))
    })
  }
  catch(e) {
    throw Error(`Network Error: ${e}`)
  }
}
