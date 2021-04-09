import React from 'react'
import GlobalStyle from './globalStyle'
import {Container, WeatherContainer} from './style'
// import Card from '../Card'
import Search from '../Search'
import Heading from '../Heading'
// import WeatherIcon from '../WeatherIcon'

export interface Props {}

export const Layout: React.FC<Props> = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading text='Weather app - React/Typescript' />
        <Search />
        {/* <WeatherIcon /> */}

        <WeatherContainer>

        </WeatherContainer>
        {/* <Card /> */}
      </Container>
    </>
  )
}