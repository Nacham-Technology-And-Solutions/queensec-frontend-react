import { useState, useEffect, useCallback } from 'react';
import {
    getUnreadNotifications,
    getAllNotifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
} from '../utils/notificationApiRequests';

/**
 * Custom hook for managing notifications
 * @param {boolean} autoFetch - Whether to automatically fetch notifications on mount
 * @param {number} pollingInterval - Interval in milliseconds for polling unread notifications (default: 60000 = 60 seconds)
 * @returns {Object} Notification state and functions
 */
function useNotifications(autoFetch = true, pollingInterval = 60000) {
    const [notifications, setNotifications] = useState([]);
    const [unreadNotifications, setUnreadNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        per_page: 20,
        total: 0,
    });

    /**
     * Fetch unread notifications
     */
    const fetchUnread = useCallback(async () => {
        try {
            const data = await getUnreadNotifications();
            setUnreadNotifications(data);
            setUnreadCount(data.length);
        } catch (err) {
            setError(err.message || 'Failed to fetch unread notifications');
            console.error('Error fetching unread notifications:', err);
        }
    }, []);

    /**
     * Fetch all notifications with pagination
     * @param {number} page - Page number to fetch
     * @param {boolean} append - Whether to append to existing notifications (for pagination)
     */
    const fetchAll = useCallback(async (page = 1, append = false) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getAllNotifications(page);
            if (data) {
                if (append && page > 1) {
                    // Append new notifications to existing ones
                    setNotifications((prev) => [...prev, ...(data.data || [])]);
                } else {
                    // Replace notifications (first page or refresh)
                    setNotifications(data.data || []);
                }
                setPagination({
                    current_page: data.current_page || 1,
                    last_page: data.last_page || 1,
                    per_page: data.per_page || 20,
                    total: data.total || 0,
                });
            }
        } catch (err) {
            setError(err.message || 'Failed to fetch notifications');
            console.error('Error fetching notifications:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Mark a notification as read
     * @param {number} id - Notification ID
     */
    const markAsRead = useCallback(async (id) => {
        try {
            const success = await markNotificationAsRead(id);
            if (success) {
                // Optimistically update local state
                setNotifications((prev) =>
                    prev.map((notif) =>
                        notif.id === id ? { ...notif, is_read: true } : notif
                    )
                );
                setUnreadNotifications((prev) => prev.filter((notif) => notif.id !== id));
                setUnreadCount((prev) => Math.max(0, prev - 1));
            }
            return success;
        } catch (err) {
            setError(err.message || 'Failed to mark notification as read');
            console.error('Error marking notification as read:', err);
            return false;
        }
    }, []);

    /**
     * Mark all notifications as read
     */
    const markAllAsRead = useCallback(async () => {
        try {
            const result = await markAllNotificationsAsRead();
            if (result) {
                // Optimistically update local state
                setNotifications((prev) =>
                    prev.map((notif) => ({ ...notif, is_read: true }))
                );
                setUnreadNotifications([]);
                setUnreadCount(0);
            }
            return result;
        } catch (err) {
            setError(err.message || 'Failed to mark all notifications as read');
            console.error('Error marking all notifications as read:', err);
            return null;
        }
    }, []);

    // Auto-fetch on mount if enabled
    useEffect(() => {
        if (autoFetch) {
            fetchUnread();
            fetchAll(1);
        }
    }, [autoFetch, fetchUnread, fetchAll]);

    // Set up polling for unread notifications
    useEffect(() => {
        if (!autoFetch || pollingInterval <= 0) return;

        const interval = setInterval(() => {
            fetchUnread();
        }, pollingInterval);

        return () => clearInterval(interval);
    }, [autoFetch, pollingInterval, fetchUnread]);

    return {
        notifications,
        unreadNotifications,
        unreadCount,
        loading,
        error,
        pagination,
        fetchUnread,
        fetchAll,
        markAsRead,
        markAllAsRead,
        refresh: () => {
            fetchUnread();
            fetchAll(pagination.current_page);
        },
    };
}

export default useNotifications;
