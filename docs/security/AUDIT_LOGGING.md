# Security Audit Logging

## Overview

Security audit logging tracks security-related events in the application for monitoring, investigation, and compliance purposes.

## What Events Are Logged

The following security events are logged:

### Authentication Events
- **LOGIN_SUCCESS:** Successful user login
- **LOGIN_FAILURE:** Failed login attempt (with reason)
- **LOGOUT:** User logout

### Registration Events
- **REGISTRATION:** New user registration

### Payment Events
- **PAYMENT_INITIATED:** Payment process started
- **PAYMENT_COMPLETED:** Payment successfully completed

### Security Events
- **UNAUTHORIZED_ACCESS_ATTEMPT:** Attempted access to protected resource without authorization
- **TOKEN_REFRESH:** Token refresh operation
- **PASSWORD_CHANGE:** Password change request
- **PASSWORD_RESET_REQUEST:** Password reset request
- **SENSITIVE_DATA_ACCESS:** Access to sensitive data

## Implementation

### Frontend
Audit logging is implemented in `src/utils/auditLogger.js`:
- Logs events with timestamp, user agent, URL, and sanitized details
- In development: Logs to console
- In production: Sends critical events to backend audit endpoint

### Backend Requirements
The backend should provide:
- `/api/audit` endpoint for receiving audit events
- Secure storage of audit logs
- Log retention policy
- Access controls for audit logs

## Event Details

Each audit event includes:
- **timestamp:** ISO 8601 timestamp
- **eventType:** Type of security event
- **userAgent:** Browser user agent
- **url:** Current page URL
- **details:** Event-specific details (sanitized to remove sensitive data)

## Sensitive Data Handling

The following fields are automatically redacted from audit logs:
- `password`
- `token`
- `access_token`
- `credit_card`
- `cvv`
- `pin`

## Usage Examples

### Login Success
```javascript
import { auditLogger } from '../utils/auditLogger';

auditLogger.loginSuccess(email);
```

### Login Failure
```javascript
import { auditLogger } from '../utils/auditLogger';

auditLogger.loginFailure(email, 'Invalid credentials');
```

### Payment Initiated
```javascript
import { auditLogger } from '../utils/auditLogger';

auditLogger.paymentInitiated(amount, 'NGN');
```

### Unauthorized Access
```javascript
import { auditLogger } from '../utils/auditLogger';

auditLogger.unauthorizedAccess('ProtectedRoute', 'Invalid token');
```

## Log Retention Policy

### Recommended Retention
- **Critical Events:** 7 years (compliance)
- **Standard Events:** 1 year
- **Debug Events:** 30 days

### Storage Requirements
- Secure, encrypted storage
- Immutable logs (append-only)
- Regular backups
- Access logging for audit log access

## Access Controls

### Who Can Access Audit Logs
- Security team
- Compliance officers
- System administrators
- Authorized auditors

### Access Logging
- All access to audit logs should be logged
- Include: who, what, when, why

## Privacy Considerations

### GDPR Compliance
- Audit logs may contain personal data
- Ensure compliance with data protection regulations
- Implement data retention policies
- Provide data deletion capabilities

### User Rights
- Right to access audit logs related to their account
- Right to deletion (where legally permitted)
- Right to data portability

## Monitoring and Alerts

### Critical Events to Monitor
- Multiple failed login attempts
- Unauthorized access attempts
- Payment failures
- Token refresh failures

### Alert Thresholds
- 5+ failed logins in 15 minutes
- 3+ unauthorized access attempts in 1 hour
- Payment failures above normal rate

## Investigation

### Common Use Cases
1. **Account Compromise:** Review login events and unauthorized access attempts
2. **Payment Issues:** Review payment initiation and completion events
3. **Security Incidents:** Review all security events during incident timeframe

### Log Analysis
- Use log aggregation tools (ELK, Splunk, etc.)
- Create dashboards for common queries
- Set up automated reports

## Backend Implementation

### Endpoint Specification
```
POST /api/audit
Content-Type: application/json

{
  "timestamp": "2024-01-01T00:00:00.000Z",
  "eventType": "LOGIN_SUCCESS",
  "userAgent": "Mozilla/5.0...",
  "url": "https://app.example.com/login",
  "details": {
    "email": "user@example.com"
  }
}
```

### Response
```
200 OK
{
  "success": true,
  "message": "Audit event logged"
}
```

## Testing

### Development
- Audit events are logged to console
- Verify events are created correctly
- Check sensitive data is redacted

### Production
- Verify events are sent to backend
- Monitor backend for received events
- Test alert thresholds

## Compliance

### Standards
- **PCI DSS:** Payment-related events
- **GDPR:** Personal data handling
- **SOC 2:** Security event logging
- **ISO 27001:** Security management

## References

- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- [NIST Security Logging](https://csrc.nist.gov/publications/detail/sp/800-92/final)
