import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Wrapper from '../Layout/Wrapper'
import Header from '../Header'
import Intro from '../Intro'

import Todo from 'components/Todo';

import logo from '../../assets/logo.svg'

class App extends Component {
  render() {
    const base = document.querySelector('base')
    const baseHref = base ? base.getAttribute('href') : '/'

    return (
      <Wrapper>
        <Header {...{logo}} />
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/todo`}>
              Todo
            </Link>
          </li>
          {/*<li>
            <Link to={`/about`}>
              About
            </Link>
          </li>*/}
        </ul>

        <Router basename={baseHref.replace(/\/$/, '')}>
          <div>
            <Route exact path="/" render={() => (
              <Intro>
                To get started, edit <code>src/App.js</code> and save to reload.
              </Intro>
            )}/>
            <Route path="/todo" component={Todo}/>
            {/*<Route path="/news" component={NewsFeed}/>*/}
          </div>
        </Router>
      </Wrapper>
    )
  }
}

export default App
