import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

import Logo from './Logo';
import Wrapper from './Wrapper';
import NavigationBar from './NavigationBar';

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
      <NavigationBar items={[
        { id: "home", href: "/", title: "Home" },
        { id: "about", href: "/about", title: "About" },
        { id: "topics", href: "/topics", title: "Topics" },
        { id: "todo", href: "/todo", title: "Todo" },
      ]}/>
    </Navbar>
    <h2>Welcome to React</h2>
  </Wrapper>
)

export default Header
