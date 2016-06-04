import document from 'global/document';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  browserHistory,
  Route,
  Router,
} from 'react-router';
import RootContainer from './containers/RootContainer';

const appContainer = document.getElementById('app');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={RootContainer}/>
  </Router>
), appContainer);
