// src/api/apiService.jsx
import axios from 'axios';
import { toast } from 'react-toastify';

// Set base URL for API
// const BASE_URL = 'https://admin.queensecglobal.com/api';
const BASE_URL = process.env.REACT_APP_API_URL;

// Create an axios instance (if you want to add default headers, interceptors, etc.)
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'API-Token': 'kadamines.v1',
    },
});

// Adding a token to headers before each request
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Function to get data
export const getData = async (endpoint, data, defaultErrorMessage) => {
    try {
        const response = await apiClient.get(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(defaultErrorMessage ?? 'Error fetching data: ', error);
        // throw error;
        // toast.error('Error: ' + error, {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
        alert(error.response.data.message);
        throw error.response ? error.response.data : defaultErrorMessage;
    }
};

// Function to post data
export const postData = async (endpoint, data, defaultErrorMessage) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(defaultErrorMessage ?? 'Error posting data: ', error);
        // toast.error('Error: ' + error, {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
        alert(error.response.data.message);
        throw error.response ? error.response.data : defaultErrorMessage;
    }
};

// Function to put data
export const putData = async (endpoint, data, defaultErrorMessage) => {
    try {
        const response = await apiClient.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(defaultErrorMessage ?? 'Error updating data: ', error);
        // toast.error('Error: ' + error, {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
        alert(error.response.data.message);
        throw error.response ? error.response.data : defaultErrorMessage;
    }
};

// Function to delete data
export const deleteData = async (endpoint, defaultErrorMessage) => {
    try {
        const response = await apiClient.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error(defaultErrorMessage ?? 'Error deleting data: ', error);
        alert(error.response.data.message);
        throw error.response ? error.response.data : defaultErrorMessage;
    }
};
