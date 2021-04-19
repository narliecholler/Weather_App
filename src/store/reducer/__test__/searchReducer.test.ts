import { searchReducer, initialState } from '../searchReducer'
import {  LoadingError, LoadingSuccess } from '../../actions/types'
import { WeatherModel } from '../../types'

/**
 * 
 * TESTING REDUCER
 * 
 * We just need to import the reducer and state and test with each action, test that each different action returns the correct state,
 * as according to the switch statement.
 * 
*/

const successPayload: WeatherModel = {
  coord: {
    lon: 0.123,
    lat: 0.1234
  },
  weather: [{
    id: 800,
    main: 'clear',
    description: 'clear sky',
    icon: '11s'
  }],
  base: 'stations',
  main: {
    temp: 123,
    feels_like: 456,
    temp_min: 789,
    temp_max: 123,
    pressure: 1020,
    humidity: 1005
  },
  visibility: 500,
  wind: {
    deg: 100,
    speed: 300
  },
  clouds: {
    all: 0,
  },
  dt: 5,
  sys: {
    type: 1,
    country: 'GB',
    id: 1202,
    sunrise: 10202,
    sunset: 324952,
  },
  timezone: 12,
  id: 1234233,
  name: 'London',
  cod: 1232312342
}

const error = 'Error'

const mockSuccessAction: LoadingSuccess = {
  type: 'LOADING_SUCCESS',
  payload: successPayload
}

const mockErrorAction: LoadingError = {
  type: 'LOADING_ERROR',
  payload: error
}

describe('Testing the search reducer', () => {

  // loading should return state with loading TRUE (as default is false).
  it ('Tests the loading return, for loadingWeather action', () => {
    const state = searchReducer(initialState, { type: 'LOADING_WEATHER' })
    expect(state).toEqual(Object.assign(initialState, { loading: true }))
  })

  // success should return the payload as declared above, along with anything else within state.
  it ('Tests the success return, for weatherSucces action', () => {
    const state = searchReducer(initialState, mockSuccessAction)
    expect(state).toEqual(Object.assign(state, successPayload))
  })

  // error should return the payload as declared above, except with an Error string.
  it ('Tests the success return, for weatherSucces action', () => {
    const state = searchReducer(initialState, mockErrorAction)
    expect(state).toEqual(Object.assign(state, { error: 'Error' }))
  })
})