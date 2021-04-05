import { createGlobalStyle } from 'styled-components'
import background from '../../assets/images/background.jpg'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  body {
    background-image: url(${background});
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    #root {
      height: 100%;
      .App {
        height: 100%;
      }
    }
  }
`

export default GlobalStyle