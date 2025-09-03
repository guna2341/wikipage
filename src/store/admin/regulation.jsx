import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios'; // Or your preferred HTTP client

const useAdminRegulationStore = create(
  immer((set) => ({
    // Student State
    students: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: false,

    // Faculty State
    faculties: [],
    facultyCurrentPage: 1,
    facultyTotalPages: 1,
    isFacultyLoading: false,

    // Shared State
    currentNavbar: "0",
    createCourseTab: false,

    // Fetch Students Logic
    fetchStudents: async (page = 1, limit = 10) => {
      set({ isLoading: true });
      try {
        const response = await axios.get(`http://localhost:3000/wikipage/admin/users?role=student&page=${page}&limit=${limit}`);
        const studentData = response.data.data;
        const totalStudents = response.data.length;
        const calculatedTotalPages = Math.ceil(totalStudents / limit);

        set((state) => {
          state.students = studentData;
          state.totalPages = calculatedTotalPages;
          state.currentPage = page;
        });
      } catch (error) {
        console.error("Failed to fetch students:", error);
        set({ students: [], totalPages: 1 });
      } finally {
        set({ isLoading: false });
      }
    },

    // Fetch Faculties Logic
    fetchFaculties: async (page = 1, limit = 10) => {
      set({ isFacultyLoading: true });
      try {
        // Assumes a similar API endpoint for faculties
        const response = await axios.get(`http://localhost:3000/wikipage/admin/users?role=faculty&page=${page}&limit=${limit}`);
        const facultyData = response.data.data;
        const totalFaculties = response.data.length;
        const calculatedTotalPages = Math.ceil(totalFaculties / limit);

        set((state) => {
          state.faculties = facultyData;
          state.facultyTotalPages = calculatedTotalPages;
          state.facultyCurrentPage = page;
        });
      } catch (error) {
        console.error("Failed to fetch faculties:", error);
        set({ faculties: [], facultyTotalPages: 1 });
      } finally {
        set({ isFacultyLoading: false });
      }
    },

    // Other Actions
    changeRegulation: (key, value) => {
      set({ [key]: value });
    },

    setCurrentPage: (page) => {
      set({ currentPage: page });
    },

    setFacultyCurrentPage: (page) => {
      set({ facultyCurrentPage: page });
    },
  }))
);

export default useAdminRegulationStore;