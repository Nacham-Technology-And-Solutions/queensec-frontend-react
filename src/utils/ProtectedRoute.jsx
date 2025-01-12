import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { loginStatus } from './authApiRequests';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const valid = await loginStatus(); // Await the promise
                setIsAuthenticated(valid.status);
            } catch (error) {
                console.error('Error verifying login status:', error);
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    // Show a loading indicator while authentication status is being verified
    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    // Redirect to login if not authenticated, else render children
    return isAuthenticated ? children : <Navigate to="/login-page" replace />;
};

export default ProtectedRoute;