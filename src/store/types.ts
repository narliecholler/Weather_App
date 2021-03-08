import { WeatherModel } from './api/types'

type Error = string
type Loading = boolean

// state schema
export type State = {
  error: Error,
  loading: Loading,
  weather: WeatherModel
}
