import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Wrapper from '../Layout/Wrapper'
import Header from '../Header'
import Intro from '../Intro'

import Todo from 'components/Todo';
import Home from 'containers/Home';
import About from 'containers/About';
import Topics from 'containers/Topics';

import logo from '../../assets/logo.svg'

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header {...{logo}} />
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/todo" component={Todo}/>
            <Route exact path="/" render={() => (
              <Intro>
                To get started, edit <code>src/App.js</code> and save to reload.
              </Intro>
            )}/>
            {/*<Route path="/news" component={NewsFeed}/>*/}
          </div>
        </Wrapper>
      </Router>
    )
  }
}

export default App
