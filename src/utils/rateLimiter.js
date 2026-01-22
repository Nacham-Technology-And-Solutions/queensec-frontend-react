// Client-side rate limiter utility
// Note: Real rate limiting should be implemented on backend
// This provides basic client-side protection against brute force attacks

/**
 * Rate Limiter class
 * Tracks attempts per key within a time window
 */
class RateLimiter {
    constructor(maxAttempts, windowMs) {
        this.maxAttempts = maxAttempts;
        this.windowMs = windowMs;
        this.attempts = new Map();
    }

    /**
     * Check if request is allowed
     * @param {string} key - Unique key to track (e.g., email, IP)
     * @returns {{allowed: boolean, remaining: number, resetTime: number}} Rate limit status
     */
    isAllowed(key) {
        const now = Date.now();
        const record = this.attempts.get(key);

        if (!record) {
            // First attempt
            this.attempts.set(key, { count: 1, resetTime: now + this.windowMs });
            return { 
                allowed: true, 
                remaining: this.maxAttempts - 1,
                resetTime: now + this.windowMs
            };
        }

        if (now > record.resetTime) {
            // Window expired, reset
            this.attempts.set(key, { count: 1, resetTime: now + this.windowMs });
            return { 
                allowed: true, 
                remaining: this.maxAttempts - 1,
                resetTime: now + this.windowMs
            };
        }

        if (record.count >= this.maxAttempts) {
            // Rate limit exceeded
            return { 
                allowed: false, 
                remaining: 0,
                resetTime: record.resetTime
            };
        }

        // Increment count
        record.count++;
        this.attempts.set(key, record);
        return { 
            allowed: true, 
            remaining: this.maxAttempts - record.count,
            resetTime: record.resetTime
        };
    }

    /**
     * Reset attempts for a key
     * @param {string} key - Key to reset
     */
    reset(key) {
        this.attempts.delete(key);
    }

    /**
     * Get remaining attempts for a key
     * @param {string} key - Key to check
     * @returns {number} Remaining attempts
     */
    getRemaining(key) {
        const record = this.attempts.get(key);
        if (!record) return this.maxAttempts;
        
        const now = Date.now();
        if (now > record.resetTime) return this.maxAttempts;
        
        return Math.max(0, this.maxAttempts - record.count);
    }

    /**
     * Clear all attempts (useful for testing or cleanup)
     */
    clear() {
        this.attempts.clear();
    }
}

// Create rate limiters for different operations
// Login: 5 attempts per 15 minutes
export const loginRateLimiter = new RateLimiter(5, 15 * 60 * 1000);

// Registration: 3 attempts per hour
export const registrationRateLimiter = new RateLimiter(3, 60 * 60 * 1000);

// Password reset: 3 attempts per hour
export const passwordResetRateLimiter = new RateLimiter(3, 60 * 60 * 1000);

// General API: 100 requests per minute
export const apiRateLimiter = new RateLimiter(100, 60 * 1000);

/**
 * Get user-friendly rate limit message
 * @param {number} resetTime - Timestamp when rate limit resets
 * @returns {string} User-friendly message
 */
export const getRateLimitMessage = (resetTime) => {
    const now = Date.now();
    const remainingMs = resetTime - now;
    const remainingMinutes = Math.ceil(remainingMs / (60 * 1000));
    
    if (remainingMinutes <= 1) {
        return 'Please try again in a moment.';
    }
    
    return `Too many attempts. Please try again in ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}.`;
};
