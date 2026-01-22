import { API_BASE_URL, NOTIFICATION_ENDPOINTS } from './apiEndpoints';
import { getData, postData } from './apiServce';

/**
 * Get all unread notifications for the authenticated user
 * @returns {Promise<Array>} Array of unread notifications
 */
export const getUnreadNotifications = async () => {
    const response = await getData(
        API_BASE_URL + NOTIFICATION_ENDPOINTS.getUnread.url,
        {},
        'Error fetching unread notifications'
    );
    if (response.success) {
        return response.data;
    }
    return [];
};

/**
 * Get all notifications (read and unread) with pagination
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Object>} Paginated notifications object
 */
export const getAllNotifications = async (page = 1) => {
    const response = await getData(
        `${API_BASE_URL}${NOTIFICATION_ENDPOINTS.getAll.url}?page=${page}`,
        {},
        'Error fetching notifications'
    );
    if (response.success) {
        return response.data;
    }
    return null;
};

/**
 * Mark a specific notification as read
 * @param {number} notificationId - The notification ID
 * @returns {Promise<boolean>} True if successful, false otherwise
 */
export const markNotificationAsRead = async (notificationId) => {
    const url = `${API_BASE_URL}/notifications/${notificationId}/mark-read`;
    const response = await postData(url, {}, 'Error marking notification as read');
    return response.success === true;
};

/**
 * Mark all notifications as read
 * @returns {Promise<Object>} Response object with updated_count
 */
export const markAllNotificationsAsRead = async () => {
    const response = await postData(
        API_BASE_URL + NOTIFICATION_ENDPOINTS.markAllAsRead.url,
        {},
        'Error marking all notifications as read'
    );
    if (response.success) {
        return response.data;
    }
    return null;
};
