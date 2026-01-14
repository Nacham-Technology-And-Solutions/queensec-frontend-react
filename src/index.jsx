import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM for React 18+
// import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import ErrorBoundary from './error';
import './index.scss';

// Wrapper component to use navigate hook in ErrorBoundary
const ErrorBoundaryWrapper = ({ children }) => {
  const navigate = React.useMemo(() => {
    // Create a navigate function that can be passed to ErrorBoundary
    return (path) => {
      window.location.href = path;
    };
  }, []);
  
  return (
    <ErrorBoundary navigate={navigate}>
      {children}
    </ErrorBoundary>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); 

root.render(
  <ErrorBoundaryWrapper>
    <UserProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </Router>
    </UserProvider>
  </ErrorBoundaryWrapper>
);