import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../index.css'; // Import the single CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the login API
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });

      // Extract user data and message from the response
      const { message, user } = response.data;

      // Handle successful login
      alert(message); // Show login message
      localStorage.setItem('user', JSON.stringify(user)); // Save user details in localStorage
      navigate('/welcome'); // Navigate to the welcome page
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          <img src="/fitness pic.png" alt="Fitness" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="signup-link">
            <p>Don't have an account? <Link to="/signup">Sign up</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
