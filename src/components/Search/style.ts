import styled from 'styled-components'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const SearchContainer = styled.div`
  position: relative;
  margin-top: 30px;

  a {
    position: absolute;
    display: inline-block;
    width: auto;
    height: auto;
    right: 0;
    font-size: 0.8em;
    cursor: pointer;
    // override Icon styled comp for search button
    i {
      position: relative;
      bottom: 0;
    } 
  }
`

const SearchBar = styled.input<Props>`
  position: relative;
  background: none;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  width: 400px;
  outline: none;
  padding-left: 40px;
  font-size: 18px;
  caret-color: orange;
  line-height: 35px;
`

const Icon = styled.i`
  position: absolute;
  color: #fff;
  bottom: 10px;
  font-size: 1.5em;
`

export {
  SearchContainer,
  SearchBar,
  Icon 
}