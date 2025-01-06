// src/utils/apiEndpoints.js 
export const API_BASE_URL = process.env.REACT_APP_API_URL;

// Auth endpoints
export const AUTH_ENDPOINTS = {
    login: '/auth/user/login',
    logout: '/auth/user/logout',
    register: '/auth/user/register',
};

// Todo: Individual Endpoints

// User-related endpoints
//Todo : Ejiro Change
export const USER_ENDPOINTS = {
    getUserProfile: '/users/profile',
    updateUserProfile: '/users/profile/update',
};

// Todo: Vendor specific endpoints
export const VENDOR_ENDPOINTS = {
    getUserHaulerByTaxID: '/user/get-user-hauler-by-tax-id', //tax_id
    getUserFeeCategoryByHaulerID: '/payments/create', //Todo : Ejiro Change
    getUserFeeCategoryByHaulerTypeID: '/payments/create', //Todo : Ejiro Change
    verifyTaxID: '/user/verify-tax-id',
};

// Payment-related endpoints
//Todo : Ejiro Change
export const PAYMENT_ENDPOINTS = {
    createPayment: '/payments/create',
    getPaymentStatus: '/payments/status',
};
