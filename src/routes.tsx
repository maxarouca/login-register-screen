import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
