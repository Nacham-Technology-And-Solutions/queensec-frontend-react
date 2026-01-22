// Security audit logging utility
// Logs security events for monitoring and investigation

const isDevelopment = process.env.NODE_ENV === 'development';

// Security event types
export const AuditEventType = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT',
    PASSWORD_CHANGE: 'PASSWORD_CHANGE',
    PASSWORD_RESET_REQUEST: 'PASSWORD_RESET_REQUEST',
    REGISTRATION: 'REGISTRATION',
    PAYMENT_INITIATED: 'PAYMENT_INITIATED',
    PAYMENT_COMPLETED: 'PAYMENT_COMPLETED',
    SENSITIVE_DATA_ACCESS: 'SENSITIVE_DATA_ACCESS',
    TOKEN_REFRESH: 'TOKEN_REFRESH',
    UNAUTHORIZED_ACCESS_ATTEMPT: 'UNAUTHORIZED_ACCESS_ATTEMPT',
};

/**
 * Sanitize audit details (remove sensitive data)
 * @param {object} details - Details to sanitize
 * @returns {object} Sanitized details
 */
const sanitizeAuditDetails = (details) => {
    const sensitiveKeys = ['password', 'token', 'access_token', 'credit_card', 'cvv', 'pin'];
    const sanitized = { ...details };
    
    sensitiveKeys.forEach(key => {
        if (sanitized[key]) {
            sanitized[key] = '***REDACTED***';
        }
    });
    
    return sanitized;
};

/**
 * Send audit event to backend
 * @param {object} event - Audit event
 */
const sendAuditEvent = async (event) => {
    try {
        // Only send critical events to reduce load
        const criticalEvents = [
            AuditEventType.LOGIN_FAILURE,
            AuditEventType.UNAUTHORIZED_ACCESS_ATTEMPT,
            AuditEventType.PAYMENT_INITIATED,
            AuditEventType.PAYMENT_COMPLETED,
        ];

        if (criticalEvents.includes(event.eventType)) {
            // Send to backend audit endpoint
            // TODO: Implement when backend endpoint is available
            // await axios.post('/api/audit', event);
        }
    } catch (error) {
        // Don't throw - audit logging should not break app
        if (isDevelopment) {
            console.error('Failed to send audit event:', error);
        }
    }
};

/**
 * Log security event
 * @param {string} eventType - Type of security event
 * @param {object} details - Event details
 */
export const logSecurityEvent = (eventType, details = {}) => {
    const event = {
        timestamp: new Date().toISOString(),
        eventType,
        userAgent: navigator.userAgent,
        url: window.location.href,
        // Don't log sensitive data
        details: sanitizeAuditDetails(details),
    };

    if (isDevelopment) {
        console.log('[AUDIT]', event);
    }

    // In production, send to logging service
    if (process.env.NODE_ENV === 'production') {
        sendAuditEvent(event);
    }
};

/**
 * Helper functions for common events
 */
export const auditLogger = {
    loginSuccess: (email) => {
        logSecurityEvent(AuditEventType.LOGIN_SUCCESS, { email });
    },
    
    loginFailure: (email, reason) => {
        logSecurityEvent(AuditEventType.LOGIN_FAILURE, { email, reason });
    },
    
    logout: (userId) => {
        logSecurityEvent(AuditEventType.LOGOUT, { userId });
    },
    
    paymentInitiated: (amount, currency) => {
        logSecurityEvent(AuditEventType.PAYMENT_INITIATED, { amount, currency });
    },
    
    paymentCompleted: (transactionId, amount) => {
        logSecurityEvent(AuditEventType.PAYMENT_COMPLETED, { transactionId, amount });
    },
    
    unauthorizedAccess: (resource, reason) => {
        logSecurityEvent(AuditEventType.UNAUTHORIZED_ACCESS_ATTEMPT, { resource, reason });
    },
    
    registration: (email) => {
        logSecurityEvent(AuditEventType.REGISTRATION, { email });
    },
};
