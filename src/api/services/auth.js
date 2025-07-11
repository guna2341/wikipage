import apiClient from "../config/axios";
import { API_ENDPOINTS } from "../config/endpoints";


export const authService = {

    register: async (credentials) => { 
        return apiClient.post(API_ENDPOINTS.auth.register, credentials);
    },

    login: async (credentials) => {
        return apiClient.post(API_ENDPOINTS.auth.login, credentials);
    }
};