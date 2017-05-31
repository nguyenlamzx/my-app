import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const Header = ({logo}) => (
  <Wrapper>
    <Logo src={logo} alt="logo" />
    <h2>Welcome to React</h2>
  </Wrapper>
)

export default Header

// styled-components
const Wrapper = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  text-align: center;

  > h2 {
    color: black;
  }
`

const Rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${Rotate360} infinite 20s linear;
  height: 80px;
`

