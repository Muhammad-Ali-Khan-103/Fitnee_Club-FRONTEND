import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../index.css'; // Import the single CSS file // Import the specific CSS file for this page

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/sign-up', {
        name,
        email,
        password,
      });
      // Handle successful registration
      alert(response.data.message || 'Registration successful!');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle registration error
      alert(error.response?.data?.message || 'Registration failed!');
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-box">
        <div className="sign-up-image">
          <img src="/fitness pic.png" alt="Fitness" />
        </div>
        <div className="sign-up-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
          <div className="login-link">
            <p>If you already have an account, <Link to="/login">log in</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
