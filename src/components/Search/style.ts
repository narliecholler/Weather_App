import styled from 'styled-components'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const SearchBar = styled.input<Props>`
  position: relative;
`

export default SearchBar