# Frontend Payment Verification Integration Guide

## Overview

With the migration from Flutterwave to Monnify, the payment verification flow has changed. Monnify only redirects with `paymentReference` in the query string, unlike Flutterwave which provided `status`, `tx_ref`, and `transaction_id`.

**New Requirement:** The frontend must now call a backend verification endpoint to check payment status after the redirect.

---

## Payment Flow Comparison

### Old Flow (Flutterwave)
```
1. User completes payment on Flutterwave
2. Redirect: ?status=successful&tx_ref=XXX&transaction_id=YYY
3. Frontend immediately knows status from URL
4. Frontend sends all params to backend for verification
```

### New Flow (Monnify)
```
1. User completes payment on Monnify
2. Redirect: ?paymentReference=KAD/HS73503
3. Frontend extracts paymentReference from URL
4. Frontend calls backend verification endpoint
5. Backend verifies with Monnify API and returns status
6. Frontend displays result based on response
```

---

## API Endpoints

### 1. Ticket Order Payment Verification
**Endpoint:** `POST /api/payments/verify`

**Authentication:** Required (Bearer token)

**Request Body:**
```json
{
  "paymentReference": "KAD/HS73503"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Payment verified successfully",
  "status": "successful",
  "data": {
    "paymentReference": "KAD/HS73503",
    "transactionReference": "MNFY|20190915200044|000090",
    "status": "successful",
    "amount": 5000,
    "currency": "NGN",
    "paymentMethod": "CARD",
    "paidOn": "2024-01-15 10:30:00",
    "order": {
      "id": 123,
      "status": "completed"
    },
    "transaction": {
      // Transaction details from order
    }
  }
}
```

**Error Responses:**

Payment Not Found (404):
```json
{
  "success": false,
  "message": "Payment not found",
  "status": "not_found"
}
```

Verification Failed (400):
```json
{
  "success": false,
  "message": "Unable to verify payment with Monnify",
  "status": "verification_failed",
  "paymentReference": "KAD/HS73503"
}
```

---

### 2. Wallet Funding Payment Verification
**Endpoint:** `POST /api/wallet/payment/verify`

**Authentication:** Required (Bearer token)

**Request Body:**
```json
{
  "paymentReference": "KAD/HS73503"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Payment verified and wallet funded successfully",
  "status": "successful",
  "data": {
    "paymentReference": "KAD/HS73503",
    "transactionReference": "MNFY|20190915200044|000090",
    "status": "successful",
    "amount": 5000,
    "currency": "NGN",
    "paymentMethod": "CARD",
    "paidOn": "2024-01-15 10:30:00",
    "walletTransaction": {
      "wallet_id": "TAX123",
      "amount": 5000,
      "payment_method": "CARD",
      "transaction_id": "KAD/HS73503",
      "transaction_type": "Fund Wallet",
      "date": "2024-01-15 10:30:00",
      "new_wallet_balance": 15000
    }
  }
}
```

**Error Responses:** Same as ticket order verification

---

## Payment Status Values

The `status` field in the response can have the following values:

- `successful` - Payment completed successfully
- `pending` - Payment is still processing
- `failed` - Payment failed
- `cancelled` - Payment was cancelled
- `abandoned` - User abandoned the payment
- `reversed` - Payment was reversed
- `timeout` - Payment timed out
- `partially_successful` - Partial payment (rare)

---

## Implementation Guide

### Step 1: Extract paymentReference from URL

After Monnify redirects, extract the `paymentReference` from the query string:

**JavaScript/TypeScript:**
```javascript
// Get paymentReference from URL
const urlParams = new URLSearchParams(window.location.search);
const paymentReference = urlParams.get('paymentReference');

if (!paymentReference) {
  // Handle error: No paymentReference in URL
  console.error('Payment reference not found in URL');
  return;
}
```

**React Example:**
```jsx
import { useSearchParams } from 'react-router-dom';

function PaymentStatusPage() {
  const [searchParams] = useSearchParams();
  const paymentReference = searchParams.get('paymentReference');

  useEffect(() => {
    if (paymentReference) {
      verifyPayment(paymentReference);
    }
  }, [paymentReference]);
}
```

---

### Step 2: Determine Payment Type

You need to know which endpoint to call. Options:

**Option A: Store payment type in session/localStorage before redirect**
```javascript
// Before redirecting to Monnify
localStorage.setItem('paymentType', 'ticket_order'); // or 'wallet_funding'

// After redirect
const paymentType = localStorage.getItem('paymentType');
const endpoint = paymentType === 'wallet_funding' 
  ? '/api/wallet/payment/verify' 
  : '/api/payments/verify';
```

**Option B: Try both endpoints (not recommended)**
```javascript
// Try ticket order first, if fails try wallet funding
```

**Option C: Add payment type to redirect URL (Recommended)**
```javascript
// Backend should include orderType in redirect URL
// Frontend extracts both paymentReference and orderType
const orderType = searchParams.get('orderType'); // 'ticket_order' or 'fund_wallet_order'
```

---

### Step 3: Call Verification Endpoint

**JavaScript/TypeScript Example:**
```javascript
async function verifyPayment(paymentReference, orderType = 'ticket_order') {
  try {
    const endpoint = orderType === 'fund_wallet_order' 
      ? '/api/wallet/payment/verify' 
      : '/api/payments/verify';

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        paymentReference: paymentReference
      })
    });

    const data = await response.json();

    if (data.success && data.status === 'successful') {
      // Payment successful
      handlePaymentSuccess(data);
    } else if (data.success && data.status === 'pending') {
      // Payment still pending
      handlePaymentPending(data);
    } else {
      // Payment failed or other status
      handlePaymentFailure(data);
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    handleVerificationError(error);
  }
}
```

**Axios Example:**
```javascript
import axios from 'axios';

async function verifyPayment(paymentReference, orderType = 'ticket_order') {
  try {
    const endpoint = orderType === 'fund_wallet_order' 
      ? '/api/wallet/payment/verify' 
      : '/api/payments/verify';

    const response = await axios.post(
      `${API_BASE_URL}${endpoint}`,
      { paymentReference },
      {
        headers: {
          'Authorization': `Bearer ${getAuthToken()}`,
          'Accept': 'application/json',
        }
      }
    );

    const { success, status, data, message } = response.data;

    if (success && status === 'successful') {
      handlePaymentSuccess(response.data);
    } else {
      handlePaymentStatus(response.data);
    }
  } catch (error) {
    if (error.response?.status === 404) {
      handlePaymentNotFound();
    } else if (error.response?.status === 400) {
      handleVerificationFailed(error.response.data);
    } else {
      handleNetworkError(error);
    }
  }
}
```

---

### Step 4: Handle Response

**Success Handler:**
```javascript
function handlePaymentSuccess(response) {
  const { data } = response;
  
  // Show success message
  showSuccessMessage('Payment successful!');
  
  // For ticket orders
  if (data.order) {
    // Redirect to ticket page or show ticket details
    navigate(`/tickets/${data.order.id}`);
  }
  
  // For wallet funding
  if (data.walletTransaction) {
    // Update wallet balance in UI
    updateWalletBalance(data.walletTransaction.new_wallet_balance);
    // Show success with new balance
    showSuccessMessage(
      `Wallet funded successfully! New balance: ₦${formatAmount(data.walletTransaction.new_wallet_balance)}`
    );
  }
  
  // Clear payment type from storage
  localStorage.removeItem('paymentType');
}
```

**Pending Handler:**
```javascript
function handlePaymentPending(response) {
  showInfoMessage('Payment is being processed. Please wait...');
  
  // Optionally: Poll for status update
  setTimeout(() => {
    verifyPayment(response.data.paymentReference);
  }, 5000); // Retry after 5 seconds
}
```

**Failure Handler:**
```javascript
function handlePaymentFailure(response) {
  const { status, message } = response;
  
  switch (status) {
    case 'failed':
      showErrorMessage('Payment failed. Please try again.');
      break;
    case 'cancelled':
      showWarningMessage('Payment was cancelled.');
      break;
    case 'timeout':
      showErrorMessage('Payment timed out. Please try again.');
      break;
    default:
      showErrorMessage(message || 'Payment verification failed.');
  }
  
  // Optionally redirect to retry payment
  navigate('/payment/retry');
}
```

**Error Handler:**
```javascript
function handleVerificationError(error) {
  if (error.response?.status === 404) {
    showErrorMessage('Payment not found. Please contact support.');
  } else if (error.response?.status === 400) {
    showErrorMessage('Unable to verify payment. Please try again or contact support.');
  } else {
    showErrorMessage('Network error. Please check your connection and try again.');
  }
}
```

---

## Complete React Component Example

```jsx
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PaymentStatusPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const paymentReference = searchParams.get('paymentReference');
    const orderType = searchParams.get('orderType') || 'ticket_order';

    if (!paymentReference) {
      setError('Payment reference not found');
      setLoading(false);
      return;
    }

    verifyPayment(paymentReference, orderType);
  }, []);

  const verifyPayment = async (paymentReference, orderType) => {
    try {
      setLoading(true);
      
      const endpoint = orderType === 'fund_wallet_order' 
        ? '/api/wallet/payment/verify' 
        : '/api/payments/verify';

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}${endpoint}`,
        { paymentReference },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            'Accept': 'application/json',
          }
        }
      );

      const { success, status, data, message } = response.data;

      if (success) {
        setPaymentStatus({ status, data, message });
        
        if (status === 'successful') {
          // Handle success
          if (orderType === 'fund_wallet_order' && data.walletTransaction) {
            // Update wallet balance in global state/context
            updateWalletBalance(data.walletTransaction.new_wallet_balance);
          }
          
          // Redirect after 3 seconds
          setTimeout(() => {
            navigate(orderType === 'fund_wallet_order' ? '/wallet' : '/tickets');
          }, 3000);
        }
      } else {
        setError(message || 'Payment verification failed');
      }
    } catch (err) {
      if (err.response?.status === 404) {
        setError('Payment not found');
      } else if (err.response?.status === 400) {
        setError('Unable to verify payment with payment provider');
      } else {
        setError('Network error. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="payment-status">
        <div className="spinner">Verifying payment...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="payment-status error">
        <h2>Payment Verification Error</h2>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  if (paymentStatus?.status === 'successful') {
    return (
      <div className="payment-status success">
        <h2>Payment Successful!</h2>
        <p>{paymentStatus.message}</p>
        {paymentStatus.data.walletTransaction && (
          <p>New Wallet Balance: ₦{formatAmount(paymentStatus.data.walletTransaction.new_wallet_balance)}</p>
        )}
        <p>Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="payment-status">
      <h2>Payment Status: {paymentStatus?.status}</h2>
      <p>{paymentStatus?.message}</p>
    </div>
  );
}

export default PaymentStatusPage;
```

---

## Important Notes

### 1. Authentication Required
Both endpoints require authentication. Ensure the user's auth token is included in the request headers.

### 2. Payment Type Detection
The frontend needs to know which endpoint to call. Recommended approaches:
- Include `orderType` in the redirect URL (backend should add this)
- Store payment type in localStorage before redirect
- Use a unified endpoint that auto-detects (if backend supports it)

### 3. Error Handling
Always handle these scenarios:
- Payment not found (404)
- Verification failed (400)
- Network errors
- Authentication errors (401)

### 4. Loading States
Show loading indicators while verifying payment. The verification may take 1-3 seconds.

### 5. Retry Logic
For pending payments, consider implementing retry logic:
```javascript
let retryCount = 0;
const maxRetries = 5;

function verifyWithRetry(paymentReference, orderType) {
  verifyPayment(paymentReference, orderType)
    .then(response => {
      if (response.status === 'pending' && retryCount < maxRetries) {
        retryCount++;
        setTimeout(() => {
          verifyWithRetry(paymentReference, orderType);
        }, 5000);
      }
    });
}
```

### 6. URL Cleanup
After verification, consider cleaning the URL to remove query parameters:
```javascript
// Remove query params from URL
window.history.replaceState({}, document.title, window.location.pathname);
```

---

## Testing Checklist

- [ ] Extract `paymentReference` from URL correctly
- [ ] Call correct endpoint based on payment type
- [ ] Handle successful payment response
- [ ] Handle pending payment response
- [ ] Handle failed payment response
- [ ] Handle 404 (payment not found)
- [ ] Handle 400 (verification failed)
- [ ] Handle network errors
- [ ] Show appropriate loading states
- [ ] Update UI based on payment status
- [ ] Redirect user appropriately after verification

---

## Migration Checklist

- [ ] Update payment redirect handlers
- [ ] Replace Flutterwave status extraction with Monnify paymentReference extraction
- [ ] Add verification API calls after redirect
- [ ] Update success/failure handlers
- [ ] Test ticket order payments
- [ ] Test wallet funding payments
- [ ] Test error scenarios
- [ ] Update user-facing messages
- [ ] Update documentation

---

## Support

If you encounter any issues during integration, please contact the backend team with:
- Payment reference
- Error message
- Request/response details
- Browser console logs
