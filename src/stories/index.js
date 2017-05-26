// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import '../assets/bootstrap.css';

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import { Button as BSButton } from 'react-bootstrap';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('styles', () => (
    <div>
      {/* Standard button */}
      <BSButton>Default</BSButton>

      {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
      <BSButton bsStyle="primary">Primary</BSButton>

      {/* Indicates a successful or positive action */}
      <BSButton bsStyle="success">Success</BSButton>

      {/* Contextual button for informational alert messages */}
      <BSButton bsStyle="info">Info</BSButton>

      {/* Indicates caution should be taken with this action */}
      <BSButton bsStyle="warning">Warning</BSButton>

      {/* Indicates a dangerous or potentially negative action */}
      <BSButton bsStyle="danger">Danger</BSButton>

      {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
      <BSButton bsStyle="link">Link</BSButton>
    </div>
  ))
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
