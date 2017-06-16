import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'


export default class NavigateBar extends Component {
  handleSelect(eventKey) {
    // eventKey.preventDefault();
    // alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Nav>
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={2} href="/about">About</NavItem>
        <NavDropdown eventKey={3} title="Topics" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Topics 1</MenuItem>
          <MenuItem eventKey={3.2}>Topics 2</MenuItem>
          <MenuItem eventKey={3.3}>Topics 3</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Topics 4</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
};
