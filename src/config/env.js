// Centralized environment variable configuration
// Standardizes environment variable access across the application

/**
 * Get environment variable with optional default and required flag
 * @param {string} name - Environment variable name
 * @param {any} defaultValue - Default value if not set
 * @param {boolean} required - Whether variable is required
 * @returns {any} Environment variable value or default
 */
const getEnvVar = (name, defaultValue = null, required = false) => {
    const value = process.env[name];
    
    if (required && !value) {
        console.error(`Required environment variable ${name} is not set`);
        if (process.env.NODE_ENV === 'production') {
            throw new Error(`Required environment variable ${name} is not set`);
        }
    }
    
    return value || defaultValue;
};

/**
 * Application configuration from environment variables
 */
export const config = {
    // API Configuration
    api: {
        baseURL: getEnvVar('REACT_APP_API_BASE_URL', null, true),
        token: getEnvVar('REACT_APP_API_TOKEN', null, true),
        timeout: parseInt(getEnvVar('REACT_APP_API_TIMEOUT', '30000'), 10),
    },

    // App Configuration
    app: {
        name: getEnvVar('REACT_APP_NAME', 'Queensec'),
        version: getEnvVar('REACT_APP_VERSION', '1.0.0'),
        environment: getEnvVar('NODE_ENV', 'development'),
    },

    // Feature Flags
    features: {
        enableAnalytics: getEnvVar('REACT_APP_ENABLE_ANALYTICS', 'false') === 'true',
        enableErrorTracking: getEnvVar('REACT_APP_ENABLE_ERROR_TRACKING', 'false') === 'true',
    },

    // External Services
    services: {
        flutterwavePublicKey: getEnvVar('REACT_APP_FLUTTERWAVE_PUBLIC_KEY', ''),
    },

    // URLs
    urls: {
        baseUrl: getEnvVar('REACT_APP_BASE_URL', window.location.origin),
        validatorUrl: getEnvVar('REACT_APP_VALIDATOR_URL', 'https://queensec.netlify.app/validator'),
        ticketStatusUrl: getEnvVar('REACT_APP_TICKET_STATUS_URL', 'https://queensec.netlify.app/ticket-status'),
        defaultImageUrl: getEnvVar('REACT_APP_DEFAULT_IMAGE_URL', 'https://via.placeholder.com/150'),
    },
};

// Validate configuration on load
if (config.api.baseURL && !config.api.baseURL.startsWith('http')) {
    console.warn('API base URL should start with http:// or https://');
}

export default config;
