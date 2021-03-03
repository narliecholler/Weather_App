import { WeatherActions } from '../actions/types'
import { State } from '../types'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const initialState: State = {
  loading: false,
  error: '',
  weather: {
    coord: {
      lon: 0,
      lat: 0
    },
    weather: [{
      id: 0,
      main: '',
      description: '',
      icon: ''
    }],
    base: '',
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0
    },
    clouds: {
      all: 0
    },
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      message: 0,
      country: '',
      sunrise: 0,
      sunset: 0
    },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0,
  }
}

export const searchReducer = (state = initialState, action: WeatherActions): State => {
  switch(action.type) {
    case 'LOADING_WEATHER':
      return {
        ...state,
        loading: true,
      }
    case 'LOADING_SUCCESS':
      return {
        ...state,
        loading: false,
        weather: {
          ...action.payload,
        }
      }
    case 'LOADING_ERROR': 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

// typed selector
export const useTypedSelector: TypedUseSelectorHook<State> = useSelector