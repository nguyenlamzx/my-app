import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Topic from 'containers/Topic'

class Topics extends Component {

  static defaultProps = {
    topics: [
      { id: 'rendering', title: 'Rendering with React' },
      { id: 'components', title: 'Components' },
      { id: 'props-v-state', title: 'Props v. State' },
    ]
  }

  render() {

    var { match, topics } = this.props

    return (
      <div>
        <h2>Topics</h2>
        <ul>
          {topics.map(topic => (
            <li key={topic.id}>
              <Link to={`${match.url}/${topic.id}`}>
                {topic.title}
              </Link>
            </li>
          ))}
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    )
  }
}
  

export default Topics