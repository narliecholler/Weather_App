import { create } from 'domain'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.primary};
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  }
`

export default GlobalStyle