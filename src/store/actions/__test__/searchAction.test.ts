import axios from 'axios'
import configureStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { LOADING_ERROR, LOADING_SUCCESS, LOADING_WEATHER, WeatherActions } from '../types'
import { loadingWeather, weatherSuccess, loadingError, fetchWeatherData } from '../searchAction'
import { State } from '../../types'
import { res, initialState } from './helpers'

const URL = process.env.REACT_APP_WEATHER_URL
const API = process.env.REACT_APP_API_KEY

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const middleware = [thunk]
const mockStore = configureStore<State, ThunkDispatch<State, unknown, WeatherActions>>(middleware)
const store = mockStore(initialState)

/**
 * 
 * TESTING ACTION CREATORS
 * 
 * The action creators are meant to return a type and a payload, if specified. Simply test by calling the action and giving it an expected object of TYPE +/- PAYLOAD.
 * 
 * TESTING ASYNC ACTION CREATOR
 * 
 * The async action creator is where the API call happens, this action is dispatched in the component. To test this, first we need to mock Axios and mock the response 
 * of the get by either resolving it or rejecting it (depending on which action you're testing within). Then test whether the mocked GET is getting called with the right
 * API url and then assert the actions that have dispatched, the TYPE and PAYLOAD.
 * 
*/

// Action Creators
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

// Async Action Creator
describe('Testing api action creator', () => {
  afterEach(() => {
    store.clearActions()
  })

  it('#loading and #success', async () => {
    // mock what axios returns
    mockedAxios.get.mockResolvedValueOnce(res)
    // call the async action creator
    await store.dispatch(fetchWeatherData('peterborough'))
    // test what axios.get is calling
    expect(mockedAxios.get).toBeCalledWith(`${URL}peterborough&appid=${API}`)
    // test the actions being returned
    expect(store.getActions()).toEqual([
      { type: LOADING_WEATHER },
      { type: LOADING_SUCCESS, payload: res.data }
    ])
  })

  it('#error', async () => {
    // mock what axios returns
    mockedAxios.get.mockRejectedValueOnce('Incorrect City Name')
    // call the async action creator
    await store.dispatch(fetchWeatherData('zxcvb'))
    // test what axios.get is calling
    expect(mockedAxios.get).toBeCalledWith(`${URL}zxcvb&appid=${API}`)

    console.log(store.getActions())
    // test the actions being returned
    expect(store.getActions()).toEqual([
      { type: LOADING_WEATHER },
      { type: LOADING_ERROR, payload: 'Incorrect City Name' }
    ])
  })

})