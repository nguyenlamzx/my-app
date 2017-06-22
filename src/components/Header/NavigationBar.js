import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// import { Nav, NavDropdown, MenuItem } from 'react-bootstrap'


// import NavItem from './NavItem'

export default class NavigationBar extends Component {

  static defaultProps = {
    items: []
  }

  static PropTypes = {
    items: PropTypes.array
  }

  render() {
    return (
      <ul className="nav navbar-nav">
        {this.props.items.map(item => (
          <li key={item.id}>
            <NavLink
              to={item.href}
              exact={item.href === '/'}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      /*<Nav>
        <NavItem eventKey={1} href="/" >Home</NavItem>
        <NavLink to="/">
          <NavItem  eventKey={2} href="about">About</NavItem>
        </NavLink>
        <NavDropdown eventKey={3} title="Topics" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Topics 1</MenuItem>
          <MenuItem eventKey={3.2}>Topics 2</MenuItem>
          <MenuItem eventKey={3.3}>Topics 3</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Topics 4</MenuItem>
        </NavDropdown>
      </Nav>*/
    );
  }
};
