import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useCourseMaterialStore = create(
  immer((set) => ({
    createCourseTab:1,

    changeCourseMaterial:(key,value) => {
    set({[key]:value});
   }

  }))
);

export default useCourseMaterialStore;
