import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App/App';
import Home from './scenes/Home/Home';

export default () => (
  <Router>
    <Fragment>
      <Route component={App} />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Fragment>
  </Router>
);
