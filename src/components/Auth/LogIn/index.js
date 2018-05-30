import React from 'react';
import { Link } from 'react-router-dom';
import SocialSignIn from 'components/_common/SocialSignIn';
import Form from 'components/_common/Form';

function LogIn({ className }){
  return (
    <div>
      <div className="container">
        <h2>Log In</h2>
        <p>Don't have an account? <Link to="/signup">Create one »</Link></p>

        <SocialSignIn />
        <Form  />
      </div>
    </div>
  );
}

export default LogIn;
