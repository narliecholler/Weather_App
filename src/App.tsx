import React from 'react'
import Layout from './components/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

const App: React.VoidFunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  ) 
}

export default App
 