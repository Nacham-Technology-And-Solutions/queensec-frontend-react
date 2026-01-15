// src/api/apiService.jsx
import axios from 'axios';
import { getToken, clearToken } from './tokenStorage';

// Flag to prevent multiple redirects
let isRedirecting = false;

// Function to handle authentication failures
const handleAuthFailure = () => {
    if (isRedirecting) return; // Prevent multiple redirects
    isRedirecting = true;
    
    // Clear token from all storage
    clearToken();
    
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    // Redirect to login page
    // Use window.location for a hard redirect (clears all state)
    if (window.location.pathname !== '/login-page') {
        window.location.href = '/login-page';
    } else {
        isRedirecting = false; // Reset if already on login page
    }
};

// Set base URL for API
// const BASE_URL = 'https://admin.queensecglobal.com/api';
const BASE_URL = process.env.REACT_APP_API_URL || process.env.REACT_APP_API_BASE_URL;

// Validate required environment variables
if (!process.env.REACT_APP_API_TOKEN) {
    console.error('REACT_APP_API_TOKEN is not set. API requests may fail.');
    // In production, consider showing user-friendly error or throwing error
    if (process.env.NODE_ENV === 'production') {
        console.error('REACT_APP_API_TOKEN is required in production environment.');
    }
}

// Create an axios instance (if you want to add default headers, interceptors, etc.)
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'API-Token': process.env.REACT_APP_API_TOKEN,
    },
    timeout: 30000, // 30 seconds timeout
});

// Adding a token to headers before each request
apiClient.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        // Reset redirect flag on new request
        isRedirecting = false;
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor to handle authentication errors globally
apiClient.interceptors.response.use(
    (response) => {
        // Reset redirect flag on successful response
        isRedirecting = false;
        return response;
    },
    (error) => {
        // Handle authentication errors (401 Unauthorized, 403 Forbidden)
        if (error.response) {
            const status = error.response.status;
            
            // Don't redirect for login/register endpoints (they handle their own errors)
            const isAuthEndpoint = error.config?.url?.includes('/auth/user/login') || 
                                   error.config?.url?.includes('/auth/user/register') ||
                                   error.config?.url?.includes('/auth/user/forgot-password') ||
                                   error.config?.url?.includes('/auth/user/reset-password');
            
            if ((status === 401 || status === 403) && !isAuthEndpoint) {
                // Clear token and redirect to login
                handleAuthFailure();
                
                // Return a rejected promise with a user-friendly message
                return Promise.reject({
                    ...error,
                    message: 'Your session has expired. Please log in again.',
                    isAuthError: true
                });
            }
        }
        
        // Reset redirect flag for non-auth errors
        isRedirecting = false;
        return Promise.reject(error);
    }
);

// Function to get data
export const getData = async (endpoint, data, defaultErrorMessage) => {
    try {
        const response = await apiClient.get(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(defaultErrorMessage ?? 'Error fetching data: ', error);
        // Add null checks to prevent crashes
        const errorMessage = error?.response?.data?.message || error?.message || defaultErrorMessage || 'An error occurred';
        if (errorMessage) {
            alert(errorMessage);
        }
        throw error?.response?.data || { message: errorMessage };
    }
};

// Function to post data
export const postData = async (endpoint, data, defaultErrorMessage) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(defaultErrorMessage ?? 'Error posting data: ', error);
        // Add null checks to prevent crashes
        const errorMessage = error?.response?.data?.message || error?.message || defaultErrorMessage || 'An error occurred';
        if (errorMessage) {
            alert(errorMessage);
        }
        throw error?.response?.data || { message: errorMessage };
    }
};

// Function to put data
export const putData = async (endpoint, data, defaultErrorMessage) => {
    try {
        const response = await apiClient.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(defaultErrorMessage ?? 'Error updating data: ', error);
        // Add null checks to prevent crashes
        const errorMessage = error?.response?.data?.message || error?.message || defaultErrorMessage || 'An error occurred';
        if (errorMessage) {
            alert(errorMessage);
        }
        throw error?.response?.data || { message: errorMessage };
    }
};

// Function to delete data
export const deleteData = async (endpoint, defaultErrorMessage) => {
    try {
        const response = await apiClient.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error(defaultErrorMessage ?? 'Error deleting data: ', error);
        // Add null checks to prevent crashes
        const errorMessage = error?.response?.data?.message || error?.message || defaultErrorMessage || 'An error occurred';
        if (errorMessage) {
            alert(errorMessage);
        }
        throw error?.response?.data || { message: errorMessage };
    }
};
