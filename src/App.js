import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import { Landing } from './pages/Landing.js';
import { ComingSoon } from './pages/ComingSoon.js';
import Catalog from './pages/catalog.js';
import { SignUp } from './pages/SignUp.js';
import { SignIn } from './pages/SignIn.js';
import Admin from './pages/admin/Admin.js';
import Modal from './pages/Modal.js';
import Preview from './pages/Preview.js';
import store from './store';
import { loadProfile } from './actions/profile';
import { Provider } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  useEffect(() => {
    console.log('reload app');
    store.dispatch(loadProfile());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/comingsoon" component={ComingSoon} />
          <PrivateRoute path="/admin" component={ComingSoon} />
          <Route path="/catalog" component={ComingSoon} />
          <Route exact path="/signup" component={ComingSoon} />
          <Route exact path="/signin" component={ComingSoon} />
          <Route exact path="/club/:id" component={ComingSoon} />
          <Route>{'404'}</Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default withRouter(App);
