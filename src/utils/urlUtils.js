// URL utility functions
// Centralizes URL generation for QR codes, ticket status, etc.

import config from '../config/env';

/**
 * Get validator URL for ticket ID
 * @param {string} ticketId - Ticket ID
 * @returns {string} Validator URL
 */
export const getValidatorUrl = (ticketId) => {
    return `${config.urls.validatorUrl}/ticket-id?ticket_id=${ticketId}`;
};

/**
 * Get ticket status URL
 * @param {string} ticketId - Ticket ID
 * @returns {string} Ticket status URL
 */
export const getTicketStatusUrl = (ticketId) => {
    return `${config.urls.ticketStatusUrl}?ticket_id=${ticketId}`;
};

/**
 * Get default image URL
 * @returns {string} Default image URL
 */
export const getDefaultImageUrl = () => {
    return config.urls.defaultImageUrl;
};

/**
 * Get base URL
 * @returns {string} Base URL
 */
export const getBaseUrl = () => {
    return config.urls.baseUrl;
};
