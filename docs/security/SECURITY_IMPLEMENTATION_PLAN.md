# Security Implementation Plan

## Overview
This document outlines the security fixes required to address critical and high-priority vulnerabilities identified in the codebase security review. The fixes are prioritized by severity and impact.

**Total Issues Identified:** 20  
**This Document Covers:** All 20 Security Fixes (Critical, High, Medium, and Low Priority)

---

## Priority 1: Critical Security Fixes (Items 1-5)

### Fix #1: Remove Password Storage from localStorage

**Severity:** Critical  
**Risk:** Password exposure via XSS attacks  
**Impact:** Complete credential compromise

#### Current Issue
- Passwords are stored in plaintext in `localStorage` during registration
- Location: `src/pages/Registration/SignUpScreenFourSecurityInfo.jsx` (lines 63-64)

#### Implementation Steps
1. **Remove password storage from localStorage**
   - File: `src/pages/Registration/SignUpScreenFourSecurityInfo.jsx`
   - Remove lines 63-64:
     ```javascript
     // REMOVE THESE LINES:
     localStorage.setItem('password', securityInfo.password);
     localStorage.setItem('password_confirmation', securityInfo.confirmPassword);
     ```
   
2. **Update registration payload**
   - Use `securityInfo.password` and `securityInfo.confirmPassword` directly from state
   - Change line 82-83 from:
     ```javascript
     password: localStorage.getItem('password'),
     password_confirmation: localStorage.getItem('password_confirmation'),
     ```
   - To:
     ```javascript
     password: securityInfo.password,
     password_confirmation: securityInfo.confirmPassword,
     ```

3. **Clear password from state after submission**
   - Add cleanup after successful registration:
     ```javascript
     setSecurityInfo({ password: '', confirmPassword: '' });
     ```

4. **Verify no other password storage**
   - Search codebase for any other `localStorage.setItem('password'` occurrences
   - Remove all instances

#### Testing Checklist
- [ ] Registration completes successfully without storing password
- [ ] Password is not found in localStorage after registration
- [ ] Registration fails gracefully if password fields are empty
- [ ] Password confirmation validation still works

#### Files to Modify
- `src/pages/Registration/SignUpScreenFourSecurityInfo.jsx`

---

### Fix #2: Remove Hardcoded API Token Fallback

**Severity:** Critical  
**Risk:** API token compromise if environment variable is missing  
**Impact:** Unauthorized API access

#### Current Issue
- Hardcoded fallback token `'queensec.v2'` in API service
- Location: `src/utils/apiServce.jsx` (line 15)

#### Implementation Steps
1. **Remove hardcoded fallback**
   - File: `src/utils/apiServce.jsx`
   - Change line 15 from:
     ```javascript
     'API-Token': process.env.REACT_APP_API_TOKEN || 'queensec.v2',
     ```
   - To:
     ```javascript
     'API-Token': process.env.REACT_APP_API_TOKEN,
     ```

2. **Add validation for required environment variables**
   - Add at the top of `apiServce.jsx`:
     ```javascript
     if (!process.env.REACT_APP_API_TOKEN) {
       console.error('REACT_APP_API_TOKEN is not set. API requests may fail.');
       // In production, consider throwing an error or showing user-friendly message
     }
     ```

3. **Update .env.example file**
   - Ensure `REACT_APP_API_TOKEN` is documented as required
   - Add clear instructions for setting up environment variables

4. **Add runtime check (optional but recommended)**
   - Show user-friendly error if token is missing in production:
     ```javascript
     if (process.env.NODE_ENV === 'production' && !process.env.REACT_APP_API_TOKEN) {
       // Log error to monitoring service
       // Show user-friendly error message
     }
     ```

#### Testing Checklist
- [ ] API requests fail gracefully if `REACT_APP_API_TOKEN` is not set
- [ ] No hardcoded token appears in built JavaScript bundle
- [ ] Environment variable is properly loaded in development
- [ ] Error handling works correctly when token is missing

#### Files to Modify
- `src/utils/apiServce.jsx`
- `.env.example` (if exists, or create one)

---

### Fix #3: Implement Input Validation and Sanitization

**Severity:** Critical  
**Risk:** Injection attacks, XSS, data corruption  
**Impact:** System compromise, data breach

#### Current Issue
- No client-side input validation before API calls
- User input is sent directly to API without sanitization
- Multiple vulnerable entry points: Login, Registration, Payment forms

#### Implementation Steps

1. **Create input validation utility**
   - Create new file: `src/utils/inputValidation.js`
   - Implement validation functions:
     ```javascript
     // Email validation
     export const validateEmail = (email) => {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return emailRegex.test(email);
     };

     // Password strength validation
     export const validatePassword = (password) => {
       const minLength = 8;
       const hasUpperCase = /[A-Z]/.test(password);
       const hasLowerCase = /[a-z]/.test(password);
       const hasNumber = /\d/.test(password);
       const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
       
       return {
         isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar,
         errors: {
           minLength: password.length < minLength,
           hasUpperCase: !hasUpperCase,
           hasLowerCase: !hasLowerCase,
           hasNumber: !hasNumber,
           hasSpecialChar: !hasSpecialChar
         }
       };
     };

     // Sanitize string input (remove potentially dangerous characters)
     export const sanitizeString = (input, maxLength = 255) => {
       if (typeof input !== 'string') return '';
       return input
         .trim()
         .slice(0, maxLength)
         .replace(/[<>]/g, ''); // Remove < and > to prevent XSS
     };

     // Validate phone number (Nigerian format)
     export const validatePhone = (phone) => {
       const phoneRegex = /^(\+234|0)[789][01]\d{8}$/;
       return phoneRegex.test(phone.replace(/\s/g, ''));
     };

     // Validate numeric input
     export const validateNumber = (value, min = 0, max = Number.MAX_SAFE_INTEGER) => {
       const num = parseFloat(value);
       return !isNaN(num) && num >= min && num <= max;
     };

     // Validate required fields
     export const validateRequired = (value) => {
       return value !== null && value !== undefined && value.toString().trim() !== '';
     };
     ```

2. **Update LoginPage.jsx**
   - Add validation before API call:
     ```javascript
     import { validateEmail, sanitizeString } from '../utils/inputValidation';

     const handleSubmit = async () => {
       // Sanitize inputs
       const sanitizedEmail = sanitizeString(loginInfo.email);
       const sanitizedPassword = sanitizeString(loginInfo.password, 128);

       // Validate email
       if (!validateEmail(sanitizedEmail)) {
         alert('Please enter a valid email address.');
         setLoading(false);
         return;
       }

       // Validate password is not empty
       if (!sanitizedPassword || sanitizedPassword.length < 1) {
         alert('Password is required.');
         setLoading(false);
         return;
       }

       // Use sanitized values in payload
       const payload = {
         email: sanitizedEmail,
         password: sanitizedPassword,
         'login-type': 'normal',
       };
       // ... rest of the code
     };
     ```

3. **Update Registration forms**
   - Apply validation to all registration screens:
     - `SignUpScreenTwoBasicInfo.jsx` - Validate names, business name
     - `SignUpScreenThreeContactInfo.jsx` - Validate email, phone, state
     - `SignUpScreenFourSecurityInfo.jsx` - Validate password strength

4. **Update Payment forms**
   - Add validation for:
     - Amount fields (numeric, positive, reasonable limits)
     - Tax ID format
     - Vehicle plate numbers
     - Driver names and phone numbers

5. **Add input length limits**
   - Set `maxLength` attributes on all input fields
   - Enforce limits in validation functions

#### Testing Checklist
- [ ] Invalid email addresses are rejected
- [ ] Weak passwords are rejected with clear error messages
- [ ] XSS attempts in input fields are sanitized
- [ ] SQL injection patterns are blocked (if applicable)
- [ ] All required fields are validated
- [ ] Numeric fields only accept valid numbers
- [ ] Input length limits are enforced

#### Files to Create
- `src/utils/inputValidation.js`

#### Files to Modify
- `src/pages/LoginPage.jsx`
- `src/pages/Registration/SignUpScreenTwoBasicInfo.jsx`
- `src/pages/Registration/SignUpScreenThreeContactInfo.jsx`
- `src/pages/Registration/SignUpScreenFourSecurityInfo.jsx`
- `src/pages/Vendor/MakePayment/VMPScreenOnePayee.jsx`
- `src/pages/Vendor/MakePayment/VMPScreenTwoTripData.jsx`
- `src/pages/Vendor/MakePayment/VMPScreenThreeCategory.jsx`
- `src/pages/Vendor/MakePayment/VMPScreenFourBankDetails.jsx`
- `src/pages/Regular/MakePayment/MPScreenFourBankDetails.jsx`
- All other forms with user input

---

### Fix #4: Secure Token Storage (Move from localStorage)

**Severity:** Critical  
**Risk:** Token theft via XSS attacks  
**Impact:** Session hijacking, unauthorized access

#### Current Issue
- JWT tokens stored in `localStorage` (accessible to JavaScript)
- Location: `src/pages/LoginPage.jsx` (line 77), `src/utils/apiServce.jsx` (line 23)
- 347+ instances of localStorage usage throughout codebase

#### Implementation Steps

**Note:** This fix requires backend support for httpOnly cookies. If backend cannot support cookies, implement memory-based storage as a temporary measure.

1. **Option A: httpOnly Cookies (Preferred - Requires Backend)**
   - Backend must set httpOnly cookies on login response
   - Frontend removes localStorage token storage
   - Update `apiServce.jsx` to not read from localStorage:
     ```javascript
     // Remove this:
     const token = localStorage.getItem('token');
     if (token) {
       config.headers['Authorization'] = `Bearer ${token}`;
     }
     
     // Replace with cookie-based approach (cookies sent automatically)
     // Or use axios withCredentials: true if backend supports it
     ```

2. **Option B: Memory Storage (Temporary Solution)**
   - Create secure token storage utility:
     - File: `src/utils/tokenStorage.js`
     ```javascript
     // In-memory token storage (cleared on page refresh)
     let tokenCache = null;

     export const setToken = (token) => {
       tokenCache = token;
       // Optionally store in sessionStorage as backup (less secure but better than localStorage)
       // sessionStorage is cleared when tab closes
       if (token) {
         sessionStorage.setItem('token', token);
       }
     };

     export const getToken = () => {
       return tokenCache || sessionStorage.getItem('token');
     };

     export const clearToken = () => {
       tokenCache = null;
       sessionStorage.removeItem('token');
       localStorage.removeItem('token'); // Clean up old localStorage tokens
     };
     ```

3. **Update LoginPage.jsx**
   - Replace localStorage token storage:
     ```javascript
     import { setToken } from '../utils/tokenStorage';
     
     // Replace line 77:
     // localStorage.setItem("token", response.data.data.access_token);
     setToken(response.data.data.access_token);
     ```

4. **Update apiServce.jsx**
   - Replace localStorage token retrieval:
     ```javascript
     import { getToken } from '../utils/tokenStorage';
     
     apiClient.interceptors.request.use(
       (config) => {
         const token = getToken();
         if (token) {
           config.headers['Authorization'] = `Bearer ${token}`;
         }
         return config;
       },
       (error) => Promise.reject(error)
     );
     ```

5. **Update UserContext.jsx**
   - Update signOut to clear token:
     ```javascript
     import { clearToken } from '../utils/tokenStorage';
     
     const signOut = () => {
       setUser(null);
       clearToken(); // Clear token from all storage
       localStorage.removeItem('user');
       // Clear all other localStorage items if needed
     };
     ```

6. **Gradual Migration Strategy**
   - Phase 1: Implement memory storage
   - Phase 2: Remove all localStorage token references
   - Phase 3: Work with backend to implement httpOnly cookies
   - Phase 4: Migrate to cookie-based authentication

#### Testing Checklist
- [ ] Token is not stored in localStorage after login
- [ ] Token is accessible for API requests
- [ ] Token is cleared on logout
- [ ] Token persists during session (if using sessionStorage)
- [ ] Token is cleared on page refresh (if using memory only)
- [ ] All API requests include Authorization header

#### Files to Create
- `src/utils/tokenStorage.js`

#### Files to Modify
- `src/pages/LoginPage.jsx`
- `src/utils/apiServce.jsx`
- `src/context/UserContext.jsx`
- All files that read `localStorage.getItem('token')` (search and replace)

---

### Fix #5: Sanitize Error Messages

**Severity:** Critical  
**Risk:** Information disclosure, system architecture exposure  
**Impact:** Attackers gain system knowledge

#### Current Issue
- Detailed error messages exposed to users
- Stack traces may leak in development mode
- API error responses shown directly to users
- Location: `src/utils/apiServce.jsx`, `src/pages/LoginPage.jsx`

#### Implementation Steps

1. **Create error handling utility**
   - File: `src/utils/errorHandler.js`
   ```javascript
   // Map of safe user-friendly error messages
   const ERROR_MESSAGES = {
     NETWORK_ERROR: 'Unable to connect to the server. Please check your internet connection.',
     UNAUTHORIZED: 'Your session has expired. Please log in again.',
     FORBIDDEN: 'You do not have permission to perform this action.',
     NOT_FOUND: 'The requested resource was not found.',
     SERVER_ERROR: 'A server error occurred. Please try again later.',
     VALIDATION_ERROR: 'Please check your input and try again.',
     DEFAULT: 'An error occurred. Please try again.',
   };

   // Extract safe error message from API response
   export const getSafeErrorMessage = (error, defaultMessage = ERROR_MESSAGES.DEFAULT) => {
     // In production, never expose internal error details
     if (process.env.NODE_ENV === 'production') {
       // Check error type
       if (!error.response) {
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
         case 500:
         case 502:
         case 503:
           return ERROR_MESSAGES.SERVER_ERROR;
         default:
           return defaultMessage;
       }
     }

     // In development, show more details for debugging
     return error?.response?.data?.message || error?.message || defaultMessage;
   };

   // Log error details server-side (for monitoring)
   export const logError = (error, context = '') => {
     if (process.env.NODE_ENV === 'production') {
       // Send to error tracking service (e.g., Sentry, LogRocket)
       // console.error should be replaced with actual logging service
       console.error('Error logged:', {
         context,
         status: error?.response?.status,
         // Don't log sensitive data
       });
     } else {
       // In development, log full error for debugging
       console.error('Error:', context, error);
     }
   };
   ```

2. **Update apiServce.jsx**
   - Replace error handling:
     ```javascript
     import { getSafeErrorMessage, logError } from './errorHandler';

     export const getData = async (endpoint, data, defaultErrorMessage) => {
       try {
         const response = await apiClient.get(endpoint, data);
         return response.data;
       } catch (error) {
         logError(error, `GET ${endpoint}`);
         const errorMessage = getSafeErrorMessage(error, defaultErrorMessage);
         // Use toast or user-friendly notification instead of alert
         if (errorMessage) {
           // Replace alert with toast notification
           // toast.error(errorMessage);
           alert(errorMessage); // Temporary until toast is implemented
         }
         throw error?.response?.data || { message: errorMessage };
       }
     };

     // Apply same pattern to postData, putData, deleteData
     ```

3. **Update LoginPage.jsx**
   - Replace error handling:
     ```javascript
     import { getSafeErrorMessage, logError } from '../utils/errorHandler';

     catch (error) {
       logError(error, 'Login');
       const errorMessage = getSafeErrorMessage(error, 'An error occurred during login');
       alert(errorMessage);
       setLoading(false);
     }
     ```

4. **Update all error handlers**
   - Search for all `catch` blocks with `error.response.data.message`
   - Replace with `getSafeErrorMessage(error)`
   - Add `logError` calls for monitoring

5. **Remove console.error in production**
   - Replace all `console.error` with `logError` utility
   - Ensure sensitive data is not logged

#### Testing Checklist
- [ ] Generic error messages shown in production
- [ ] Detailed errors only in development mode
- [ ] No stack traces exposed to users
- [ ] Error logging works correctly
- [ ] Network errors handled gracefully
- [ ] Authentication errors prompt re-login

#### Files to Create
- `src/utils/errorHandler.js`

#### Files to Modify
- `src/utils/apiServce.jsx`
- `src/pages/LoginPage.jsx`
- All files with error handling (search for `catch` blocks)

---

## Priority 2: High Priority Security Fixes (Items 6-10)

### Fix #6: Implement CSRF Protection

**Severity:** High  
**Risk:** Cross-Site Request Forgery attacks  
**Impact:** Unauthorized actions on behalf of users

#### Current Issue
- No CSRF protection implemented
- All API requests are vulnerable to CSRF attacks

#### Implementation Steps

**Note:** CSRF protection typically requires backend support. This implementation focuses on frontend measures that can be implemented immediately.

1. **Add CSRF token support (if backend provides)**
   - File: `src/utils/apiServce.jsx`
   ```javascript
   // Get CSRF token from meta tag or cookie (if backend sets it)
   const getCsrfToken = () => {
     // Option 1: From meta tag (if backend injects it)
     const metaTag = document.querySelector('meta[name="csrf-token"]');
     if (metaTag) {
       return metaTag.getAttribute('content');
     }
     
     // Option 2: From cookie (if backend sets httpOnly cookie)
     // Cookies are automatically sent, but we can read non-httpOnly cookies
     const cookies = document.cookie.split(';');
     const csrfCookie = cookies.find(c => c.trim().startsWith('XSRF-TOKEN='));
     if (csrfCookie) {
       return csrfCookie.split('=')[1];
     }
     
     return null;
   };

   // Add CSRF token to requests
   apiClient.interceptors.request.use(
     (config) => {
       const csrfToken = getCsrfToken();
       if (csrfToken) {
         config.headers['X-CSRF-TOKEN'] = csrfToken;
         // Or 'X-XSRF-TOKEN' depending on backend convention
       }
       const token = getToken();
       if (token) {
         config.headers['Authorization'] = `Bearer ${token}`;
       }
       return config;
     },
     (error) => Promise.reject(error)
   );
   ```

2. **Add SameSite cookie attribute (Backend required)**
   - Document requirement for backend to set cookies with `SameSite=Strict` or `SameSite=Lax`
   - This prevents cookies from being sent in cross-site requests

3. **Implement custom headers (Double Submit Cookie pattern)**
   - If backend supports it, implement custom header check:
     ```javascript
     // Add custom header that cannot be set by browser in cross-origin request
     apiClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
     ```

4. **Add referrer/origin validation (Backend should implement)**
   - Document that backend should validate `Origin` and `Referer` headers
   - Frontend automatically sends these headers

5. **Update documentation**
   - Document CSRF protection requirements for backend team
   - Include examples of expected headers and tokens

#### Testing Checklist
- [ ] CSRF token is included in requests (if backend provides)
- [ ] Custom headers are sent with requests
- [ ] Documentation is updated with backend requirements
- [ ] Error handling for missing CSRF tokens

#### Files to Modify
- `src/utils/apiServce.jsx`
- `README.md` or security documentation

#### Backend Requirements
- Set CSRF token in response headers or cookies
- Validate CSRF token on state-changing requests
- Set `SameSite` attribute on cookies
- Validate `Origin` and `Referer` headers

---

### Fix #7: Add Password Strength Validation

**Severity:** High  
**Risk:** Weak passwords vulnerable to brute force  
**Impact:** Account compromise

#### Current Issue
- No password strength requirements enforced
- Location: `src/pages/Registration/SignUpScreenFourSecurityInfo.jsx`

#### Implementation Steps

1. **Enhance input validation utility**
   - Update `src/utils/inputValidation.js` (created in Fix #3):
   ```javascript
   export const validatePassword = (password) => {
     const minLength = 8;
     const hasUpperCase = /[A-Z]/.test(password);
     const hasLowerCase = /[a-z]/.test(password);
     const hasNumber = /\d/.test(password);
     const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
     
     const errors = [];
     if (password.length < minLength) {
       errors.push(`Password must be at least ${minLength} characters long`);
     }
     if (!hasUpperCase) {
       errors.push('Password must contain at least one uppercase letter');
     }
     if (!hasLowerCase) {
       errors.push('Password must contain at least one lowercase letter');
     }
     if (!hasNumber) {
       errors.push('Password must contain at least one number');
     }
     if (!hasSpecialChar) {
       errors.push('Password must contain at least one special character');
     }
     
     return {
       isValid: errors.length === 0,
       errors,
       strength: calculatePasswordStrength(password)
     };
   };

   const calculatePasswordStrength = (password) => {
     let strength = 0;
     if (password.length >= 8) strength++;
     if (password.length >= 12) strength++;
     if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
     if (/\d/.test(password)) strength++;
     if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
     
     if (strength <= 2) return 'weak';
     if (strength <= 3) return 'medium';
     if (strength <= 4) return 'strong';
     return 'very-strong';
   };
   ```

2. **Create PasswordStrengthIndicator component**
   - File: `src/components/PasswordStrengthIndicator/PasswordStrengthIndicator.jsx`
   ```javascript
   import React from 'react';
   import PropTypes from 'prop-types';
   import styled from 'styled-components';

   const PasswordStrengthIndicator = ({ password }) => {
     if (!password) return null;

     const { validatePassword } = require('../../utils/inputValidation');
     const validation = validatePassword(password);

     const getStrengthColor = () => {
       switch (validation.strength) {
         case 'weak': return '#ff4444';
         case 'medium': return '#ffaa00';
         case 'strong': return '#00C851';
         case 'very-strong': return '#007E33';
         default: return '#ccc';
       }
     };

     return (
       <Container>
         <StrengthBar>
           <StrengthFill 
             strength={validation.strength}
             style={{ width: `${(validation.strength === 'weak' ? 25 : validation.strength === 'medium' ? 50 : validation.strength === 'strong' ? 75 : 100)}%` }}
           />
         </StrengthBar>
         <StrengthText strength={validation.strength}>
           Strength: {validation.strength.charAt(0).toUpperCase() + validation.strength.slice(1).replace('-', ' ')}
         </StrengthText>
         {validation.errors.length > 0 && (
           <ErrorList>
             {validation.errors.map((error, index) => (
               <ErrorItem key={index}>{error}</ErrorItem>
             ))}
           </ErrorList>
         )}
       </Container>
     );
   };

   // Styled components...
   ```

3. **Update SignUpScreenFourSecurityInfo.jsx**
   - Add password strength validation:
   ```javascript
   import { validatePassword } from '../../utils/inputValidation';
   import PasswordStrengthIndicator from '../../components/PasswordStrengthIndicator/PasswordStrengthIndicator';

   const handleSubmit = async () => {
     // ... existing validation ...

     // Validate password strength
     const passwordValidation = validatePassword(securityInfo.password);
     if (!passwordValidation.isValid) {
       alert(`Password does not meet requirements:\n${passwordValidation.errors.join('\n')}`);
       return;
     }

     // ... rest of submission ...
   };

   // In JSX, add PasswordStrengthIndicator component below password input
   ```

4. **Add real-time password strength feedback**
   - Show strength indicator as user types
   - Display requirements checklist

#### Testing Checklist
- [ ] Weak passwords are rejected
- [ ] Password strength indicator displays correctly
- [ ] All password requirements are validated
- [ ] Error messages are clear and helpful
- [ ] Password confirmation still works

#### Files to Create
- `src/components/PasswordStrengthIndicator/PasswordStrengthIndicator.jsx`

#### Files to Modify
- `src/utils/inputValidation.js` (from Fix #3)
- `src/pages/Registration/SignUpScreenFourSecurityInfo.jsx`

---

### Fix #8: Enforce HTTPS

**Severity:** High  
**Risk:** Man-in-the-middle attacks, data interception  
**Impact:** Credential theft, data breach

#### Current Issue
- No HTTPS enforcement check
- API calls may be made over HTTP in development
- Hardcoded URLs may not use HTTPS

#### Implementation Steps

1. **Add HTTPS enforcement utility**
   - File: `src/utils/security.js`
   ```javascript
   // Check if current page is served over HTTPS
   export const isSecureContext = () => {
     return window.isSecureContext || window.location.protocol === 'https:';
   };

   // Enforce HTTPS in production
   export const enforceHTTPS = () => {
     if (process.env.NODE_ENV === 'production') {
       if (!isSecureContext()) {
         // Redirect to HTTPS version
         const httpsUrl = window.location.href.replace('http:', 'https:');
         window.location.replace(httpsUrl);
         return false;
       }
     }
     return true;
   };

   // Validate API URL uses HTTPS in production
   export const validateAPIURL = (url) => {
     if (process.env.NODE_ENV === 'production') {
       if (url && !url.startsWith('https://')) {
         console.error('API URL must use HTTPS in production');
         return false;
       }
     }
     return true;
   };
   ```

2. **Update apiServce.jsx**
   - Add HTTPS validation:
   ```javascript
   import { validateAPIURL } from './security';

   const BASE_URL = process.env.REACT_APP_API_URL || process.env.REACT_APP_API_BASE_URL;

   // Validate API URL on initialization
   if (!validateAPIURL(BASE_URL)) {
     console.error('Invalid API URL: Must use HTTPS in production');
   }

   const apiClient = axios.create({
     baseURL: BASE_URL,
     // ... rest of config
   });
   ```

3. **Add HTTPS check in App.jsx or index.jsx**
   - Enforce HTTPS on app load:
   ```javascript
   import { enforceHTTPS } from './utils/security';

   // In App component or index.jsx
   useEffect(() => {
     enforceHTTPS();
   }, []);
   ```

4. **Update hardcoded URLs**
   - Search for all hardcoded `http://` URLs
   - Replace with `https://` or use environment variables
   - Files to check:
     - QR code generation URLs
     - Image URLs
     - API endpoints

5. **Add Content Security Policy (CSP)**
   - Update `public/index.html`:
   ```html
   <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
   ```
   - This automatically upgrades all HTTP requests to HTTPS

#### Testing Checklist
- [ ] HTTPS is enforced in production builds
- [ ] HTTP requests are blocked or upgraded in production
- [ ] API URLs use HTTPS in production
- [ ] All hardcoded URLs use HTTPS
- [ ] CSP header upgrades insecure requests

#### Files to Create
- `src/utils/security.js`

#### Files to Modify
- `src/utils/apiServce.jsx`
- `src/App.jsx` or `src/index.jsx`
- `public/index.html`
- Files with hardcoded HTTP URLs

---

### Fix #9: Add Client-Side Rate Limiting

**Severity:** High  
**Risk:** Brute force attacks, DoS  
**Impact:** Account compromise, service disruption

#### Current Issue
- No rate limiting on login, registration, or payment endpoints
- Vulnerable to brute force attacks

#### Implementation Steps

1. **Create rate limiting utility**
   - File: `src/utils/rateLimiter.js`
   ```javascript
   // In-memory rate limiter (client-side only)
   // Note: Real rate limiting should be implemented on backend
   class RateLimiter {
     constructor(maxAttempts, windowMs) {
       this.maxAttempts = maxAttempts;
       this.windowMs = windowMs;
       this.attempts = new Map();
     }

     isAllowed(key) {
       const now = Date.now();
       const record = this.attempts.get(key);

       if (!record) {
         this.attempts.set(key, { count: 1, resetTime: now + this.windowMs });
         return { allowed: true, remaining: this.maxAttempts - 1 };
       }

       if (now > record.resetTime) {
         // Reset window
         this.attempts.set(key, { count: 1, resetTime: now + this.windowMs });
         return { allowed: true, remaining: this.maxAttempts - 1 };
       }

       if (record.count >= this.maxAttempts) {
         const waitTime = Math.ceil((record.resetTime - now) / 1000);
         return { 
           allowed: false, 
           remaining: 0,
           waitTime 
         };
       }

       record.count++;
       return { 
         allowed: true, 
         remaining: this.maxAttempts - record.count 
       };
     }

     reset(key) {
       this.attempts.delete(key);
     }
   }

   // Create rate limiters for different actions
   export const loginRateLimiter = new RateLimiter(5, 15 * 60 * 1000); // 5 attempts per 15 minutes
   export const registrationRateLimiter = new RateLimiter(3, 60 * 60 * 1000); // 3 attempts per hour
   export const passwordResetRateLimiter = new RateLimiter(3, 60 * 60 * 1000); // 3 attempts per hour
   export const paymentRateLimiter = new RateLimiter(10, 60 * 1000); // 10 attempts per minute
   ```

2. **Update LoginPage.jsx**
   - Add rate limiting:
   ```javascript
   import { loginRateLimiter } from '../utils/rateLimiter';

   const handleSubmit = async () => {
     const email = loginInfo.email;
     const rateLimit = loginRateLimiter.isAllowed(`login:${email}`);

     if (!rateLimit.allowed) {
       alert(`Too many login attempts. Please wait ${rateLimit.waitTime} seconds before trying again.`);
       setLoading(false);
       return;
     }

     // ... rest of login logic ...

     // Reset rate limit on successful login
     if (response.status >= 200 && response.status < 300) {
       loginRateLimiter.reset(`login:${email}`);
     }
   };
   ```

3. **Update Registration form**
   - Add rate limiting to `SignUpScreenFourSecurityInfo.jsx`:
   ```javascript
   import { registrationRateLimiter } from '../../utils/rateLimiter';

   const handleSubmit = async () => {
     const email = contactInfo.email;
     const rateLimit = registrationRateLimiter.isAllowed(`register:${email}`);

     if (!rateLimit.allowed) {
       alert(`Too many registration attempts. Please wait ${rateLimit.waitTime} seconds before trying again.`);
       return;
     }

     // ... rest of registration logic ...
   };
   ```

4. **Add visual feedback**
   - Show remaining attempts to user
   - Display countdown timer if rate limited

5. **Document backend requirements**
   - Client-side rate limiting is easily bypassed
   - Backend must implement server-side rate limiting
   - Document expected rate limits for backend team

#### Testing Checklist
- [ ] Rate limiting prevents excessive login attempts
- [ ] Rate limiting prevents excessive registration attempts
- [ ] Rate limits reset after time window
- [ ] User receives clear error messages
- [ ] Successful actions reset rate limits

#### Files to Create
- `src/utils/rateLimiter.js`

#### Files to Modify
- `src/pages/LoginPage.jsx`
- `src/pages/Registration/SignUpScreenFourSecurityInfo.jsx`
- `src/pages/Registration/SignUpScreenThreeContactInfo.jsx` (password reset)

#### Backend Requirements
- Implement server-side rate limiting
- Return appropriate HTTP status codes (429 Too Many Requests)
- Include rate limit headers in responses

---

### Fix #10: Implement Secure Logout

**Severity:** High  
**Risk:** Session persistence after logout  
**Impact:** Unauthorized access if device is compromised

#### Current Issue
- Logout may not clear all tokens and sensitive data
- Location: `src/context/UserContext.jsx`

#### Implementation Steps

1. **Create secure logout utility**
   - File: `src/utils/authUtils.js`
   ```javascript
   import { clearToken } from './tokenStorage';

   export const secureLogout = () => {
     // Clear token from all storage
     clearToken();

     // Clear all localStorage items (be selective if needed)
     const itemsToKeep = []; // Add items that should persist (e.g., user preferences)
     const allKeys = Object.keys(localStorage);
     
     allKeys.forEach(key => {
       if (!itemsToKeep.includes(key)) {
         localStorage.removeItem(key);
       }
     });

     // Clear sessionStorage
     sessionStorage.clear();

     // Clear any in-memory caches
     // Add any other cleanup needed

     // Redirect to login page
     window.location.href = '/login-page';
     
     // Force page reload to clear all state
     window.location.reload();
   };
   ```

2. **Update UserContext.jsx**
   - Replace signOut function:
   ```javascript
   import { secureLogout } from '../utils/authUtils';

   const signOut = () => {
     secureLogout();
   };
   ```

3. **Add logout API call (if backend supports)**
   - Call logout endpoint before clearing tokens:
   ```javascript
   import { logout } from '../utils/authApiRequests';

   export const secureLogout = async () => {
     try {
       // Call backend logout endpoint to invalidate token
       await logout();
     } catch (error) {
       // Even if logout fails, clear local data
       console.error('Logout API call failed:', error);
     } finally {
       // Always clear local data
       clearToken();
       // ... rest of cleanup
     }
   };
   ```

4. **Update all logout handlers**
   - Search for all logout/signOut calls
   - Replace with `secureLogout()`

5. **Add token expiration check**
   - Check token expiration on app load:
   ```javascript
   // In App.jsx or ProtectedRoute
   useEffect(() => {
     const token = getToken();
     if (token) {
       // Decode JWT to check expiration (if token is JWT)
       try {
         const payload = JSON.parse(atob(token.split('.')[1]));
         const expirationTime = payload.exp * 1000; // Convert to milliseconds
         if (Date.now() >= expirationTime) {
           secureLogout();
         }
       } catch (error) {
         // If token is not JWT or invalid, clear it
         secureLogout();
       }
     }
   }, []);
   ```

#### Testing Checklist
- [ ] All tokens are cleared on logout
- [ ] All sensitive data is removed from storage
- [ ] User is redirected to login page
- [ ] Backend logout endpoint is called (if available)
- [ ] Expired tokens trigger automatic logout
- [ ] No data persists after logout

#### Files to Create
- `src/utils/authUtils.js`

#### Files to Modify
- `src/context/UserContext.jsx`
- `src/utils/ProtectedRoute.jsx`
- All files with logout functionality

---

## Priority 3: Medium Priority Security Fixes (Items 11-16)

### Fix #11: Remove Console Logging of Sensitive Data

**Severity:** Medium  
**Risk:** Information disclosure in production  
**Impact:** Sensitive data exposure in browser console

#### Current Issue
- `console.error` and `console.log` statements may log sensitive data
- 31+ instances of console logging throughout codebase
- Sensitive information may be exposed in production builds

#### Implementation Steps

1. **Create logging utility**
   - File: `src/utils/logger.js`
   ```javascript
   // Centralized logging utility
   const isDevelopment = process.env.NODE_ENV === 'development';

   export const logger = {
     // Only log in development
     log: (...args) => {
       if (isDevelopment) {
         console.log(...args);
       }
     },

     // Error logging - sanitize sensitive data
     error: (message, error = null, context = '') => {
       if (isDevelopment) {
         console.error(`[${context}]`, message, error);
       } else {
         // In production, send to error tracking service
         // Remove sensitive data before logging
         const sanitizedError = error ? {
           message: error.message,
           status: error?.response?.status,
           // Don't log: tokens, passwords, personal data
         } : null;
         
         // Send to error tracking service (e.g., Sentry)
         // logToService(message, sanitizedError, context);
       }
     },

     // Warn logging
     warn: (...args) => {
       if (isDevelopment) {
         console.warn(...args);
       }
     },

     // Info logging
     info: (...args) => {
       if (isDevelopment) {
         console.info(...args);
       }
     },
   };

   // Helper to sanitize data before logging
   export const sanitizeForLogging = (data) => {
     if (!data || typeof data !== 'object') return data;
     
     const sensitiveKeys = ['password', 'token', 'access_token', 'refresh_token', 'api_key', 'secret', 'ssn', 'credit_card'];
     const sanitized = { ...data };
     
     sensitiveKeys.forEach(key => {
       if (sanitized[key]) {
         sanitized[key] = '***REDACTED***';
       }
     });
     
     return sanitized;
   };
   ```

2. **Replace all console.log statements**
   - Search for all `console.log`, `console.error`, `console.warn`, `console.info`
   - Replace with `logger.log`, `logger.error`, `logger.warn`, `logger.info`
   - Example:
     ```javascript
     // Before:
     console.error('Error fetching user data:', error);
     
     // After:
     import { logger } from '../utils/logger';
     logger.error('Error fetching user data', error, 'UserDataFetch');
     ```

3. **Sanitize sensitive data in logs**
   - Before logging errors, sanitize sensitive fields:
     ```javascript
     import { logger, sanitizeForLogging } from '../utils/logger';
     
     catch (error) {
       const sanitizedError = sanitizeForLogging(error.response?.data);
       logger.error('API Error', sanitizedError, 'APIRequest');
     }
     ```

4. **Update specific files with sensitive data**
   - Files to prioritize:
     - `src/pages/LoginPage.jsx`
     - `src/pages/Registration/SignUpScreenFourSecurityInfo.jsx`
     - `src/utils/apiServce.jsx`
     - `src/pages/Vendor/VendorDashboard.jsx`
     - All payment-related files

5. **Add build-time console removal (optional)**
   - Install babel plugin to remove console statements in production:
     ```bash
     npm install --save-dev babel-plugin-transform-remove-console
     ```
   - Update `package.json` or babel config:
     ```json
     {
       "plugins": [
         ["transform-remove-console", { "exclude": ["error", "warn"] }]
       ]
     }
     ```

#### Testing Checklist
- [ ] No console.log statements in production build
- [ ] Sensitive data is not logged
- [ ] Error logging works correctly
- [ ] Development logging still functions
- [ ] All console statements replaced with logger utility

#### Files to Create
- `src/utils/logger.js`

#### Files to Modify
- All files with `console.log`, `console.error`, `console.warn`, `console.info`
- Priority files:
  - `src/pages/LoginPage.jsx`
  - `src/pages/Registration/SignUpScreenFourSecurityInfo.jsx`
  - `src/utils/apiServce.jsx`
  - `src/pages/Vendor/VendorDashboard.jsx`
  - `src/pages/Vendor/MakePayment/VMPScreenFourBankDetails.jsx`
  - `src/pages/Vendor/MakePayment/VMPScreenOnePayee.jsx`
  - `src/pages/Vendor/MakePayment/VMPScreenThreeCategory.jsx`
  - `src/pages/Vendor/MakePayment/VMPScreenTwoTripData.jsx`
  - `src/pages/Vendor/IssueTicket/VITScreenTwoDetails.jsx`
  - `src/pages/Vendor/IssueTicket/VITScreenThreeDebit.jsx`
  - `src/pages/Vendor/FundWallet/VFWScreenTwoPaymentMethod.jsx`

---

### Fix #12: Add Content Security Policy (CSP)

**Severity:** Medium  
**Risk:** XSS attacks, code injection  
**Impact:** Prevention of XSS and injection attacks

#### Current Issue
- No Content Security Policy headers configured
- Vulnerable to XSS attacks
- No restrictions on script sources

#### Implementation Steps

1. **Add CSP meta tag to index.html**
   - File: `public/index.html`
   - Add CSP meta tag in `<head>`:
     ```html
     <meta http-equiv="Content-Security-Policy" content="
       default-src 'self';
       script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.flutterwave.com;
       style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
       font-src 'self' https://fonts.gstatic.com;
       img-src 'self' data: https:;
       connect-src 'self' https://api.flutterwave.com https://admin.queensecglobal.com;
       frame-src 'self' https://checkout.flutterwave.com;
       object-src 'none';
       base-uri 'self';
       form-action 'self';
       upgrade-insecure-requests;
     ">
     ```
   - **Note:** Adjust CSP directives based on actual requirements:
     - `'unsafe-inline'` and `'unsafe-eval'` are needed for React but reduce security
     - Consider using nonces or hashes for inline scripts in the future

2. **Create CSP configuration file**
   - File: `public/csp-config.json` (for reference)
   - Document all allowed sources:
     ```json
     {
       "default-src": ["'self'"],
       "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://checkout.flutterwave.com"],
       "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
       "font-src": ["'self'", "https://fonts.gstatic.com"],
       "img-src": ["'self'", "data:", "https:"],
       "connect-src": ["'self'", "https://api.flutterwave.com", "https://admin.queensecglobal.com"],
       "frame-src": ["'self'", "https://checkout.flutterwave.com"],
       "object-src": ["'none'"],
       "base-uri": ["'self'"],
       "form-action": ["'self'"],
       "upgrade-insecure-requests": true
     }
     ```

3. **Test CSP in development**
   - Start with report-only mode:
     ```html
     <meta http-equiv="Content-Security-Policy-Report-Only" content="...">
     ```
   - Monitor browser console for CSP violations
   - Adjust directives as needed

4. **Implement CSP via HTTP headers (Backend)**
   - Document requirement for backend to set CSP headers
   - CSP headers take precedence over meta tags
   - Example header:
     ```
     Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'
     ```

5. **Add CSP violation reporting (optional)**
   - Set up CSP reporting endpoint:
     ```html
     <meta http-equiv="Content-Security-Policy" content="
       ... existing directives ...
       report-uri /api/csp-report;
     ">
     ```

#### Testing Checklist
- [ ] CSP meta tag is present in index.html
- [ ] No CSP violations in browser console
- [ ] All external resources load correctly
- [ ] Flutterwave payment integration works
- [ ] Fonts and images load properly
- [ ] API calls function correctly

#### Files to Create
- `public/csp-config.json` (reference document)

#### Files to Modify
- `public/index.html`

#### Backend Requirements
- Set CSP headers in HTTP responses
- Implement CSP violation reporting endpoint (optional)

---

### Fix #13: Improve Authentication Check

**Severity:** Medium  
**Risk:** Stale tokens accepted, weak authentication validation  
**Impact:** Unauthorized access with expired tokens

#### Current Issue
- `ProtectedRoute` relies solely on API call for authentication
- No token expiration check
- Location: `src/utils/ProtectedRoute.jsx`

#### Implementation Steps

1. **Create token validation utility**
   - File: `src/utils/tokenValidation.js`
   ```javascript
   import { getToken } from './tokenStorage';

   // Check if token exists and is valid
   export const isTokenValid = () => {
     const token = getToken();
     if (!token) {
       return false;
     }

     // Check if token is JWT format
     const parts = token.split('.');
     if (parts.length !== 3) {
       return false; // Not a JWT
     }

     try {
       // Decode JWT payload (without verification - backend should verify)
       const payload = JSON.parse(atob(parts[1]));
       
       // Check expiration
       if (payload.exp) {
         const expirationTime = payload.exp * 1000; // Convert to milliseconds
         if (Date.now() >= expirationTime) {
           return false; // Token expired
         }
       }

       // Check if token has required fields
       if (!payload.sub && !payload.user_id && !payload.id) {
         return false; // Invalid token structure
       }

       return true;
     } catch (error) {
       return false; // Invalid token
     }
   };

   // Get token expiration time
   export const getTokenExpiration = () => {
     const token = getToken();
     if (!token) return null;

     try {
       const parts = token.split('.');
       if (parts.length !== 3) return null;
       
       const payload = JSON.parse(atob(parts[1]));
       if (payload.exp) {
         return payload.exp * 1000; // Return in milliseconds
       }
       return null;
     } catch (error) {
       return null;
     }
   };

   // Check if token is about to expire (within 5 minutes)
   export const isTokenExpiringSoon = () => {
     const expiration = getTokenExpiration();
     if (!expiration) return false;
     
     const fiveMinutes = 5 * 60 * 1000;
     return (expiration - Date.now()) < fiveMinutes;
   };
   ```

2. **Update ProtectedRoute.jsx**
   - Add token validation before API call:
     ```javascript
     import { isTokenValid, isTokenExpiringSoon } from './tokenValidation';
     import { secureLogout } from './authUtils';

     const ProtectedRoute = ({ children }) => {
       const [isAuthenticated, setIsAuthenticated] = useState(null);

       useEffect(() => {
         const checkAuth = async () => {
           // First check if token is valid locally
           if (!isTokenValid()) {
             setIsAuthenticated(false);
             secureLogout();
             return;
           }

           // Check if token is expiring soon
           if (isTokenExpiringSoon()) {
             // Optionally refresh token here
             // For now, just proceed with API check
           }

           // Then verify with backend
           try {
             const valid = await loginStatus();
             setIsAuthenticated(valid.status);
           } catch (error) {
             console.error('Error verifying login status:', error);
             setIsAuthenticated(false);
           }
         };

         checkAuth();
       }, []);

       // ... rest of component
     };
     ```

3. **Add token refresh mechanism (if backend supports)**
   - Create token refresh utility:
     ```javascript
     // In src/utils/authUtils.js
     export const refreshToken = async () => {
       try {
         const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {});
         if (response.data.access_token) {
           setToken(response.data.access_token);
           return true;
         }
         return false;
       } catch (error) {
         return false;
       }
     };
     ```

4. **Add periodic token validation**
   - Check token validity periodically:
     ```javascript
     // In App.jsx or ProtectedRoute
     useEffect(() => {
       const interval = setInterval(() => {
         if (!isTokenValid()) {
           secureLogout();
         }
       }, 60000); // Check every minute

       return () => clearInterval(interval);
     }, []);
     ```

5. **Update loginStatus API call**
   - Add better error handling:
     ```javascript
     const checkAuth = async () => {
       try {
         const response = await loginStatus();
         if (response && response.status === true) {
           setIsAuthenticated(true);
         } else {
           setIsAuthenticated(false);
         }
       } catch (error) {
         // If API call fails, check token validity
         if (isTokenValid()) {
           // Token exists but API failed - could be network issue
           // Decide whether to allow or deny access
           setIsAuthenticated(false); // Deny for security
         } else {
           setIsAuthenticated(false);
         }
       }
     };
     ```

#### Testing Checklist
- [ ] Expired tokens are rejected
- [ ] Invalid tokens are rejected
- [ ] Valid tokens allow access
- [ ] Token expiration is checked periodically
- [ ] API failures are handled gracefully
- [ ] Token refresh works (if implemented)

#### Files to Create
- `src/utils/tokenValidation.js`

#### Files to Modify
- `src/utils/ProtectedRoute.jsx`
- `src/utils/authUtils.js` (for token refresh)
- `src/App.jsx` (for periodic checks)

#### Backend Requirements
- Token refresh endpoint (optional but recommended)
- Token expiration time in JWT payload
- Proper token validation on backend

---

### Fix #14: Add Input Length Limits

**Severity:** Medium  
**Risk:** DoS attacks via large payloads, buffer overflow  
**Impact:** Application performance degradation, potential crashes

#### Current Issue
- No `maxLength` validation on input fields
- No client-side limits on data size
- Vulnerable to DoS via large input

#### Implementation Steps

1. **Define input length limits**
   - File: `src/utils/inputValidation.js` (update existing file)
   ```javascript
   // Input length limits
   export const INPUT_LIMITS = {
     email: 255,
     password: 128,
     name: 100,
     phone: 20,
     businessName: 200,
     address: 500,
     state: 100,
     locality: 100,
     taxId: 50,
     vehiclePlate: 20,
     driverName: 100,
     loadingPoint: 200,
     offloadingPoint: 200,
     amount: 20, // For numeric strings
     description: 1000,
     username: 50,
   };

   // Validate input length
   export const validateLength = (value, maxLength, fieldName = 'Input') => {
     if (value && value.length > maxLength) {
       return {
         isValid: false,
         error: `${fieldName} must not exceed ${maxLength} characters.`
       };
     }
     return { isValid: true };
   };

   // Sanitize and truncate input
   export const sanitizeLength = (value, maxLength) => {
     if (typeof value !== 'string') return '';
     return value.trim().slice(0, maxLength);
   };
   ```

2. **Update InputField component**
   - File: `src/components/InputField/InputField.jsx`
   - Add `maxLength` prop and validation:
     ```javascript
     const InputField = ({ 
       label, 
       type = "text", 
       placeholder, 
       name, 
       value = "", 
       onChange, 
       error, 
       hasError = false, 
       isRequired = true, 
       isDisabled = false, 
       hasButton = false, 
       onButtonClick, 
       buttonLabel = "",
       maxLength = 255, // Default max length
     }) => {
       // ... existing code ...

       const handleChange = (e) => {
         const inputValue = e.target.value;
         // Enforce maxLength
         if (inputValue.length <= maxLength) {
           onChange(e);
         }
       };

       return (
         <div className={inputClass}>
           {/* ... existing JSX ... */}
           <input
             type={type}
             // ... existing props ...
             maxLength={maxLength}
             onChange={handleChange}
           />
           {maxLength && (
             <span className="character-count">
               {value.length}/{maxLength}
             </span>
           )}
         </div>
       );
     };
     ```

3. **Update all form components with appropriate limits**
   - LoginPage.jsx:
     ```javascript
     <InputFieldx
       label="Email"
       type="email"
       name="email"
       maxLength={INPUT_LIMITS.email}
       // ... other props
     />
     <InputFieldx
       label="Password"
       type="password"
       name="password"
       maxLength={INPUT_LIMITS.password}
       // ... other props
     />
     ```

4. **Add validation to registration forms**
   - SignUpScreenTwoBasicInfo.jsx:
     ```javascript
     import { INPUT_LIMITS, validateLength } from '../../utils/inputValidation';

     const handleChange = (e) => {
       const { name, value } = e.target;
       const limit = INPUT_LIMITS[name] || 255;
       const validation = validateLength(value, limit, name);
       
       if (validation.isValid) {
         setBasicInfo({ ...basicInfo, [name]: value });
       } else {
         // Show error or prevent input
         alert(validation.error);
       }
     };
     ```

5. **Add server-side validation documentation**
   - Document that backend should also enforce these limits
   - Backend should reject requests exceeding limits
   - Return appropriate error messages

6. **Add textarea length limits**
   - For any textarea components, add similar validation
   - Display character count

#### Testing Checklist
- [ ] Input fields enforce maxLength
- [ ] Character count displays correctly
- [ ] Users cannot exceed limits
- [ ] Validation errors show for exceeded limits
- [ ] All forms have appropriate limits
- [ ] Backend validation is documented

#### Files to Modify
- `src/utils/inputValidation.js` (add limits)
- `src/components/InputField/InputField.jsx`
- `src/pages/LoginPage.jsx`
- `src/pages/Registration/SignUpScreenTwoBasicInfo.jsx`
- `src/pages/Registration/SignUpScreenThreeContactInfo.jsx`
- `src/pages/Registration/SignUpScreenFourSecurityInfo.jsx`
- All payment and form components

---

### Fix #15: Improve Email Validation

**Severity:** Low  
**Risk:** Invalid email addresses accepted  
**Impact:** User experience, potential data quality issues

#### Current Issue
- Only HTML5 email validation (basic)
- No comprehensive email format validation
- No domain validation

#### Implementation Steps

1. **Enhance email validation function**
   - File: `src/utils/inputValidation.js` (update existing)
   ```javascript
   // Comprehensive email validation
   export const validateEmail = (email) => {
     if (!email || typeof email !== 'string') {
       return { isValid: false, error: 'Email is required' };
     }

     const trimmedEmail = email.trim().toLowerCase();
     
     // Basic format check
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(trimmedEmail)) {
       return { isValid: false, error: 'Please enter a valid email address' };
     }

     // Check length
     if (trimmedEmail.length > 255) {
       return { isValid: false, error: 'Email address is too long' };
     }

     // Check for common invalid patterns
     const invalidPatterns = [
       /^\./,           // Starts with dot
       /\.\./,          // Consecutive dots
       /@\./,           // @ followed by dot
       /\.@/,           // Dot before @
       /^@/,            // Starts with @
       /@$/,            // Ends with @
       /\.$/,           // Ends with dot
     ];

     for (const pattern of invalidPatterns) {
       if (pattern.test(trimmedEmail)) {
         return { isValid: false, error: 'Please enter a valid email address' };
       }
     }

     // Split email into local and domain parts
     const parts = trimmedEmail.split('@');
     const localPart = parts[0];
     const domainPart = parts[1];

     // Validate local part
     if (localPart.length === 0 || localPart.length > 64) {
       return { isValid: false, error: 'Email local part is invalid' };
     }

     // Validate domain part
     if (domainPart.length === 0 || domainPart.length > 255) {
       return { isValid: false, error: 'Email domain is invalid' };
     }

     // Check for valid domain format
     const domainRegex = /^[a-z0-9]([a-z0-9\-]{0,61}[a-z0-9])?(\.[a-z0-9]([a-z0-9\-]{0,61}[a-z0-9])?)*\.[a-z]{2,}$/i;
     if (!domainRegex.test(domainPart)) {
       return { isValid: false, error: 'Email domain is invalid' };
     }

     // Check for common disposable email domains (optional)
     const disposableDomains = [
       'tempmail.com',
       '10minutemail.com',
       'guerrillamail.com',
       // Add more as needed
     ];
     
     if (disposableDomains.includes(domainPart.toLowerCase())) {
       return { 
         isValid: false, 
         error: 'Disposable email addresses are not allowed' 
       };
     }

     return { isValid: true };
   };

   // Real-time email validation with debouncing
   export const validateEmailAsync = async (email) => {
     const basicValidation = validateEmail(email);
     if (!basicValidation.isValid) {
       return basicValidation;
     }

     // Optional: Check if domain has MX records (requires backend API)
     // This would be a backend call to verify email domain
     // For now, return basic validation result

     return basicValidation;
   };
   ```

2. **Update InputField component for email type**
   - Add email-specific validation:
     ```javascript
     // In InputField component
     const handleBlur = (e) => {
       if (type === 'email' && value) {
         const validation = validateEmail(value);
         if (!validation.isValid) {
           // Set error state
           setEmailError(validation.error);
         }
       }
     };
     ```

3. **Add email validation to all email inputs**
   - LoginPage.jsx:
     ```javascript
     import { validateEmail } from '../utils/inputValidation';

     const handleSubmit = async () => {
       const emailValidation = validateEmail(loginInfo.email);
       if (!emailValidation.isValid) {
         alert(emailValidation.error);
         setLoading(false);
         return;
       }
       // ... rest of login logic
     };
     ```

4. **Add visual feedback for email validation**
   - Show checkmark for valid emails
   - Show error icon for invalid emails
   - Display validation message

5. **Update registration forms**
   - Apply email validation to all registration screens
   - Validate on blur and before submission

#### Testing Checklist
- [ ] Invalid email formats are rejected
- [ ] Valid email formats are accepted
- [ ] Email length is validated
- [ ] Domain format is validated
- [ ] Disposable emails are rejected (if enabled)
- [ ] Visual feedback works correctly
- [ ] Validation messages are clear

#### Files to Modify
- `src/utils/inputValidation.js` (enhance email validation)
- `src/components/InputField/InputField.jsx`
- `src/pages/LoginPage.jsx`
- `src/pages/Registration/SignUpScreenThreeContactInfo.jsx`
- All forms with email input

---

### Fix #16: Standardize Environment Variables

**Severity:** Low  
**Risk:** Configuration errors, maintenance issues  
**Impact:** Development and deployment confusion

#### Current Issue
- Mixed use of `REACT_APP_API_BASE_URL` and `REACT_APP_API_URL`
- Inconsistent environment variable names
- No centralized configuration

#### Implementation Steps

1. **Create environment configuration utility**
   - File: `src/config/env.js`
   ```javascript
   // Centralized environment variable configuration
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
   };

   // Validate configuration on load
   if (config.api.baseURL && !config.api.baseURL.startsWith('http')) {
     console.warn('API base URL should start with http:// or https://');
   }

   export default config;
   ```

2. **Update apiServce.jsx to use centralized config**
   - Replace all `process.env` references:
     ```javascript
     import config from '../config/env';

     const apiClient = axios.create({
       baseURL: config.api.baseURL,
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'API-Token': config.api.token,
       },
       timeout: config.api.timeout,
     });
     ```

3. **Update apiEndpoints.jsx**
   - Use centralized config:
     ```javascript
     import config from '../config/env';

     export const API_BASE_URL = config.api.baseURL;
     ```

4. **Update all files using environment variables**
   - Search for all `process.env.REACT_APP_*` references
   - Replace with `config.*` from centralized config
   - Files to update:
     - All files importing `API_BASE_URL` from `apiEndpoints.jsx`
     - Files with direct `process.env` usage

5. **Create .env.example file**
   - File: `.env.example`
   ```env
   # API Configuration
   REACT_APP_API_BASE_URL=https://admin.queensecglobal.com/api
   REACT_APP_API_TOKEN=your_api_token_here
   REACT_APP_API_TIMEOUT=30000

   # App Configuration
   REACT_APP_NAME=Queensec
   REACT_APP_VERSION=1.0.0

   # Feature Flags
   REACT_APP_ENABLE_ANALYTICS=false
   REACT_APP_ENABLE_ERROR_TRACKING=false

   # External Services
   REACT_APP_FLUTTERWAVE_PUBLIC_KEY=your_flutterwave_public_key
   ```

6. **Update README.md**
   - Document all required environment variables
   - Provide setup instructions
   - Explain configuration structure

7. **Remove deprecated variable references**
   - Remove all references to `REACT_APP_API_URL`
   - Standardize on `REACT_APP_API_BASE_URL`

#### Testing Checklist
- [ ] All environment variables are centralized
- [ ] Configuration validation works
- [ ] Missing required variables show errors
- [ ] .env.example is complete and accurate
- [ ] All files use centralized config
- [ ] No direct process.env references remain
- [ ] Documentation is updated

#### Files to Create
- `src/config/env.js`
- `.env.example`

#### Files to Modify
- `src/utils/apiServce.jsx`
- `src/utils/apiEndpoints.jsx`
- All files with `process.env.REACT_APP_*` references
- `README.md`

---

## Priority 4: Low Priority Security Fixes (Items 17-20)

### Fix #17: Add Security Headers

**Severity:** Low  
**Risk:** Clickjacking, MIME type sniffing, XSS  
**Impact:** Additional layer of security protection

#### Current Issue
- No security headers configured in HTML
- Missing X-Frame-Options, X-Content-Type-Options, etc.
- Location: `public/index.html`

#### Implementation Steps

1. **Add security headers meta tags**
   - File: `public/index.html`
   - Add security headers in `<head>` section:
     ```html
     <!-- Security Headers -->
     <meta http-equiv="X-Frame-Options" content="DENY">
     <meta http-equiv="X-Content-Type-Options" content="nosniff">
     <meta http-equiv="X-XSS-Protection" content="1; mode=block">
     <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
     <meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=()">
     ```

2. **Document backend requirements for HTTP headers**
   - Create documentation file: `docs/security/SECURITY_HEADERS.md`
   - Document required HTTP headers:
     ```markdown
     # Security Headers Configuration
     
     ## Required HTTP Headers
     
     The following headers should be set by the web server or backend:
     
     - `X-Frame-Options: DENY` - Prevents clickjacking
     - `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
     - `X-XSS-Protection: 1; mode=block` - Enables XSS filter
     - `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
     - `Permissions-Policy: geolocation=(), microphone=(), camera=()` - Restricts browser features
     - `Strict-Transport-Security: max-age=31536000; includeSubDomains` - Enforces HTTPS
     - `Content-Security-Policy: [as defined in Fix #12]` - XSS protection
     ```

3. **Add security headers configuration**
   - File: `public/security-headers.json` (reference)
   ```json
   {
     "X-Frame-Options": "DENY",
     "X-Content-Type-Options": "nosniff",
     "X-XSS-Protection": "1; mode=block",
     "Referrer-Policy": "strict-origin-when-cross-origin",
     "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
     "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
   }
   ```

4. **Test security headers**
   - Use browser DevTools to verify headers
   - Use online tools like securityheaders.com
   - Verify headers are present in responses

5. **Update deployment documentation**
   - Document header requirements for hosting providers
   - Include examples for common hosting platforms (Netlify, Vercel, etc.)

#### Testing Checklist
- [ ] Security headers are present in HTML meta tags
- [ ] Headers are verified in browser DevTools
- [ ] Documentation is created for backend team
- [ ] Headers don't break existing functionality
- [ ] Deployment documentation is updated

#### Files to Create
- `docs/security/SECURITY_HEADERS.md`
- `public/security-headers.json` (reference)

#### Files to Modify
- `public/index.html`

#### Backend Requirements
- Configure web server to set security headers
- Set HTTP headers in response (takes precedence over meta tags)

---

### Fix #18: Implement Dependency Vulnerability Scanning

**Severity:** Low  
**Risk:** Vulnerable dependencies in production  
**Impact:** Potential security vulnerabilities from outdated packages

#### Current Issue
- No automated dependency vulnerability scanning
- No process for keeping dependencies updated
- Location: `package.json`

#### Implementation Steps

1. **Install and configure npm audit**
   - Run audit command:
     ```bash
     npm audit
     ```
   - Fix critical and high vulnerabilities:
     ```bash
     npm audit fix
     ```
   - For breaking changes, review:
     ```bash
     npm audit fix --dry-run
     ```

2. **Add audit script to package.json**
   - Update `package.json`:
     ```json
     {
       "scripts": {
         "audit": "npm audit",
         "audit:fix": "npm audit fix",
         "audit:check": "npm audit --audit-level=moderate"
       }
     }
     ```

3. **Set up automated dependency updates**
   - Option A: Use Dependabot (GitHub)
     - Create `.github/dependabot.yml`:
     ```yaml
     version: 2
     updates:
       - package-ecosystem: "npm"
         directory: "/"
         schedule:
           interval: "weekly"
         open-pull-requests-limit: 10
         reviewers:
           - "your-team"
         labels:
           - "dependencies"
           - "security"
     ```

   - Option B: Use Renovate
     - Install Renovate bot on repository
     - Configure via `renovate.json`:
     ```json
     {
       "extends": ["config:base"],
       "schedule": ["before 10am on monday"],
       "packageRules": [
         {
           "updateTypes": ["minor", "patch"],
           "automerge": true
         }
       ]
     }
     ```

4. **Add pre-commit hook for security checks**
   - Install husky (if not already installed):
     ```bash
     npm install --save-dev husky
     ```
   - Create `.husky/pre-commit`:
     ```bash
     #!/usr/bin/env sh
     . "$(dirname -- "$0")/_/husky.sh"
     
     npm audit --audit-level=high
     ```
   - Or use lint-staged for selective checks

5. **Set up CI/CD security checks**
   - Add to CI pipeline (GitHub Actions example):
     ```yaml
     # .github/workflows/security.yml
     name: Security Audit
     
     on:
       push:
         branches: [ main, develop ]
       pull_request:
         branches: [ main, develop ]
       schedule:
         - cron: '0 0 * * 0' # Weekly on Sunday
     
     jobs:
       audit:
         runs-on: ubuntu-latest
         steps:
           - uses: actions/checkout@v3
           - uses: actions/setup-node@v3
             with:
               node-version: '18'
           - run: npm ci
           - run: npm audit --audit-level=moderate
           - name: Check for vulnerabilities
             run: |
               if npm audit --audit-level=high; then
                 echo "No high severity vulnerabilities found"
               else
                 echo "High severity vulnerabilities found!"
                 exit 1
               fi
     ```

6. **Create dependency update policy**
   - Document update process:
     - When to update dependencies
     - How to test updates
     - Approval process for major updates
   - File: `docs/DEVELOPMENT.md` or `docs/SECURITY.md`

7. **Regular dependency review**
   - Schedule monthly dependency reviews
   - Keep track of known vulnerabilities
   - Maintain changelog of security updates

#### Testing Checklist
- [ ] npm audit runs successfully
- [ ] Critical vulnerabilities are fixed
- [ ] Automated updates are configured
- [ ] CI/CD pipeline includes security checks
- [ ] Pre-commit hooks work correctly
- [ ] Update policy is documented

#### Files to Create
- `.github/dependabot.yml` (if using GitHub)
- `.github/workflows/security.yml` (CI/CD)
- `docs/DEVELOPMENT.md` (dependency policy)

#### Files to Modify
- `package.json` (add audit scripts)

#### Tools and Services
- npm audit (built-in)
- Dependabot (GitHub)
- Renovate (alternative to Dependabot)
- Snyk (commercial option)
- npm-check-updates (for updates)

---

### Fix #19: Replace Hardcoded URLs with Environment Variables

**Severity:** Low  
**Risk:** Configuration errors, maintenance issues  
**Impact:** Difficult to change URLs across environments

#### Current Issue
- Hardcoded URLs in multiple files
- QR code URLs hardcoded
- Image URLs hardcoded
- Location: Multiple files (QR code generation, image URLs)

#### Implementation Steps

1. **Identify all hardcoded URLs**
   - Search for hardcoded URLs:
     ```bash
     grep -r "https://" src/ --include="*.jsx" --include="*.js"
     grep -r "http://" src/ --include="*.jsx" --include="*.js"
     ```
   - Files identified:
     - QR code generation files
     - Image URL defaults
     - API endpoint references

2. **Add URL configuration to env.js**
   - Update `src/config/env.js` (from Fix #16):
     ```javascript
     export const config = {
       // ... existing config ...
       
       // URLs
       urls: {
         baseUrl: getEnvVar('REACT_APP_BASE_URL', window.location.origin),
         validatorUrl: getEnvVar('REACT_APP_VALIDATOR_URL', 'https://queensec.netlify.app/validator'),
         ticketStatusUrl: getEnvVar('REACT_APP_TICKET_STATUS_URL', 'https://queensec.netlify.app/ticket-status'),
         defaultImageUrl: getEnvVar('REACT_APP_DEFAULT_IMAGE_URL', 'https://via.placeholder.com/150'),
       },
     };
     ```

3. **Update QR code generation files**
   - File: `src/pages/Vendor/Transactions/VendorTransactionHistoryTicketScreen.jsx`
     ```javascript
     import config from '../../../config/env';
     
     // Before:
     <QRCode value={`https://queensec.netlify.app/validator/ticket-id?ticket_id=${ticketId}`} />
     
     // After:
     <QRCode value={`${config.urls.validatorUrl}/ticket-id?ticket_id=${ticketId}`} />
     ```
   
   - File: `src/pages/Vendor/Validator/VendorTicketStatusByTicketId.jsx`
   - File: `src/pages/Vendor/Validator/VendorTicketStatusByNumberPlate.jsx`
   - File: `src/pages/Vendor/IssueTicket/VITScreenFourSuccess.jsx`
   - Apply same pattern to all QR code generations

4. **Update image URL defaults**
   - File: `src/pages/LoginPage.jsx`
     ```javascript
     import config from '../config/env';
     
     // Before:
     image_url: response.data.data.image_url || 'https://example.com/default-image.jpg',
     
     // After:
     image_url: response.data.data.image_url || config.urls.defaultImageUrl,
     ```
   
   - File: `src/pages/Regular/Profile.jsx`
     ```javascript
     import config from '../config/env';
     
     // Before:
     const img = localStorage.getItem("image_url") !== "undefined" 
       ? localStorage.getItem("image_url") 
       : "https://via.placeholder.com/150";
     
     // After:
     const img = localStorage.getItem("image_url") !== "undefined" 
       ? localStorage.getItem("image_url") 
       : config.urls.defaultImageUrl;
     ```

5. **Update ticket status URLs**
   - File: `src/pages/Vendor/IssueTicket/VITScreenFourSuccess.jsx`
     ```javascript
     import config from '../../config/env';
     
     // Before:
     `Payment of NGN ${amount} for ${mineralName} was successful! Pay ID: ${transactionId} \n\n https://queensec.netlify.app/ticket-status?ticket_id=${ticketId}`
     
     // After:
     `Payment of NGN ${amount} for ${mineralName} was successful! Pay ID: ${transactionId} \n\n ${config.urls.ticketStatusUrl}?ticket_id=${ticketId}`
     ```

6. **Update .env.example**
   - Add URL environment variables:
     ```env
     # URLs
     REACT_APP_BASE_URL=https://queensec.netlify.app
     REACT_APP_VALIDATOR_URL=https://queensec.netlify.app/validator
     REACT_APP_TICKET_STATUS_URL=https://queensec.netlify.app/ticket-status
     REACT_APP_DEFAULT_IMAGE_URL=https://via.placeholder.com/150
     ```

7. **Create URL utility functions**
   - File: `src/utils/urlUtils.js`
     ```javascript
     import config from '../config/env';

     export const getValidatorUrl = (ticketId) => {
       return `${config.urls.validatorUrl}/ticket-id?ticket_id=${ticketId}`;
     };

     export const getTicketStatusUrl = (ticketId) => {
       return `${config.urls.ticketStatusUrl}?ticket_id=${ticketId}`;
     };

     export const getDefaultImageUrl = () => {
       return config.urls.defaultImageUrl;
     };
     ```

8. **Update all files to use URL utilities**
   - Replace hardcoded URLs with utility functions
   - Ensure consistent URL generation

#### Testing Checklist
- [ ] All hardcoded URLs are replaced
- [ ] URLs are configurable via environment variables
- [ ] QR codes generate correctly
- [ ] Image URLs work correctly
- [ ] Environment variables are documented
- [ ] URLs work in different environments (dev, staging, prod)

#### Files to Create
- `src/utils/urlUtils.js`

#### Files to Modify
- `src/config/env.js` (add URL config)
- `src/pages/Vendor/Transactions/VendorTransactionHistoryTicketScreen.jsx`
- `src/pages/Vendor/Validator/VendorTicketStatusByTicketId.jsx`
- `src/pages/Vendor/Validator/VendorTicketStatusByNumberPlate.jsx`
- `src/pages/Vendor/IssueTicket/VITScreenFourSuccess.jsx`
- `src/pages/LoginPage.jsx`
- `src/pages/Regular/Profile.jsx`
- `.env.example`

---

### Fix #20: Implement Security Audit Logging

**Severity:** Low  
**Risk:** Lack of security event tracking  
**Impact:** Difficult to detect and investigate security incidents

#### Current Issue
- No security event logging
- No audit trail for authentication events
- No tracking of sensitive operations

#### Implementation Steps

1. **Create security audit logging utility**
   - File: `src/utils/auditLogger.js`
   ```javascript
   // Security audit logging utility
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

   // Log security event
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
       // Send to backend audit endpoint
       sendAuditEvent(event);
     }
   };

   // Sanitize audit details (remove sensitive data)
   const sanitizeAuditDetails = (details) => {
     const sensitiveKeys = ['password', 'token', 'access_token', 'credit_card', 'cvv'];
     const sanitized = { ...details };
     
     sensitiveKeys.forEach(key => {
       if (sanitized[key]) {
         sanitized[key] = '***REDACTED***';
       }
     });
     
     return sanitized;
   };

   // Send audit event to backend
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
         // await axios.post('/api/audit', event);
       }
     } catch (error) {
       // Don't throw - audit logging should not break app
       console.error('Failed to send audit event:', error);
     }
   };

   // Helper functions for common events
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
   };
   ```

2. **Add audit logging to authentication**
   - File: `src/pages/LoginPage.jsx`
     ```javascript
     import { auditLogger } from '../utils/auditLogger';

     const handleSubmit = async () => {
       // ... existing login logic ...
       
       try {
         const response = await axios.post(url, payload);
         
         if (response.status >= 200 && response.status < 300) {
           // Log successful login
           auditLogger.loginSuccess(loginInfo.email);
           // ... rest of login logic ...
         }
       } catch (error) {
         // Log failed login
         const errorMessage = error?.response?.data?.message || 'Unknown error';
         auditLogger.loginFailure(loginInfo.email, errorMessage);
         // ... rest of error handling ...
       }
     };
     ```

3. **Add audit logging to logout**
   - File: `src/utils/authUtils.js`
     ```javascript
     import { auditLogger } from './auditLogger';

     export const secureLogout = async () => {
       const userId = getUser()?.id; // Get user ID before clearing
       
       // ... existing logout logic ...
       
       // Log logout event
       if (userId) {
         auditLogger.logout(userId);
       }
     };
     ```

4. **Add audit logging to payment operations**
   - File: `src/pages/Vendor/MakePayment/VMPScreenFourBankDetails.jsx`
     ```javascript
     import { auditLogger } from '../../../utils/auditLogger';

     const handlePayment = async () => {
       // Log payment initiation
       auditLogger.paymentInitiated(parsedAmount, 'NGN');
       
       try {
         // ... payment logic ...
         
         if (response.status === 200) {
           // Log successful payment
           auditLogger.paymentCompleted(response.data.transaction_id, parsedAmount);
         }
       } catch (error) {
         // Log payment failure
         auditLogger.paymentInitiated(parsedAmount, 'NGN'); // Mark as failed
       }
     };
     ```

5. **Add audit logging to ProtectedRoute**
   - File: `src/utils/ProtectedRoute.jsx`
     ```javascript
     import { auditLogger } from './auditLogger';

     const ProtectedRoute = ({ children }) => {
       // ... existing code ...
       
       useEffect(() => {
         const checkAuth = async () => {
           if (!isTokenValid()) {
             auditLogger.unauthorizedAccess('ProtectedRoute', 'Invalid token');
             setIsAuthenticated(false);
             return;
           }
           
           try {
             const valid = await loginStatus();
             if (!valid.status) {
               auditLogger.unauthorizedAccess('ProtectedRoute', 'API validation failed');
             }
             setIsAuthenticated(valid.status);
           } catch (error) {
             auditLogger.unauthorizedAccess('ProtectedRoute', 'API error');
             setIsAuthenticated(false);
           }
         };
         
         checkAuth();
       }, []);
     };
     ```

6. **Document audit logging requirements**
   - Create `docs/security/AUDIT_LOGGING.md`
   - Document:
     - What events are logged
     - How to access audit logs
     - Retention policy
     - Privacy considerations

7. **Backend audit endpoint (documentation)**
   - Document backend requirements:
     - `/api/audit` endpoint for receiving events
     - Secure storage of audit logs
     - Log retention policy
     - Access controls for audit logs

#### Testing Checklist
- [ ] Login events are logged
- [ ] Logout events are logged
- [ ] Payment events are logged
- [ ] Unauthorized access attempts are logged
- [ ] Sensitive data is not logged
- [ ] Audit logs are sent to backend (if configured)
- [ ] Documentation is complete

#### Files to Create
- `src/utils/auditLogger.js`
- `docs/security/AUDIT_LOGGING.md`

#### Files to Modify
- `src/pages/LoginPage.jsx`
- `src/utils/authUtils.js`
- `src/pages/Vendor/MakePayment/VMPScreenFourBankDetails.jsx`
- `src/utils/ProtectedRoute.jsx`
- All authentication and payment-related files

#### Backend Requirements
- Audit log storage endpoint
- Secure audit log storage
- Audit log access controls
- Log retention policy

---

## Implementation Timeline

### Week 1: Critical Fixes (Items 1-5)
- Day 1-2: Fix #1 (Remove Password Storage)
- Day 2-3: Fix #2 (Remove Hardcoded Token)
- Day 3-5: Fix #3 (Input Validation)
- Day 5-6: Fix #4 (Secure Token Storage)
- Day 6-7: Fix #5 (Sanitize Error Messages)

### Week 2: High Priority Fixes (Items 6-10)
- Day 1-2: Fix #6 (CSRF Protection)
- Day 2-3: Fix #7 (Password Strength)
- Day 3-4: Fix #8 (HTTPS Enforcement)
- Day 4-5: Fix #9 (Rate Limiting)
- Day 5-6: Fix #10 (Secure Logout)
- Day 6-7: Testing and documentation

### Week 3: Medium Priority Fixes (Items 11-16)
- Day 1-2: Fix #11 (Remove Console Logging)
- Day 2-3: Fix #12 (Add CSP)
- Day 3-4: Fix #13 (Improve Authentication Check)
- Day 4-5: Fix #14 (Add Input Length Limits)
- Day 5-6: Fix #15 (Improve Email Validation)
- Day 6-7: Fix #16 (Standardize Environment Variables)

### Week 4: Low Priority Fixes (Items 17-20)
- Day 1: Fix #17 (Add Security Headers)
- Day 1-2: Fix #18 (Dependency Vulnerability Scanning)
- Day 2-3: Fix #19 (Replace Hardcoded URLs)
- Day 3-4: Fix #20 (Security Audit Logging)
- Day 4-5: Final testing and documentation

### Week 1: Critical Fixes (Items 1-5)
- Day 1-2: Fix #1 (Remove Password Storage)
- Day 2-3: Fix #2 (Remove Hardcoded Token)
- Day 3-5: Fix #3 (Input Validation)
- Day 5-6: Fix #4 (Secure Token Storage)
- Day 6-7: Fix #5 (Sanitize Error Messages)

### Week 2: High Priority Fixes (Items 6-10)
- Day 1-2: Fix #6 (CSRF Protection)
- Day 2-3: Fix #7 (Password Strength)
- Day 3-4: Fix #8 (HTTPS Enforcement)
- Day 4-5: Fix #9 (Rate Limiting)
- Day 5-6: Fix #10 (Secure Logout)
- Day 6-7: Testing and documentation

### Week 3: Medium Priority Fixes (Items 11-16)
- Day 1-2: Fix #11 (Remove Console Logging)
- Day 2-3: Fix #12 (Add CSP)
- Day 3-4: Fix #13 (Improve Authentication Check)
- Day 4-5: Fix #14 (Add Input Length Limits)
- Day 5-6: Fix #15 (Improve Email Validation)
- Day 6-7: Fix #16 (Standardize Environment Variables)

---

## Testing Strategy

### Unit Tests
- Test all validation functions
- Test rate limiting logic
- Test token storage utilities
- Test error handling

### Integration Tests
- Test complete login flow
- Test registration flow with validation
- Test logout functionality
- Test API error handling

### Security Tests
- Attempt XSS injection
- Attempt SQL injection (if applicable)
- Test rate limiting
- Verify no sensitive data in localStorage
- Verify HTTPS enforcement

### Manual Testing
- Test all forms with invalid input
- Test error messages
- Test password strength indicator
- Test logout and token cleanup

---

## Dependencies

### New Dependencies Required
- None (all fixes use native JavaScript/React)

### Backend Dependencies
- CSRF token support
- httpOnly cookie support (for token storage)
- Server-side rate limiting
- Token invalidation endpoint

---

## Notes

1. **Backend Coordination Required:**
   - CSRF protection (Fix #6)
   - httpOnly cookies for tokens (Fix #4)
   - Server-side rate limiting (Fix #9)

2. **Breaking Changes:**
   - Token storage method change may require backend updates
   - Error message format changes
   - Password requirements may affect existing users

3. **Migration Strategy:**
   - Implement fixes incrementally
   - Test each fix before moving to next
   - Maintain backward compatibility where possible
   - Provide migration guide for backend team

---

## Next Steps

1. Review this implementation plan
2. Prioritize fixes based on business needs
3. Coordinate with backend team for required changes
4. Begin implementation with Critical fixes
5. Continue with High, Medium, and Low priority fixes
6. Set up automated security checks and monitoring

---

**Document Version:** 2.0  
**Last Updated:** [Current Date]  
**Next Review:** After implementation of all fixes  
**Coverage:** All 20 Security Fixes (Complete Implementation Plan)
