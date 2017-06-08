import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './globals.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

// const base = document.querySelector('base')
// const baseHref = base ? base.getAttribute('href') : '/'

ReactDOM.render(
  <Router basename="/todo" render={() => (
    <App />
  )} />,
  document.getElementById('root')
);
registerServiceWorker();
