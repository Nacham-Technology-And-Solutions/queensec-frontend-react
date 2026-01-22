# Notifications API Documentation

This document provides instructions for frontend developers on how to consume the Notifications API endpoints.

## Base URL

All notification endpoints are prefixed with `/api/notifications` and require authentication using Laravel Sanctum.

## Authentication

All endpoints require a valid authentication token. Include the token in the request headers:

```
Authorization: Bearer {your_token}
Accept: application/json
```

## Endpoints

### 1. Get Unread Notifications

Retrieve all unread notifications for the authenticated user.

**Endpoint:** `GET /api/notifications/unread`

**Headers:**
- `Authorization: Bearer {token}`
- `Accept: application/json`

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Retrieved unread notifications",
    "data": [
        {
            "id": 1,
            "user_id": 1,
            "broad_category": "account_alerts",
            "sub_category": "payment",
            "subject": "Payment Successful",
            "title": "Payment Successfully Processed",
            "message": "Your payment of 5000 for Gold on Hauler Name Number Plate: [ABC123], has been processed successfully. Thank you!",
            "entity_id": "123",
            "click_text": "View Order",
            "click_action": true,
            "click_url": "https://queensec.netlify.app/orders/123",
            "type": "info",
            "is_read": false,
            "mail": true,
            "push": true,
            "in_app": true,
            "created_at": "2024-01-15T10:30:00.000000Z",
            "updated_at": "2024-01-15T10:30:00.000000Z"
        }
    ]
}
```

**Example Request (JavaScript/Fetch):**
```javascript
const response = await fetch('https://your-api-domain.com/api/notifications/unread', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }
});

const data = await response.json();
console.log(data.data); // Array of unread notifications
```

---

### 2. Get All Notifications

Retrieve all notifications (both read and unread) for the authenticated user with pagination.

**Endpoint:** `GET /api/notifications`

**Headers:**
- `Authorization: Bearer {token}`
- `Accept: application/json`

**Query Parameters (Optional):**
- `page` - Page number for pagination (default: 1)

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Retrieved all notifications",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "user_id": 1,
                "broad_category": "account_alerts",
                "sub_category": "payment",
                "subject": "Payment Successful",
                "title": "Payment Successfully Processed",
                "message": "Your payment of 5000 for Gold on Hauler Name Number Plate: [ABC123], has been processed successfully. Thank you!",
                "entity_id": "123",
                "click_text": "View Order",
                "click_action": true,
                "click_url": "https://queensec.netlify.app/orders/123",
                "type": "info",
                "is_read": false,
                "mail": true,
                "push": true,
                "in_app": true,
                "created_at": "2024-01-15T10:30:00.000000Z",
                "updated_at": "2024-01-15T10:30:00.000000Z"
            }
        ],
        "first_page_url": "http://your-api-domain.com/api/notifications?page=1",
        "from": 1,
        "last_page": 5,
        "last_page_url": "http://your-api-domain.com/api/notifications?page=5",
        "links": [...],
        "next_page_url": "http://your-api-domain.com/api/notifications?page=2",
        "path": "http://your-api-domain.com/api/notifications",
        "per_page": 20,
        "prev_page_url": null,
        "to": 20,
        "total": 100
    }
}
```

**Example Request (JavaScript/Fetch):**
```javascript
const page = 1;
const response = await fetch(`https://your-api-domain.com/api/notifications?page=${page}`, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }
});

const data = await response.json();
console.log(data.data); // Paginated notifications object
```

---

### 3. Mark Notification as Read

Mark a specific notification as read.

**Endpoint:** `POST /api/notifications/{id}/mark-read`

**Headers:**
- `Authorization: Bearer {token}`
- `Accept: application/json`
- `Content-Type: application/json`

**URL Parameters:**
- `id` - The notification ID (integer)

**Response (200 OK):**
```json
{
    "success": true,
    "message": "Notification marked as read",
    "data": null
}
```

**Error Response (404 Not Found):**
```json
{
    "message": "No query results for model [App\\Models\\NotificationModel] {id}"
}
```

**Example Request (JavaScript/Fetch):**
```javascript
const notificationId = 1;
const response = await fetch(`https://your-api-domain.com/api/notifications/${notificationId}/mark-read`, {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const data = await response.json();
if (data.success) {
    console.log('Notification marked as read');
}
```

---

### 4. Mark All Notifications as Read

Mark all unread notifications for the authenticated user as read.

**Endpoint:** `POST /api/notifications/mark-all-read`

**Headers:**
- `Authorization: Bearer {token}`
- `Accept: application/json`
- `Content-Type: application/json`

**Response (200 OK):**
```json
{
    "success": true,
    "message": "All notifications marked as read",
    "data": {
        "updated_count": 5
    }
}
```

**Example Request (JavaScript/Fetch):**
```javascript
const response = await fetch('https://your-api-domain.com/api/notifications/mark-all-read', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const data = await response.json();
if (data.success) {
    console.log(`${data.data.updated_count} notifications marked as read`);
}
```

---

## Notification Data Structure

Each notification object contains the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Unique notification ID |
| `user_id` | integer | ID of the user who owns this notification |
| `broad_category` | string | Category: `promotions`, `account_alerts`, or `system_updates` |
| `sub_category` | string | Sub-category: `profile`, `hauler`, `payment`, `ticket`, `order`, or `system` |
| `subject` | string | Notification subject line |
| `title` | string | Notification title |
| `message` | string | Full notification message |
| `entity_id` | string\|null | ID of the related entity (e.g., payment ID, order ID) |
| `click_text` | string\|null | Text for the action button (if `click_action` is true) |
| `click_action` | boolean | Whether the notification has a clickable action |
| `click_url` | string\|null | URL to navigate to when clicking the notification |
| `type` | string | Notification type: `info`, `warning`, or `alert` |
| `is_read` | boolean | Whether the notification has been read |
| `mail` | boolean | Whether email was sent |
| `push` | boolean | Whether push notification was sent |
| `in_app` | boolean | Whether notification is stored in-app |
| `created_at` | datetime | When the notification was created |
| `updated_at` | datetime | When the notification was last updated |

---

## Notification Types

### Broad Categories

- **`promotions`** - Promotional notifications
- **`account_alerts`** - Account-related alerts (default)
- **`system_updates`** - System-wide updates

### Sub-Categories

- **`profile`** - Profile-related notifications
- **`hauler`** - Hauler-related notifications
- **`payment`** - Payment-related notifications
- **`ticket`** - Ticket-related notifications
- **`order`** - Order-related notifications
- **`system`** - General system notifications

### Notification Types

- **`info`** - Informational notification (default)
- **`warning`** - Warning notification
- **`alert`** - Alert notification

---

## Common Use Cases

### 1. Display Notification Badge Count

```javascript
async function getUnreadCount() {
    const response = await fetch('https://your-api-domain.com/api/notifications/unread', {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    return data.data.length; // Use this for badge count
}
```

### 2. Display Notification List

```javascript
async function getNotifications(page = 1) {
    const response = await fetch(`https://your-api-domain.com/api/notifications?page=${page}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    return data.data; // Paginated notifications
}
```

### 3. Handle Notification Click

```javascript
async function handleNotificationClick(notification) {
    // Mark as read
    await fetch(`https://your-api-domain.com/api/notifications/${notification.id}/mark-read`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    
    // Navigate if click_url exists
    if (notification.click_action && notification.click_url) {
        window.location.href = notification.click_url;
    }
}
```

### 4. Mark All as Read

```javascript
async function markAllAsRead() {
    const response = await fetch('https://your-api-domain.com/api/notifications/mark-all-read', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if (data.success) {
        // Refresh notification list
        await refreshNotifications();
    }
}
```

---

## Error Handling

All endpoints may return the following error responses:

### 401 Unauthorized
```json
{
    "message": "Unauthenticated."
}
```
**Solution:** Ensure you're sending a valid authentication token.

### 404 Not Found
```json
{
    "message": "No query results for model [App\\Models\\NotificationModel] {id}"
}
```
**Solution:** The notification ID doesn't exist or doesn't belong to the authenticated user.

### 500 Internal Server Error
```json
{
    "message": "Server Error"
}
```
**Solution:** Contact backend team for support.

---

## Best Practices

1. **Polling Frequency**: For unread notifications, consider polling every 30-60 seconds instead of continuously.

2. **Pagination**: Always implement pagination when displaying all notifications to improve performance.

3. **Caching**: Cache notifications locally and only fetch new ones when needed.

4. **Error Handling**: Always handle errors gracefully and show user-friendly messages.

5. **Loading States**: Show loading indicators while fetching notifications.

6. **Optimistic Updates**: When marking notifications as read, update the UI immediately before the API call completes.

---

## Example React Hook

```javascript
import { useState, useEffect } from 'react';

function useNotifications(token) {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUnread = async () => {
        try {
            const response = await fetch('https://your-api-domain.com/api/notifications/unread', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            if (data.success) {
                setUnreadCount(data.data.length);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchAll = async (page = 1) => {
        setLoading(true);
        try {
            const response = await fetch(`https://your-api-domain.com/api/notifications?page=${page}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            if (data.success) {
                setNotifications(data.data);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const markAsRead = async (id) => {
        try {
            const response = await fetch(`https://your-api-domain.com/api/notifications/${id}/mark-read`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (data.success) {
                // Update local state
                setNotifications(prev => 
                    prev.map(notif => 
                        notif.id === id ? { ...notif, is_read: true } : notif
                    )
                );
                setUnreadCount(prev => Math.max(0, prev - 1));
            }
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        if (token) {
            fetchUnread();
            fetchAll();
        }
    }, [token]);

    return {
        notifications,
        unreadCount,
        loading,
        error,
        fetchUnread,
        fetchAll,
        markAsRead
    };
}
```

---

## Notes

- Real-time notifications via WebSocket will be implemented in a future update.
- All timestamps are in ISO 8601 format (UTC).
- The `click_url` field may contain relative or absolute URLs depending on the notification type.
- Notifications are automatically created by the backend for various events (payments, profile updates, etc.).
