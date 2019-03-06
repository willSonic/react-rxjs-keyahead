import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeScene } from '../../../view-layer/_home';
import SearchScene from '../../../view-layer/_search/scene/SearchScene';

const getAppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScene} />
        <Route exact path="/search" component={SearchScene} />
      </Switch>
    </Router>
  );
};

export default getAppRoutes;
