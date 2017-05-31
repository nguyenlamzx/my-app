import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../Header'
import Layout from '../Layout'
import Wrapper from '../Layout/Wrapper'

import logo from '../../assets/logo.svg'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header {...{logo}} />
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    )
  }
}

export default App

// styled-components

const Intro = styled.p`
  font-size: large;
`