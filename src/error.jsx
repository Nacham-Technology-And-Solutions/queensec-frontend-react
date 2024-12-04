class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // Log the error to an error reporting service
      console.error("ErrorBoundary caught an error", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }
  
  const App = () => (
    <ErrorBoundary>
      <BrowserRouter>
        <SplashScreen />
        {/* Other components */}
      </BrowserRouter>
    </ErrorBoundary>
  );
  