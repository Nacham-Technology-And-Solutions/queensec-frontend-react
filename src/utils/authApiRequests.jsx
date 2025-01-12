import { API_BASE_URL, AUTH_ENDPOINTS } from './apiEndpoints';
import { getData, postData } from './apiServce';

export const login = async (credentials) => {
    const response = await postData(API_BASE_URL + '' + AUTH_ENDPOINTS.login.url, credentials, 'Error logging in');
    if (response.success) {
        return response.data;
    }
};

export const logout = async () => {
    const response = await postData(API_BASE_URL + '' + AUTH_ENDPOINTS.logout.url, {}, 'Error logging out');
    if (response.success) {
        return response.data;
    }
};

export const registerUser = async (credentials) => {
    const response = await postData(API_BASE_URL + '' + AUTH_ENDPOINTS.register.url, credentials, 'Error registering user');
    if (response.success) {
        return response.data;
    }
};

export const loginStatus = async () => {
    const response = await getData(API_BASE_URL + '' + AUTH_ENDPOINTS.loginStatus.url, {}, 'Error checking status');
    return response;
};