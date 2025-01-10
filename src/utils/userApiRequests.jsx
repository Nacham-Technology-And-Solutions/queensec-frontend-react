import { API_BASE_URL, BASIC_ENDPOINTS, USER_ENDPOINTS } from './apiEndpoints'; 
import { getData } from './apiServce'; 
export const getHaulers = async () => {
    const response = await getData(API_BASE_URL + '' + USER_ENDPOINTS.getHaulers.url, {}, 'Error fetching users hauler');
    if (response.success) {
        return response.data;
    }
};

export const getHaulerTypes = async () => {
    const response = await getData(API_BASE_URL + '' + BASIC_ENDPOINTS.getHaulerTypes.url, {}, 'Error fetching hauler types');
    if (response.success) {
        return response.data;
    }
};