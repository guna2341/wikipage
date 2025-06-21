import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useCoursePlanStore = create(
  immer((set) => ({
   currentNavbar:"0",
   subNavbar:-1,

   changeCoursePlan:(key,value) => {
    set({[key]:value});
   }

  }))
);

export default useCoursePlanStore;
