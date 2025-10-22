import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import useGlobalStore from "../global/globalStore";
import axios from "axios";


const useStudentRegulationStore= create(
  immer((set,get) => ({
    currentNavbar: "0",
    faculty: [],
    
    courseData: {},

    getComments: async () => {
      if (get().faculty.length <0 ) return {state:true , data:get().faculty };
      try {
        const state = useGlobalStore.getState();
        const profile = state?.profile;
        const dept = profile?.dept;
        const sem = profile?.semester;
        const response = await axios.post("http://localhost:3000/wikipage/student/getFaculties", { dept, sem });
        set({ faculty: response?.data?.data });
        return { state: true, data: response?.data?.data }
      }
      catch (err) {
        return { state: false, data: err?.response?.data?.message }
      }
    },

    getCourseData: async (courseId) => {
      const state = get();
      if (state.courseData[courseId]) {
        return { state: true, data: state.courseData[courseId] };
      }
      try {
        const response = await axios.post("http://localhost:3000/wikipage/faculty/getCourseData", {
          course_code: courseId
        });
        console.log(response)
        set({
          courseData: {
            ...state.courseData,
            [courseId]: response?.data?.data
          }
        });
        return { state: true };
      }
      catch (error) {
        console.log(error);
        return { state: false, message: error?.data?.message }
      }
    },


   changeStudentRegulation:(key,value) => {
    set({[key]:value});
   }

  }))
);

export default useStudentRegulationStore;