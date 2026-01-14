// src/components/LoadingSpinner/LoadingSpinner.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './LoadingSpinner.scss';

/**
 * LoadingSpinner Component
 * Displays a loading spinner for lazy-loaded routes
 * Used as fallback for React Suspense
 */
const LoadingSpinner = ({ message = 'Loading...' }) => {
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner">
                <FontAwesomeIcon icon={faSpinner} spin={true} fontSize='40px' />
                <p className="loading-message">{message}</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;



