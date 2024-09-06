import React, { useState } from 'react';
import './index.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your signup logic here, e.g., send data to a backend API
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Terms Agreed:', termsAgreed);
  };

  return (
    <div className="container">
      <h1>Get Started Now</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="terms"
            checked={termsAgreed}
            onChange={() => setTermsAgreed(!termsAgreed)}
          />
          <label htmlFor="terms">I agree to the terms & policy</label>
        </div>
        <button type="submit" className="signup-button">Signup</button>
      </form>
      <p className="or-text">Or</p>
      <div className="social-login-buttons">
        <button className="google-button">
          <img src="" alt="Google Logo" />
          Sign in with Google
        </button>
        <button className="apple-button">
          <img src="" alt="Apple Logo" />
          Sign in with Apple
        </button>
      </div>
      <p className="account-text">Have an account? <a href="#">Sign In</a></p>
    </div>
  );
}

export default App;