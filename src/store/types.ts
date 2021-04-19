type Coord = {
  lon: number,
  lat: number,
}

type Weather = {
  id: number,
  main: string,
  description: string,
  icon: string
}

type Main = {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number
}

type Wind = {
  speed: number,
  deg: number
}

type Clouds = {
  all: number,
}

type Sys = {
  type: number,
  id: number,
  message?: number,
  country: string,
  sunrise: number,
  sunset: number
}

export interface WeatherModel {
  coord: Coord,
  weather: Array<Weather>,
  base: string,
  main: Main,
  visibility: number,
  wind: Wind,
  clouds: Clouds,
  dt: number,
  sys: Sys,
  timezone: number,
  id: number,
  name: string,
  cod: number,
}


export type Error = string
type Loading = boolean

// state schema
export type State = {
  error: Error,
  loading: Loading,
  weather: WeatherModel
}
