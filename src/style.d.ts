import 'styled-components'

// extend styled-componets
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string
    }
  }
}