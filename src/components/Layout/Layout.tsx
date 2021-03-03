import React from 'react'
import GlobalStyle from './globalStyle'
import Container from './style'
import Card from '../Card'
import Heading from '../Heading'

export interface Props {}

export const Layout: React.FC<Props> = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading />
        <Card />
      </Container>
    </>
  )
}