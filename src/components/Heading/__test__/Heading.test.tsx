import React from 'react'
import { render } from 'test-utils'
import { Heading } from '../Heading'

describe('Testing Heading component', () => {
  it ('renders with props', () => {
    const { getByText } = render(<Heading text='This is a heading' />)
    expect(getByText('This is a heading')).toBeTruthy()
  })
})