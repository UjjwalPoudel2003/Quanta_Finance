import React, { Component } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import {  Link } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      error: '',
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    const { email, password } = this.state;
    // Retrieve user data from local storage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  // Check if user exists and credentials match
  if (storedUser && storedUser.email === email && storedUser.password === password) {
   // if (email === 'S1wS0@example.com' && password === 'password') {
      this.setState({ loggedIn: true, error:'Correct email and password' });
    } else {
      this.setState({ loggedIn: false, error:'Invalid email or password' });
    }
  }

  render() {
    if (this.state.loggedIn) {
     // <button onClick={() => useNavigate('/')}>Home</button>
     return <Dashboard />
    } else {
      <button onClick={() => useNavigate('/signup')}>Sign Up</button>
    }

    return (
      <div className="login-container">
        <h1>Welcome Back</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
          <br /><br />
          <button type="submit">Login</button>
          <p className="error-message">{this.state.error}</p>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
