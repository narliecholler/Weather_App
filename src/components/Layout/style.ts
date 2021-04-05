import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const WeatherContainer = styled.div`
  background-color: red;
  position: relative;
  width: 85%;
  height: 100%;
  margin: auto;
`

export {
  Container,
  WeatherContainer
}