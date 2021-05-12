import React from 'react'
import * as reactRedux from 'react-redux'
import userEvent from '@testing-library/user-event'
import { render } from '../../../test-utils'
import { Search } from '../Search'

describe('Testing the search component', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  beforeEach(() => {
    useDispatchMock.mockClear()
  })

  it ('it renders', () => {
    const { container, getByPlaceholderText } = render(<Search />)
    expect(getByPlaceholderText('Enter a city')).toBeInTheDocument()
    expect(container.querySelector('input')).toBeTruthy()
    expect(container.querySelector('button')).toBeTruthy()
    expect(container.querySelector('i')).toBeTruthy()
  })

  it ('has no initial value', () => {
    const { getByRole } = render(<Search />)
    expect(getByRole('textbox')).toHaveValue('')
  })

  it ('user enters value and value persists', () => {
    const { getByRole } = render(<Search />)
    userEvent.type(getByRole('textbox'), 'peterborough')
    expect(getByRole('textbox')).toHaveValue('peterborough')
  })

  it ('user enters value and clicks search, mock dispatch call', () => {
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)
    const { getByRole } = render(<Search />)
    userEvent.type(getByRole('textbox'), 'peterborough')
    userEvent.click(getByRole('button'))
    expect(dummyDispatch).toHaveBeenCalled()
  })
})
