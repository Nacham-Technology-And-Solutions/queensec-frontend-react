// src/utils/apiEndpoints.js 
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Auth endpoints
export const AUTH_ENDPOINTS = {
    login: { url: '/auth/user/login', method: 'post', payload: 'login-type, email, password' },
    logout: { url: '/auth/user/logout', method: 'post', payload: '' },
    register: { url: '/auth/user/register', method: 'post', payload: 'first_name, middle_name, last_name, email, phone, password, password_confirmation, business_name, state, locality, username, account_type' },
    loginStatus: { url: '/auth/user/auth-status', method: 'get', payload: '' },
    passwordResetRequest: { url: '/auth/user/forgot-password', method: 'post', payload: 'email' },
    passwordReset: { url: '/auth/user/reset-password', method: 'post', payload: 'email, password, password_confirmation, token' },
};

// Auth endpoints
export const BASIC_ENDPOINTS = {
    getHaulerTypes: { url: '/haulers/type', method: 'get', payload: '' },
    getLocations: { url: '/locations', method: 'post', payload: '' },
    register: { url: '/auth/user/register', method: 'post', payload: '' },
};

// Todo: Individual Endpoints

// User-related endpoints
//Todo : Ejiro Change
export const USER_ENDPOINTS = {
    getUserProfile: { url: '/users/profile', method: 'get', payload: '' },
    updateUserProfile: { url: '/users/profile/update', method: 'put', payload: '' },
    //
    getFeeCategories: { url: '/fee-category', method: 'get', payload: 'hauler_id' },
    getTransactions: { url: '/transactions', method: 'get', payload: '' },
    getTransactionByID: { url: '/get-transaction-by-id', method: 'get', payload: 'order_id' },
    getTransactionChart: { url: '/transactions/chart', method: 'get', payload: '' },
    getHaulers: { url: '/haulers', method: 'get', payload: '' },
    addHauler: { url: '/haulers', method: 'post', payload: 'name, number_plate, hauler_type_id' },
    editHauler: { url: '/haulers', method: 'put', payload: 'name, number_plate, hauler_type_id' },
    removeHauler: { url: '/haulers/', method: 'delete', payload: 'id' },
};

// Todo: Vendor specific endpoints
export const VENDOR_ENDPOINTS = {
    getUserHaulerByTaxID: { url: '/user/get-user-hauler-by-tax-id', method: 'get', payload: 'tax_id' },
    getUserFeeCategoryByHaulerID: { url: '/user/get-fee-category', method: 'get', payload: 'hauler_id' },
    getFeeCategoryByHaulerTypeID: { url: '/user/get-fee-category-by-hauler-type', method: 'get', payload: 'hauler_type_id' },
    verifyTaxID: { url: '/user/verify-tax-id', method: 'get', payload: 'tax_id' },
    getABeneficiaryData: { url: '/user/get-beneficiary/', method: 'get', payload: 'id' },
    getAllBeneficiariesData: { url: '/user/get-getBeneficiaries/', method: 'get', payload: '' },
    addBeneficiaryData: { url: '/user/add-beneficiary', method: 'post', payload: '' },
}

// Payment-related endpoints
//Todo : Ejiro Change
export const PAYMENT_ENDPOINTS = {
    createPayment: { url: '/orders', method: 'post', payload: 'payer_id, payee_id, mineral_id, fee_category_id, total_amount, payee_hauler_id, hauler_type_id, number_plate, driver_name, phone_number, loading_point, offloading_point' },
    updatePayment: { url: '/payments', method: 'post', payload: '' },
    getPaymentStatus: { url: '/payments/status', method: 'post', payload: '' },
};
