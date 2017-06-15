import * as React from 'react'

import Logo from './Logo';
import Wrapper from './Wrapper';
import NavigateBar from './NavigateBar';

const Header = ({logo}) => (
  <Wrapper>
    <Logo src={logo} alt="logo" />
    <NavigateBar />
    <h2>Welcome to React</h2>
  </Wrapper>
)

export default Header
