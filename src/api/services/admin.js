import apiClient from "../config/axios";
import { API_ENDPOINTS } from "../config/endpoints";

export const adminServices = {
    getStudents: async (params) => {
        return apiClient.get(API_ENDPOINTS.admin.getStudents(params));
    },

    getFaculty: async (params) => {
        return apiClient.get(API_ENDPOINTS.admin.getFaculties(params));
    }
};