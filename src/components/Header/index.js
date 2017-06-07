import * as React from 'react'
import styled, { keyframes } from 'styled-components'

import Logo from './Logo';
import Wrapper from './Wrapper';

const Header = ({logo}) => (
  <Wrapper>
    <Logo src={logo} alt="logo" />
    <h2>Welcome to React</h2>
  </Wrapper>
)

export default Header
