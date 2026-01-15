// Secure token storage utility
// Uses sessionStorage as backup (cleared when tab closes) instead of localStorage
// In-memory storage is primary (cleared on page refresh)

// In-memory token storage (cleared on page refresh)
let tokenCache = null;

/**
 * Set token in secure storage
 * @param {string} token - The authentication token
 */
export const setToken = (token) => {
  tokenCache = token;
  // Optionally store in sessionStorage as backup (less secure but better than localStorage)
  // sessionStorage is cleared when tab closes
  if (token) {
    sessionStorage.setItem('token', token);
    // Clean up old localStorage tokens
    localStorage.removeItem('token');
  } else {
    clearToken();
  }
};

/**
 * Get token from secure storage
 * @returns {string|null} The authentication token or null
 */
export const getToken = () => {
  // First check in-memory cache
  if (tokenCache) {
    return tokenCache;
  }
  
  // Fallback to sessionStorage
  const sessionToken = sessionStorage.getItem('token');
  if (sessionToken) {
    tokenCache = sessionToken;
    return sessionToken;
  }
  
  // Last resort: check localStorage (for migration purposes)
  // This should be removed after all code is migrated
  const localToken = localStorage.getItem('token');
  if (localToken) {
    // Migrate to sessionStorage and clear localStorage
    sessionStorage.setItem('token', localToken);
    localStorage.removeItem('token');
    tokenCache = localToken;
    return localToken;
  }
  
  return null;
};

/**
 * Clear token from all storage locations
 */
export const clearToken = () => {
  tokenCache = null;
  sessionStorage.removeItem('token');
  localStorage.removeItem('token'); // Clean up old localStorage tokens
};

/**
 * Check if token exists and is valid
 * @returns {boolean} True if token exists, false otherwise
 */
export const hasToken = () => {
  return getToken() !== null;
};

/**
 * Validate token format (basic check)
 * @param {string} token - Token to validate
 * @returns {boolean} True if token appears valid, false otherwise
 */
export const isValidTokenFormat = (token) => {
  if (!token || typeof token !== 'string') {
    return false;
  }
  // Basic validation: token should not be empty and should have some length
  return token.trim().length > 0;
};
