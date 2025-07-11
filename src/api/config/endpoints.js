export const API_ENDPOINTS = {
    auth: {
        login: "/auth/login",
        register: "/auth/register",
    },
    admin: {
        getStudents: (params) => {
            const query = new URLSearchParams();
            console.log(params)
            query.append("role", "student");
            if (params.page) query.append("page", params.page);
            if (params.limit) query.append("limit", params.limit);
            if (params.search) query.append("search", params.search);
            return `admin/users?${query.toString()}`;
        },
        
        getFaculties: (params) => {
            const query = new URLSearchParams();
            query.append("role", "faculty");
            if (params.page) query.append("page", params.page);
            if (params.limit) query.append("limit", params.limit);
            if (params.search) query.append("search", params.search);
            return `/admin/users?${query.toString()}`;
        }
    },
}