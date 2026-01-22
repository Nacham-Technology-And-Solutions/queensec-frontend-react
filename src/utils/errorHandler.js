// Error handling utility for safe error message display
// Prevents information disclosure in production

// Map of safe user-friendly error messages
const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Unable to connect to the server. Please check your internet connection.',
    UNAUTHORIZED: 'Your session has expired. Please log in again.',
    FORBIDDEN: 'You do not have permission to perform this action.',
    NOT_FOUND: 'The requested resource was not found.',
    SERVER_ERROR: 'A server error occurred. Please try again later.',
    VALIDATION_ERROR: 'Please check your input and try again.',
    TIMEOUT_ERROR: 'The request took too long. Please try again.',
    DEFAULT: 'An error occurred. Please try again.',
};

/**
 * Extract safe error message from API response
 * In production, never exposes internal error details
 * @param {Error} error - The error object
 * @param {string} defaultMessage - Default message if error cannot be parsed
 * @returns {string} Safe error message for users
 */
export const getSafeErrorMessage = (error, defaultMessage = ERROR_MESSAGES.DEFAULT) => {
    // In production, never expose internal error details
    if (process.env.NODE_ENV === 'production') {
        // Check error type
        if (!error || !error.response) {
            // Network error or no response
            if (error?.code === 'ECONNABORTED' || error?.message?.includes('timeout')) {
                return ERROR_MESSAGES.TIMEOUT_ERROR;
            }
            return ERROR_MESSAGES.NETWORK_ERROR;
        }

        const status = error.response?.status;
        
        switch (status) {
            case 401:
                return ERROR_MESSAGES.UNAUTHORIZED;
            case 403:
                return ERROR_MESSAGES.FORBIDDEN;
            case 404:
                return ERROR_MESSAGES.NOT_FOUND;
            case 422:
                // Validation errors - show generic message
                return ERROR_MESSAGES.VALIDATION_ERROR;
            case 429:
                return 'Too many requests. Please try again later.';
            case 500:
            case 502:
            case 503:
            case 504:
                return ERROR_MESSAGES.SERVER_ERROR;
            default:
                return defaultMessage;
        }
    }

    // In development, show more details for debugging
    return error?.response?.data?.message || error?.message || defaultMessage;
};

/**
 * Log error details for monitoring
 * In production, sends to error tracking service
 * In development, logs to console
 * @param {Error} error - The error object
 * @param {string} context - Context where error occurred (e.g., 'Login', 'API Request')
 */
export const logError = (error, context = '') => {
    const errorDetails = {
        context,
        timestamp: new Date().toISOString(),
        status: error?.response?.status,
        url: error?.config?.url,
        method: error?.config?.method,
        // Don't log sensitive data like passwords, tokens, etc.
    };

    if (process.env.NODE_ENV === 'production') {
        // In production, send to error tracking service (e.g., Sentry, LogRocket)
        // TODO: Replace console.error with actual logging service
        console.error('Error logged:', errorDetails);
        
        // Example: Send to error tracking service
        // if (window.Sentry) {
        //     window.Sentry.captureException(error, { extra: errorDetails });
        // }
    } else {
        // In development, log full error for debugging
        console.error('Error:', context, error);
        console.error('Error details:', errorDetails);
    }
};

/**
 * Check if error is a network error
 * @param {Error} error - The error object
 * @returns {boolean} True if network error
 */
export const isNetworkError = (error) => {
    return !error?.response && (error?.code === 'ECONNABORTED' || error?.message?.includes('Network Error'));
};

/**
 * Check if error is an authentication error
 * @param {Error} error - The error object
 * @returns {boolean} True if authentication error
 */
export const isAuthError = (error) => {
    return error?.response?.status === 401 || error?.response?.status === 403;
};
