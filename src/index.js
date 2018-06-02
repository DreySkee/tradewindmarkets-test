// Dependencies
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import registerServiceWorker from './registerServiceWorker';
import style from './style';
import userActions from 'redux/User/actions'; 

// Components
import PrivateRoute from 'components/_common/PrivateRoute';
import Header from 'components/_common/Header';
import Footer from 'components/_common/Footer';
import SignUp from 'components/Auth/SignUp';
import LogIn from 'components/Auth/LogIn';
import Dashboard from 'components/Dashboard';


const localStorageUser = localStorage.getItem("user");
if(localStorageUser){
  const userData = JSON.parse(localStorageUser)
  store.dispatch(userActions.setUser(userData));
}

ReactDOM.render(
  <Provider store={store}>

    <Router>
      <div className="page"> 
        <Header />
        
        <Route exact  path="/" render={() => <Redirect to="/dashboard" />} />
        <Route exact  path="/signup"     component={SignUp} />
        <Route exact  path="/login"      component={LogIn} />
        <PrivateRoute path="/dashboard"  component={Dashboard} />

        <Footer />
      </div>
    </Router>

  </Provider>
, document.getElementById('root'));
registerServiceWorker();


