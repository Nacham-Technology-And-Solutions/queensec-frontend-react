// Security utilities for HTTPS enforcement and security checks

/**
 * Check if current page is served over HTTPS
 * @returns {boolean} True if secure context
 */
export const isSecureContext = () => {
    return window.isSecureContext || window.location.protocol === 'https:';
};

/**
 * Enforce HTTPS in production only
 * Disabled in development environment
 * Redirects HTTP to HTTPS if not in secure context (production only)
 * @returns {boolean} True if secure or in development, false if redirected
 */
export const enforceHTTPS = () => {
    // Only enforce HTTPS in production - disabled in development
    if (process.env.NODE_ENV === 'production') {
        if (!isSecureContext()) {
            // Redirect to HTTPS version
            const httpsUrl = window.location.href.replace('http:', 'https:');
            window.location.replace(httpsUrl);
            return false;
        }
    }
    // In development, always return true (HTTPS enforcement disabled)
    return true;
};

/**
 * Validate API URL uses HTTPS in production only
 * Disabled in development environment - allows HTTP URLs in dev
 * @param {string} url - The API URL to validate
 * @returns {boolean} True if valid
 */
export const validateAPIURL = (url) => {
    if (!url) return false;
    
    // Only validate HTTPS in production - disabled in development
    if (process.env.NODE_ENV === 'production') {
        if (url && !url.startsWith('https://')) {
            console.error('API URL must use HTTPS in production');
            return false;
        }
    }
    // In development, allow HTTP URLs
    return true;
};

/**
 * Check if running in production environment
 * @returns {boolean} True if production
 */
export const isProduction = () => {
    return process.env.NODE_ENV === 'production';
};
