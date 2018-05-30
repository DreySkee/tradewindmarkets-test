import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

function SignUp({ className }){
  return (
    <div>
      <h1>Create Your Account</h1>
      <p>Already have an account? <Link to="/login">Log in >></Link></p>
      <Form />
    </div>
  );
}

export default SignUp;
