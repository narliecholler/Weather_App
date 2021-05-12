import React, { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { theme } from './theme'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './store/store'

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
): RenderResult => render(ui, { wrapper: TheProvider, ...options })

export * from '@testing-library/react'

export { customRender as render }