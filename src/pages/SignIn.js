import React from 'react';
import './SignIn.css';
import Footer from '../layout/Footer';
import SignInForm from './SignInForm.js';
import loginImage from './assets/login.png';

const SignIn = () => {
  return (
    <div className="signin">
      <div className="content">
        <img src={loginImage} className="loginImage" alt="bears" />
        <div className="form">
          <SignInForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { SignIn };
