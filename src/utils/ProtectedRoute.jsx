import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { loginStatus } from './authApiRequests';
import { isTokenValid, isTokenExpiringSoon } from './tokenValidation';
import { auditLogger } from './auditLogger';
import { logger } from './logger';
import { clearToken } from './tokenStorage';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            // First check if token is valid locally
            if (!isTokenValid()) {
                logger.warn('Invalid or expired token detected');
                auditLogger.unauthorizedAccess('ProtectedRoute', 'Invalid token');
                setIsAuthenticated(false);
                clearToken();
                return;
            }

            // Check if token is expiring soon
            if (isTokenExpiringSoon()) {
                logger.warn('Token expiring soon - consider refreshing');
                // Optionally refresh token here
                // For now, just proceed with API check
            }

            // Then verify with backend
            try {
                const valid = await loginStatus(); // Await the promise
                if (valid && valid.status === true) {
                    setIsAuthenticated(true);
                } else {
                    logger.warn('API validation failed');
                    auditLogger.unauthorizedAccess('ProtectedRoute', 'API validation failed');
                    setIsAuthenticated(false);
                    clearToken();
                }
            } catch (error) {
                logger.error('Error verifying login status', error, 'ProtectedRoute');
                // If API call fails, check token validity
                if (!isTokenValid()) {
                    auditLogger.unauthorizedAccess('ProtectedRoute', 'API error and invalid token');
                } else {
                    auditLogger.unauthorizedAccess('ProtectedRoute', 'API error');
                }
                setIsAuthenticated(false);
                clearToken();
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