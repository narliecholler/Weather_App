import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { theme } from './theme'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { searchReducer, initialState } from './store/reducer/searchReducer'

const store = createStore(searchReducer, initialState)

interface ProviderProps { 
  children?: NonNullable<React.ReactNode>
}

const TheProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </Provider>
  )
}

const customRender= (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: TheProvider, ...options })

export * from '@testing-library/react'

export { customRender as render }