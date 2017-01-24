import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';

ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory}>
  </Router>,
  document.getElementById('app-container')
);