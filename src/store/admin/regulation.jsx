import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useAdminRegulationStore = create(
  immer((set) => ({
   currentNavbar:"0",

   changeRegulation:(key,value) => {
    set({[key]:value});
   }

  }))
);

export default useAdminRegulationStore;
