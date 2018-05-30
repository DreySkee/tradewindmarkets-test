import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((state) => {
      return state.formData[name] = value
    });
  }

  handleSignUp = (e) => {
    e.preventDefault();

    if(this.formValid()){
      const { email, password } = this.state.formData;

      this.props.signUp({ email, password }).then((data) => {  
        this.props.setUser(data);
        this.props.history.push('/dashboard')
      });

    } else {
      console.log('invalid');
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

    Object.keys(formData).forEach((field) => {
      if(!this.fieldValid(field)){
        formValid = false;  
      }
    });

    return formValid;
  }

  fieldValid = (field) => {
    let showError = false;

    if(this.state.formData[field].trim() === ''){
      showError = true;
    }  

    this.setState((state) => { 
      return state.showErrors[field] = showError;  
    });

    return !showError;
  }

  render() {
    const { formData, showPassword, showErrors } = this.state;

    return (
      <form onSubmit={this.handleSignUp} className={this.props.className} >
        <div className="form-field">
          <input 
            type="text"      
            name="email"    
            value={formData.email}     
            onChange={this.handleChange} 
            onBlur={this.handleBlur}
            placeholder="Email Address"
          />        
          {showErrors.email && <div className="error">Please enter a valid email.</div>}
          
        </div>
        
        <div className="form-field">
          <input 
            type={showPassword ? "text" : "password" } 
            name="password" 
            value={formData.password}  
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder="Create Password" 
            autoComplete="new-password" 
          />      
          <a href="" onClick={this.showPassword}>Show password</a>    
          {showErrors.password && <div className="error">Please enter a password.</div>}
          
        </div>

        <input type="submit" value="Sign Up" />
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

export default withRouter(connect( null, mapDispatchToProps )(Form));