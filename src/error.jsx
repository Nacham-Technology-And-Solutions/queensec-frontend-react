import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
  
    componentDidCatch(error, errorInfo) {
      // Log the error to an error reporting service
      console.error("ErrorBoundary caught an error", error, errorInfo);
      // TODO: Integrate with error logging service (Sentry, LogRocket, etc.)
    }
  
    handleReset = () => {
      this.setState({ hasError: false, error: null });
      // Optionally navigate to home
      if (this.props.navigate) {
        this.props.navigate('/splash');
      }
    };
  
    render() {
      if (this.state.hasError) {
        return (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh',
            padding: '20px',
            textAlign: 'center'
          }}>
            <h1>Something went wrong</h1>
            <p>We're sorry, but something unexpected happened.</p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details style={{ marginTop: '20px', textAlign: 'left' }}>
                <summary>Error Details (Development Only)</summary>
                <pre style={{ background: '#f5f5f5', padding: '10px', overflow: 'auto' }}>
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <div style={{ marginTop: '20px' }}>
              <Button 
                label="Go to Home" 
                onClick={this.handleReset}
                size="large"
                isSpanWidth={false}
              />
            </div>
          </div>
        );
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;