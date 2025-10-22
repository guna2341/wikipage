import { create } from "zustand";

export const useCreateCourse = create((set, get) => ({
    course: {},
    
    coursePlan: [],
    
    courseDiscourse: [],

    createDiscourse: (course) => {
        set({ courseDiscourse: course });
    },

    createCoursePlan: (course) => {
        set({ coursePlan: course });
    },

  createCourse: (name, description, objective) => {
      set({
          course: {
              ["name"]: name,
              ["description"]: description,
              ["objective"]: objective
          }
      });
  },
}));
