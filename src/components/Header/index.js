import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

import Logo from './Logo';
import Wrapper from './Wrapper';
import NavigateBar from './NavigateBar';

const Header = ({logo}) => (
  <Wrapper>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">
            <Logo src={logo} alt="logo" />
          </NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <NavigateBar />
    </Navbar>
    <h2>Welcome to React</h2>
  </Wrapper>
)

export default Header
