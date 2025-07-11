import { adminServices } from '@/api/services/admin';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useAdminStore = create(
  immer((set, get) => ({
    currentNavbar: "0",
    createCourseTab: false,

    students: [],
    studentLoading: false,
    studentsRequestId: 0,
    searchStudents: [], 
    totalStudents: 1,
    loadedPages: {}, 

    faculties: [],
    facultyLoading: false,
    facultyRequestId: 0,
    searchFaculty: [], 
    totalFaculties:1,
    facultyLoadedPages:{},

    changeUsers: (key, value) => {
      set((state) => {
        state.getUsers[key] = value;
      });
    },

    changeRegulation: (key, value) => {
      set({ [key]: value });
    },

    getStudents: async (search, page, limit) => {
      const state = get();
      const currentRequestId = ++state.studentsRequestId;

      if (search) {
        try {
 
          const response = await adminServices.getStudents({ search });

          if (get().studentsRequestId === currentRequestId) {
            set({
              searchStudents: response?.data?.data || [],
              studentLoading: false,
            });
            return { state: true };
          }
        } catch (err) {
          if (get().studentsRequestId === currentRequestId) {
            set({ studentLoading: false });
          }
          return { state: false, message: err.message || 'Search failed' };
        }
        return { state: true };
      }

      if (state.loadedPages[page]) {
        return { state: true }; 
      }

      try {
        set({ studentLoading: true });
        const response = await adminServices.getStudents({ page, limit });

        if (get().studentsRequestId === currentRequestId) {
          const newData = response?.data?.data || [];
          const totalCount = response?.data?.length || 1;

          const startIndex = (page - 1) * limit;

          set((state) => {
            const updatedStudents = [...state.students];

            newData.forEach((student, index) => {
              updatedStudents[startIndex + index] = student;
            });

            state.loadedPages[page] = true;

            state.students = updatedStudents;
            state.totalStudents = totalCount;
            state.studentLoading = false;
          });

          return { state: true };
        }
      } catch (err) {
        console.error("Pagination failed", err.message);
        if (get().studentsRequestId === currentRequestId) {
          set({ studentLoading: false });
        }
        return { state: false, message: err.message || 'Failed to fetch students' };
      }

      return { state: true };
    },

    getFaculty: async (search, page, limit) => {
      const state = get();
      const currentRequestId = ++state.facultyRequestId;

      if (search) {
        try {
          set({ facultyLoading: true });
          const response = await adminServices.getFaculty({ search });
          if (get().facultyRequestId === currentRequestId) {
            set({
              facultyLoading: false,
              searchFaculty: response?.data?.data || []
            });
          }
          return { state: true };
        } catch (err) {
          if (get().facultyRequestId === currentRequestId) {
            set({ facultyLoading: false });
          }
          return { state: false, message: err.message || 'Search failed' };
        }
      }
      if (state.facultyLoadedPages[page]) {
        return { state: true };
      }

      try {
        set({ facultyLoading: true });
        const response = await adminServices.getFaculty({ page, limit });
        if (get().facultyRequestId === currentRequestId) {
          const newData = response?.data?.data || [];
          const totalCount = response?.data?.length || 1;
          const startIndex = (page - 1) * limit;
          set((state) => {
            const updatedFaculties = [...state.faculties];

            newData.forEach((faculty, index) => {
              updatedFaculties[startIndex + index] = faculty;
            });

            state.facultyLoadedPages[page] = true;
            state.faculties = updatedFaculties;
            state.totalFaculties = totalCount;
            state.facultyLoading = false;
          });
        }
        return { state: true };
      } catch (err) {
        console.error("Faculty pagination failed", err.message);
        if (get().facultyRequestId === currentRequestId) {
          set({ facultyLoading: false });
        }
        return { state: false, message: err.message || 'Failed to fetch faculty' };
      }
    }
  }))
);

export default useAdminStore;