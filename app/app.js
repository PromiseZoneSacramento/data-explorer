var document = require('global/document');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
// var IndexRoute = require('react-router').IndexRoute;
var RootContainer = require('./containers/RootContainer');

var appContainer = document.getElementById('app');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={RootContainer}/>
  </Router>
), appContainer);
