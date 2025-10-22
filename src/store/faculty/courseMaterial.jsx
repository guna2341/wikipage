import { CourseMaterial } from '@/pages';
import axios from 'axios';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useCourseMaterialStore = create(
  immer((set,get) => ({
    createCourseTab:1,
    changeCourse:"-1",
    changeCourseMaterial:(key,value) => {
    set({[key]:value});
    },
    
    courseMaterial: {},

    mappedCourses: [],
    courseData: {},
    courseHistory: {},

    handleNavigate: (navigate, path) => {
      navigate(path);
    },

    getCourseHistory: async (courseId) => { 
      try {
        const response = await axios.post("http://localhost:3000/wikipage/faculty/getCourseHistory", {
          courseId: courseId
        });
        set({ courseHistory: { ...get().courseHistory, [courseId]: response?.data?.history } });
        return { state: true };
      }
      catch (error) {
        console.log(error);
        return { state: false, message: error?.data?.message }
      }
    },

    getCourse: async () => {
      const facultyId = "f001";
      try {
        const response = await axios.post("http://localhost:3000/wikipage/faculty/getCourse", {
          faculty_id: facultyId
        });
        set({ mappedCourses: response?.data?.courses });
        if (response?.data?.courses?.length > 0) {
          await get().getCourseHistory(response?.data?.courses?.[0]?.course_code);
        }
        return { state: true, data: response?.data?.courses };
      }
      catch (error) { 
        console.log(error);
        return {state:false, message:error?.data?.message}
      }
    },

    getCourseData: async (courseId) => {
      const state = get();
      if (state.courseData[courseId]) { 
        return { state:true, data:state.courseData[courseId] };
      }
      try {
        const response = await axios.post("http://localhost:3000/wikipage/faculty/getCourseData", {
          course_code: courseId
        });
        set({
          courseData: {
            ...state.courseData,
            [courseId]: response?.data?.data
        }});
        return { state: true };
      }
      catch (error) {
        console.log(error);
        return { state: false, message: error?.data?.message }
      }
    },
    
    getCourseMaterial: async (course_code) => {
      const state = get();
      if (state.courseMaterial[course_code]) { 
        return { state:true, data:state.courseMaterial[course_code] };
      }
      try {
        const response = await axios.post("http://localhost:3000/wikipage/common/getCourse", {
          course_code
        });
        set({
          courseMaterial: {
            ...state.courseMaterial,
            [course_code]: response?.data
        }});
        return { state: true, data: response?.data };
      }
      catch (err) {
        console.log(err);
        return { state: false, message: err?.data?.message }
      }
     }

  }))
);

export default useCourseMaterialStore;
