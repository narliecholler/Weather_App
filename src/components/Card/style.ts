import styled from 'styled-components'

const CardWrapper = styled.div`
  position: relative;
  width: 80vw;
  margin: auto;
  height: 60vh;
  background-color: ${props => props.theme.colors.secondary};
`

export default CardWrapper