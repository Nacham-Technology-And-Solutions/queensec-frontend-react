# Security Headers Configuration

## Overview

This document outlines the security headers that should be configured for the Queensec application. These headers provide an additional layer of security protection against various attacks.

## Required HTTP Headers

The following headers should be set by the web server or backend:

### X-Frame-Options: DENY
- **Purpose:** Prevents clickjacking attacks
- **Value:** `DENY` (prevents the page from being displayed in a frame)
- **Alternative:** `SAMEORIGIN` (allows framing by same origin only)

### X-Content-Type-Options: nosniff
- **Purpose:** Prevents MIME type sniffing
- **Value:** `nosniff`
- **Effect:** Forces browsers to respect the declared content type

### X-XSS-Protection: 1; mode=block
- **Purpose:** Enables XSS filter in older browsers
- **Value:** `1; mode=block`
- **Note:** Modern browsers have built-in XSS protection, but this provides compatibility

### Referrer-Policy: strict-origin-when-cross-origin
- **Purpose:** Controls referrer information sent with requests
- **Value:** `strict-origin-when-cross-origin`
- **Effect:** Sends full URL for same-origin requests, only origin for cross-origin HTTPS requests

### Permissions-Policy: geolocation=(), microphone=(), camera=()
- **Purpose:** Restricts browser features
- **Value:** `geolocation=(), microphone=(), camera=()`
- **Effect:** Disables geolocation, microphone, and camera access

### Strict-Transport-Security: max-age=31536000; includeSubDomains
- **Purpose:** Enforces HTTPS connections
- **Value:** `max-age=31536000; includeSubDomains`
- **Effect:** Forces HTTPS for 1 year, including subdomains
- **Note:** Only set this header over HTTPS connections

### Content-Security-Policy
- **Purpose:** XSS protection and resource loading control
- **Value:** See CSP configuration in `public/index.html`
- **Effect:** Restricts which resources can be loaded and from where

## Implementation

### Frontend (Meta Tags)
Security headers are implemented as meta tags in `public/index.html`:
- These meta tags work but are less secure than HTTP headers
- HTTP headers set by the server take precedence

### Backend (HTTP Headers)
The backend should set these headers in HTTP responses:
- More secure than meta tags
- Cannot be bypassed by client-side code
- Recommended approach for production

## Testing

### Browser DevTools
1. Open browser DevTools (F12)
2. Go to Network tab
3. Reload the page
4. Check response headers for security headers

### Online Tools
- Use [securityheaders.com](https://securityheaders.com) to test headers
- Use [Mozilla Observatory](https://observatory.mozilla.org/) for comprehensive security analysis

## Deployment

### Netlify
Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains"
```

### Vercel
Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    }
  ]
}
```

### Apache
Add to `.htaccess`:
```apache
Header set X-Frame-Options "DENY"
Header set X-Content-Type-Options "nosniff"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

### Nginx
Add to server configuration:
```nginx
add_header X-Frame-Options "DENY";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

## Notes

1. **Strict-Transport-Security** should only be set over HTTPS connections
2. **Content-Security-Policy** may need adjustment based on external services (Flutterwave, etc.)
3. Meta tags in HTML are a fallback but HTTP headers are preferred
4. Test headers in development before deploying to production
5. Some headers may need adjustment based on specific requirements

## References

- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Security Headers Best Practices](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)
