import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <h2 className="sign-in-title">Sign In</h2>
        <form>
          <div className="input-group">
            <label className="input-label" htmlFor="email">Email</label>
            <input type="email" id="email" className="input-field" />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="password">Password</label>
            <input type="password" id="password" className="input-field" />
          </div>
          <p className="forgot-password">Forgot Password?</p>
          <button className="login-button">Sign In</button>
        </form>
        <div className="separator">
          <div className="separator-line"></div>
          <p className="separator-text">Or</p>
          <div className="separator-line"></div>
        </div>
        <div className="social-login">
          <button className="social-login-button">
            <img src="src\components\google_icon-removebg-preview.png" alt="Google Logo" className="social-login-icon" />
            Sign in with Google
          </button>
          <button className="social-login-button">
            <img src="src\components\apple_icon-removebg-preview.png" alt="Apple Logo" className="social-login-icon" />
            Sign in with Apple
          </button>
        </div>
        <p className="sign-up-link">Don't have an account? Sign up</p>
      </div>
    </div>
  );
};

export default Login;