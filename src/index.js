// Dependencies
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import registerServiceWorker from './registerServiceWorker';

// Views
import SignUp from 'components/Auth/SignUp';
import Dashboard from 'components/Dashboard';
import PrivateRoute from 'components/_common/PrivateRoute'


ReactDOM.render(
  <Provider store={store}>

    <Router basename="/">
      <div> 
        <Route exact path="/signup"     component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </div>
    </Router>

  </Provider>
, document.getElementById('root'));
registerServiceWorker();


