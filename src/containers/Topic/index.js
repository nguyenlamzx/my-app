import React, { Component } from 'react'

// import Wrapper from '../Layout/Wrapper'
// import Header from '../Header'
// import Intro from '../Intro'

// import Todo from 'components/Todo';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Topic