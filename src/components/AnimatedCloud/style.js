import styled from 'styled-components'

const CloudWrapper = styled.div`
  width: 100%;
}
`

const Cloud = styled.div`
  position: relative;
  width: 200px;
  height: 70px;
  background-color: #fff;
  border-radius: 100px;
  z-index: 1;

    	-webkit-animation: animateCloud 35s linear infinite;
	-moz-animation: animateCloud 35s linear infinite;
	animation: animateCloud 35s linear infinite;

	-webkit-transform: scale(0.65);
	-moz-transform: scale(0.65);
	transform: scale(0.65);

  @keyframes animateCloud {
    0% {
        margin-left: -100px;
    }
    100% {
        margin-left: 100%;
    }
  }

  &:before, &:after {
    content: '';
    background: #fff;
    position: absolute;
    z-index: -1;
  }

  &:before {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    top: -30px;
    left: 20px;
  }
  &:after  {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: -50px;
    right: 20px;;
  }
`

export {
  CloudWrapper,
  Cloud
}