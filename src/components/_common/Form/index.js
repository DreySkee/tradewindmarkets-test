import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import style from './style';

import authActions from 'redux/Auth/actions';
import userActions from 'redux/User/actions'; 

class Form extends React.Component {

  state = {
    formData: {
      email: '',
      password: ''
    },
  
    showErrors: {
      email: false,
      password: false
    },

    showPassword: false
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState((state) => {
      return state.formData[name] = value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.formValid()){
      const { email, password } = this.state.formData;

      // signup, store data and redirect to dashboard
      this.props.signUp({ email, password }).then((data) => {  
        this.props.setUser(data);
        this.props.history.push('/dashboard')
      }).catch((err) => {
        // handle error
        alert('Invalid email and/or password');
      });
    }
  }

  handleBlur = (e) => {
    const field = e.target.name;
    this.fieldValid(field);
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState((state) => {
      return { showPassword: !state.showPassword }
    });
  }

  formValid = () => {
    let formValid = true;
    const { formData } = this.state;

    // check if every form field is valid
    Object.keys(formData).forEach((field) => {
      if(!this.fieldValid(field)){
        formValid = false;  
      }
    });

    return formValid;
  }

  fieldValid = (field) => {
    let showError = false;

    // check if field is empty
    if(this.state.formData[field].trim() === ''){
      showError = true;
    }  

    // if it's an email, check if it's valid
    if(field === 'email' && !this.validateEmail(this.state.formData[field])){
      showError = true; 
    }

    // display error messages
    this.setState((state) => { 
      return state.showErrors[field] = showError;  
    });

    return !showError;
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const { formData, showPassword, showErrors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={this.props.className} >
        <div className="form-field">
          <input 
            type="text"      
            name="email"    
            value={formData.email}     
            onChange={this.handleChange} 
            onBlur={this.handleBlur}
            placeholder="Email Address"
            className={showErrors.email && 'error'}
          />        
          {showErrors.email && <div className="error-message">Please enter a valid email.</div>}
          
        </div>
        
        <div className="form-field">
          <input 
            type={showPassword ? "text" : "password" } 
            name="password" 
            value={formData.password}  
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder={this.props.signUpForm ? "Create Password" : "Password"}
            autoComplete="new-password" 
            className={showErrors.password && 'error'}
          />      
          <a href="" onClick={this.showPassword}>Show password</a>    
          {showErrors.password && <div className="error-message">Please enter a password.</div>}
          
        </div>

        {this.props.signUpForm ?
          <div className="form-bottom">
            <div className="checkbox-row">
              <input type="checkbox" name="newsletter" id="newsletter"/>
              <label for="newsletter">You agree to receive occasional updates and special offers for The New York Times's products and services. You may opt out or <a href="">contact us</a> anytime.</label> 
            </div>
            <p>By creating an account, you agree to the <a href="">Terms of Service</a> and acknowledge our <a href="">Privacy Policy</a>.</p>
         </div>
        :
          <div className="form-bottom">
            <div className="checkbox-row">
              <input type="checkbox" name="remember-me" id="remember-me"/>
              <label for="remember-me">Remember me</label> 
            </div>      
            <a href="" className="forgot-password">Forgot your password?</a> 
          </div>
        }

        <input type="submit" value={this.props.signUpForm ? "Sign Up" : "Log In"}  />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const signUp = (data) => {
    return dispatch(authActions.signUp(data));
  }

  const setUser = (data) => {
    dispatch(userActions.setUser(data));
  }
  
  return {
    signUp,
    setUser 
  }
};

const StyledForm = styled(Form)`${style}`;
export default withRouter(connect( null, mapDispatchToProps )(StyledForm));