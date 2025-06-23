import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


const useStudentRegulationStore= create(
  immer((set) => ({
   currentNavbar:"0",

   changeStudentRegulation:(key,value) => {
    set({[key]:value});
   }

  }))
);

export default useStudentRegulationStore;