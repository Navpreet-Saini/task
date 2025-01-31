import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import App from './App';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root div

// Render the App inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
