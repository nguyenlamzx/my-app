import React from 'react'
import Header from '../Header'

import Wrapper from './Wrapper';

const Layout = (props) => (
  <Wrapper>
    <Header />
    {props.children}
  </Wrapper>
)

export default Layout