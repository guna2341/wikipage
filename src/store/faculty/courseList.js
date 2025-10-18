import { data } from "autoprefixer";
import axios from "axios";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


export const useCourseListStore = create(immer((set,get) => ({
    courses: [],
    
    getCourseList: async (dept, sem) => {
        const key = `${dept}-${sem}`;
        if (get().courses[key]) { 
            return { state: true, data: get().courses[key] };
        }
        try {
            const response = await axios.post("http://localhost:3000/wikipage/faculty/getCourseList", {
                dept: dept,
                sem: sem
            }
            )
            set({
                courses: {
                    ...get().courses,
                    [key]: [...response.data.data ],
                },
            });
            return { state: true, data: response.data.data };
        }
        catch (error) { 
            return { state: false, message: error.response.data.message };
        }
    }

})));