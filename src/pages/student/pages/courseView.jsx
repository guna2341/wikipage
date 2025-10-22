import { CoursePlanOverview } from '@/components'
import { useCourseListStore } from '@/store/faculty/courseList';
import useStudentRegulationStore from '@/store/student';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const StudentCourseView = () => {

  const getCourseData = useStudentRegulationStore(e => e.getCourseData);
  const { courseData } = useStudentRegulationStore();
  const [loading,setLoading] = useState({});

  const params = useParams();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (courseData?.[params?.courseId]) {
        return;
      }
      setLoading({ [params?.courseId]: true });
      try {
        const response = await getCourseData(params.courseId);
        if (!response?.state) {
          return;
        }
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => {
          setLoading({ [params?.courseId]: false });
          ;
        }, 400);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [params.courseId, getCourseData]);


  return (
    <div className='h-full overflow-auto scrollbar-hide'>
      <CoursePlanOverview
        course={courseData[params.courseId]}
        showEdit={false}
      />
    </div>
  )
}

