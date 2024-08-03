import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18
import App from './App';
import './index.css'; // Ensure your CSS file exists and is correctly imported

// Create a root element
const root = createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
