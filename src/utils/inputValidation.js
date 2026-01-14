// Input validation and sanitization utilities

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

// Email validation
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
  if (trimmedEmail.length > INPUT_LIMITS.email) {
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
  const domainRegex = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*\.[a-z]{2,}$/i;
  if (!domainRegex.test(domainPart)) {
    return { isValid: false, error: 'Email domain is invalid' };
  }

  return { isValid: true };
};

// Password strength validation
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

// Calculate password strength
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
