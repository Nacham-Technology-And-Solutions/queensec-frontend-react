// Token validation utility
// Validates Laravel Sanctum tokens (format: "id|hash")
// Note: Sanctum tokens cannot be decoded client-side - backend verifies validity

import { getToken } from './tokenStorage';

/**
 * Check if token exists and has valid format
 * @returns {boolean} True if token appears valid
 */
export const isTokenValid = () => {
    const token = getToken();
    if (!token) {
        return false;
    }

    // Laravel Sanctum token format: "id|hash" (e.g., "18|kmKPnwm0mQRKyd3ywwMTLeYH7Ev2JtgSgabPa0mN87bb0716")
    const parts = token.split('|');
    if (parts.length !== 2) {
        return false; // Not a valid Sanctum token format
    }

    // Check if first part is a numeric ID
    const tokenId = parts[0];
    if (!tokenId || !/^\d+$/.test(tokenId)) {
        return false; // Token ID must be numeric
    }

    // Check if second part (hash) exists and has reasonable length
    const tokenHash = parts[1];
    if (!tokenHash || tokenHash.length < 10) {
        return false; // Token hash should be present and have reasonable length
    }

    // Token format is valid
    // Note: We cannot check expiration or validity client-side for Sanctum tokens
    // The backend will verify the token when making API calls
    return true;
};

/**
 * Get token expiration time
 * @returns {number|null} Expiration time in milliseconds, or null if not available
 * Note: Sanctum tokens don't expose expiration client-side - backend handles this
 */
export const getTokenExpiration = () => {
    // Laravel Sanctum tokens don't contain expiration info in the token itself
    // Expiration is managed by the backend database
    // We cannot determine expiration client-side
    return null;
};

/**
 * Check if token is about to expire (within 5 minutes)
 * @returns {boolean} True if token expires soon
 * Note: For Sanctum tokens, we cannot determine expiration client-side
 */
export const isTokenExpiringSoon = () => {
    // Laravel Sanctum tokens don't expose expiration client-side
    // Backend will return 401 if token is expired
    return false;
};

/**
 * Get time until token expiration
 * @returns {number|null} Milliseconds until expiration, or null if not available
 */
export const getTimeUntilExpiration = () => {
    const expiration = getTokenExpiration();
    if (!expiration) return null;
    
    return expiration - Date.now();
};
