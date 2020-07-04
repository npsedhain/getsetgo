import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './pages/Register/Register';
import PageHeader from './components/PageHeader/PageHeader';

export default function AppRouter() {
  return (
    <Router>
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path='/'>
          <PageHeader />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/dashboard'>
          <div>Hello this is dashboard</div>
        </Route>
      </Switch>
    </Router>
  );
}
