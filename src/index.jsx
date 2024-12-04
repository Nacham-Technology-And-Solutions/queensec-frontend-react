import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { UserProvider } from './UserContext';
// import { process } from "process";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <UserProvider>
  <Router>
    <App />
    </Router>
    </UserProvider>
);