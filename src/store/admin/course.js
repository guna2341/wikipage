import { create } from "zustand";
import axios from "axios";

export const CourseStore = create((set, get) => ({
  students: [],
  faculties: [],
  loading: false,
  error: null,

  studentsPagination: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  },
  facultiesPagination: {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  },

  getStudents: async (query) => {
  
    const { sem, course, page = 1, limit = 10, ...otherQuery } = query;

    try {
      set({ loading: true, error: null });

      const queryParams = {
        sem: sem || "",
        dept: course || "", 
        page: page,
        limit: limit,
        ...otherQuery, 
      };
      const apiUrl = `${import.meta.env.VITE_API_URL || "http://localhost:3000/wikipage/admin/users?role=student"}`;

      const response = await axios.get(
        apiUrl,
        {
          params: queryParams,
        }
      );

      const data = await response.data;

      set({
        students: data.data || [],
        studentsPagination: {
          currentPage: data.currentPage || page,
          totalItems: data.length,
          totalPages: data.length/10 || 1,
          itemsPerPage: 10,
        },
        loading: false,
      });

      return {
        success: true,
        data: data.data,
        pagination: {
          currentPage: data.currentPage || page,
          totalItems: data.totalItems || (data.data ? data.data.length : 0),
          totalPages: data.length / 10 || 1,
          itemsPerPage: 10,
        },
        message: data.message,
      };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch students";

      set({
        loading: false,
        error: errorMessage,
      });

      return {
        success: false,
        error: errorMessage,
      };
    }
  },

  getFaculties: async (query) => {
    const { sem, course, page = 1, limit = 10, ...otherQuery } = query;

    try {
      set({ loading: true, error: null });

      // Build query parameters
      const queryParams = {
        role: "faculty",
        sem: sem || "",
        dept: course || "", // assuming 'course' maps to 'dept' in your backend
        page: page,
        limit: limit,
        ...otherQuery, // spread any additional query params like sortOrder, search, year
      };

      const apiUrl = `${import.meta.env.VITE_API_URL || "http://localhost:3000/wikipage/admin/users?role=faculty"}`;

      const response = await axios.get(apiUrl, {
        params: queryParams,
      });

      // Log the response for debugging (only in development)
      if (import.meta.env.DEV) {
        console.log("Faculties API Response Status:", response.status);
      }

      const data = response.data;

      // Ensure data structure is as expected
      const facultiesData = Array.isArray(data?.data) ? data.data : [];

      set({
        faculties: facultiesData,
        facultiesPagination: {
          currentPage: data.currentPage || page,
          totalItems: data.length,
          totalPages: data.length || 10,
          itemsPerPage: 10,
        },
        loading: false,
        error: null,
      });

      return {
        success: true,
        data: facultiesData,
        pagination: {
          currentPage: data.currentPage || page,
          totalItems: data.length,
          totalPages: data.length || 10,
          itemsPerPage: 10,
        },
        message:
          data?.message ||
          (facultiesData.length > 0
            ? "Faculties loaded successfully"
            : "No faculties found"),
      };
    } catch (error) {
      // Handle axios errors gracefully
      console.warn("Error in getFaculties:", error.message);

      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        const status = error.response.status;

        if (status === 404) {
          set({
            faculties: [],
            loading: false,
            error: null,
            facultiesPagination: {
              currentPage: 1,
              totalPages: 1,
              totalItems: 0,
              itemsPerPage: limit,
            },
          });
          return {
            success: true,
            data: [],
            pagination: {
              currentPage: 1,
              totalPages: 1,
              totalItems: 0,
              itemsPerPage: limit,
            },
            message: "No faculties found",
          };
        }

        if (status >= 500) {
          set({
            faculties: [],
            loading: false,
            error: null,
            facultiesPagination: {
              currentPage: 1,
              totalPages: 1,
              totalItems: 0,
              itemsPerPage: limit,
            },
          });
          return {
            success: true,
            data: [],
            pagination: {
              currentPage: 1,
              totalPages: 1,
              totalItems: 0,
              itemsPerPage: limit,
            },
            message: "Server error - please try again later",
          };
        }
      }

      // Network errors or other unexpected errors
      set({
        faculties: [],
        loading: false,
        error: null, // Don't show error in UI, just show empty state
        facultiesPagination: {
          currentPage: 1,
          totalPages: 1,
          totalItems: 0,
          itemsPerPage: limit,
        },
      });

      return {
        success: true, // Return success to avoid error UI
        data: [],
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalItems: 0,
          itemsPerPage: limit,
        },
        message:
          error.code === "ERR_NETWORK"
            ? "Unable to connect to server"
            : "Unable to load faculties",
      };
    }
  },

  // Pagination helper methods
  setStudentsPage: (page) => {
    const state = get();
    set({
      studentsPagination: {
        ...state.studentsPagination,
        currentPage: page,
      },
    });
  },

  setFacultiesPage: (page) => {
    const state = get();
    set({
      facultiesPagination: {
        ...state.facultiesPagination,
        currentPage: page,
      },
    });
  },

  setStudentsItemsPerPage: (itemsPerPage) => {
    const state = get();
    set({
      studentsPagination: {
        ...state.studentsPagination,
        itemsPerPage,
        currentPage: 1, // Reset to first page when changing items per page
      },
    });
  },

  setFacultiesItemsPerPage: (itemsPerPage) => {
    const state = get();
    set({
      facultiesPagination: {
        ...state.facultiesPagination,
        itemsPerPage,
        currentPage: 1, // Reset to first page when changing items per page
      },
    });
  },

  // Helper function to clear error
  clearError: () => set({ error: null }),

  // Helper function to reset store
  reset: () =>
    set({
      students: [],
      faculties: [],
      loading: false,
      error: null,
      studentsPagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10,
      },
      facultiesPagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10,
      },
    }),
}));
