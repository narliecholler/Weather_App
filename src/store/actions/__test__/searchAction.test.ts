import { LOADING_ERROR, LOADING_SUCCESS, LOADING_WEATHER } from '../types'
import { loadingWeather, weatherSuccess, loadingError } from '../searchAction'

describe('Testing redux actions', () => {

  it ('testing loading weather action is called with correct type', () => {
    const expectedAction = {
      type: LOADING_WEATHER
    }
    expect(loadingWeather()).toEqual(expectedAction)
  })

  it ('testing weather success action is called with correct type and payload', () => {
    const pay = {"coord":{"lon":-0.2478,"lat":52.5736},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":280.16,"feels_like":276.73,"temp_min":279.15,"temp_max":280.93,"pressure":1011,"humidity":87},"visibility":10000,"wind":{"speed":5.66,"deg":290},"clouds":{"all":75},"dt":1617957230,"sys":{"type":1,"id":1511,"country":"GB","sunrise":1617945375,"sunset":1617994103},"timezone":3600,"id":2640354,"name":"Peterborough","cod":200}
    const expectedAction = {
      type: LOADING_SUCCESS,
      payload: pay,
    }
    expect(weatherSuccess(pay)).toEqual(expectedAction)
  })

  it ('testing weather error action is called with correct type and payload', () => {
    const pay = 'This is an error'
    const expectedAction = {
      type: LOADING_ERROR,
      payload: pay,
    }
    expect(loadingError(pay)).toEqual(expectedAction)
  })
})