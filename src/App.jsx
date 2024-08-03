import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import NotFoundPage from './pages/NotFoundPage'; // Ensure the import is correct

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} /> {/* Redirect root to /signup */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="*" element={<NotFoundPage />} /> {/* Handle undefined routes */}
    </Routes>
  </Router>
);

export default App;
