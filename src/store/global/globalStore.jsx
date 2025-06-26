import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useGlobalStore = create(
  immer((set) => ({
    
    role: "admin",
    
    changeGlobalStore:(key,value) => {
    set({[key]:value});
   }

  }))
);

export default useGlobalStore;
