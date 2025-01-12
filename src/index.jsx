import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM for React 18+
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';

import { toast } from 'react-toastify'; 

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); 

root.render(
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>
);