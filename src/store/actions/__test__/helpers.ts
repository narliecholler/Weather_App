import { AxiosResponse } from 'axios'
import { State } from '../../types'

// the mock reponse object
export const res: AxiosResponse = {
  data: {
    coord: { lon: 0, lat: 0 },
    weather: [
      {
        description: 'few clouds',
        icon: '02n',
        id: 800,
        main: 'Clouds'
      }
    ],
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
    wind: { speed: 0, deg: 0 },
    clouds: { all: 0 },
    dt: 0,
    sys: { type: 0, id: 0, message: 0, country: '', sunrise: 0, sunset: 0 },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0
  },
  status: 200,
  statusText: 'OK',
  config: {},
  headers: {}
}

// initial state
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