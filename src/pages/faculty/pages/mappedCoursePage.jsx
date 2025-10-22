import useCourseMaterialStore from '@/store/faculty/courseMaterial';
import React from 'react';

export const MappedCoursePage = () => {

    const mappedCourses = useCourseMaterialStore(e => e.mappedCourses);

  return (
    <div>MappedCoursePage</div>
  )
}
