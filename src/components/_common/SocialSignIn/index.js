import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import style from './style';
import userActions from 'redux/User/actions'; 
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const SocialSignIn = ({...props}) => {

  const handleResponse = (data) => {
    if(data){
      data = data.profileObj ? data.profileObj : data // google responds with profile data in `data.profileObj` otherwise use facebook's `data`
      localStorage.setItem("user", JSON.stringify(data));
      props.setUser(data);
      props.history.push('/dashboard')     
    } 
  }

  return (
    <div className={props.className}>
      <div className="button-holder">
        <div className="social-login-btn fb">
          <FacebookLogin
            appId="179758979396037"
            callback={handleResponse} 
            render={renderProps => (
              <button onClick={renderProps.onClick}>Log In with Facebook</button>
            )}
          />
          <div className="social-icon"></div>
        </div>

        <div className="social-login-btn g">
          <GoogleLogin
            clientId="604768322641-8p6t5ht0tistmf0098ufbuo9535egbmg.apps.googleusercontent.com"
            buttonText="Log In with Google"
            onSuccess={handleResponse}
            onFailure={handleResponse}
            style={{}}
          />
          <div className="social-icon"></div>
        </div>
      </div>

      <div className="or-separator"><span>or</span></div>
    </div>  
  );
}

const mapDispatchToProps = (dispatch) => {

  const setUser = (data) => {
    dispatch(userActions.setUser(data));
  }
  
  return {
    setUser 
  }
};

const StyledSocialSignIn = styled(SocialSignIn)`${style}`;
export default withRouter(connect( null, mapDispatchToProps )(StyledSocialSignIn));