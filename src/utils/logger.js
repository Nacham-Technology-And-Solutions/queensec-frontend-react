// Centralized logging utility
// Prevents sensitive data exposure in production console

const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * Helper to sanitize data before logging
 * Removes sensitive information from logs
 * @param {any} data - Data to sanitize
 * @returns {any} Sanitized data
 */
export const sanitizeForLogging = (data) => {
    if (!data || typeof data !== 'object') return data;
    
    const sensitiveKeys = [
        'password',
        'token',
        'access_token',
        'refresh_token',
        'api_key',
        'secret',
        'ssn',
        'credit_card',
        'cvv',
        'pin',
        'authorization',
    ];
    
    const sanitized = { ...data };
    
    sensitiveKeys.forEach(key => {
        if (sanitized[key]) {
            sanitized[key] = '***REDACTED***';
        }
    });
    
    // Recursively sanitize nested objects
    Object.keys(sanitized).forEach(key => {
        if (sanitized[key] && typeof sanitized[key] === 'object' && !Array.isArray(sanitized[key])) {
            sanitized[key] = sanitizeForLogging(sanitized[key]);
        }
    });
    
    return sanitized;
};

/**
 * Logger utility with environment-aware logging
 */
export const logger = {
    /**
     * Log message (development only)
     * @param {...any} args - Arguments to log
     */
    log: (...args) => {
        if (isDevelopment) {
            console.log(...args);
        }
    },

    /**
     * Error logging - sanitizes sensitive data
     * @param {string} message - Error message
     * @param {Error|null} error - Error object
     * @param {string} context - Context where error occurred
     */
    error: (message, error = null, context = '') => {
        if (isDevelopment) {
            console.error(`[${context}]`, message, error);
        } else {
            // In production, send to error tracking service
            // Remove sensitive data before logging
            const sanitizedError = error ? {
                message: error.message,
                status: error?.response?.status,
                url: error?.config?.url,
                // Don't log: tokens, passwords, personal data
                ...sanitizeForLogging(error?.response?.data || {}),
            } : null;
            
            // Send to error tracking service (e.g., Sentry)
            // TODO: Replace with actual logging service
            // if (window.Sentry) {
            //     window.Sentry.captureException(error, { 
            //         extra: { message, context, sanitizedError } 
            //     });
            // }
            
            // Log sanitized error to console in production (for now)
            console.error(`[${context}]`, message, sanitizedError);
        }
    },

    /**
     * Warn logging (development only)
     * @param {...any} args - Arguments to log
     */
    warn: (...args) => {
        if (isDevelopment) {
            console.warn(...args);
        }
    },

    /**
     * Info logging (development only)
     * @param {...any} args - Arguments to log
     */
    info: (...args) => {
        if (isDevelopment) {
            console.info(...args);
        }
    },

    /**
     * Debug logging (development only)
     * @param {...any} args - Arguments to log
     */
    debug: (...args) => {
        if (isDevelopment) {
            console.debug(...args);
        }
    },
};

export default logger;
