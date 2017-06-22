import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = () => (
  <li role="presentation">
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>
  </li>
)

export default NavItem