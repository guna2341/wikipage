import { CoursePlanIllustration, CoursePlanOverview } from '@/components';
import useCourseMaterialStore from '@/store/faculty/courseMaterial';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { courseData, getCourseData } = useCourseMaterialStore();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [dataExists, setDataExists] = useState(false);

  useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      if (courseData?.[params.courseId]) { 
        return;
      }
      setLoading(true);
      try {
        const response = await getCourseData(params.courseId);
        if (!response?.state) {
          setDataExists(false);
          return;
        }
        if (isMounted) {
          if (response) setDataExists(true);
          else setDataExists(false);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) setDataExists(false);
      } finally {
        setTimeout(() => {
          if (isMounted) setLoading(false);
        }, 400);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [params.courseId, getCourseData]);

  if (loading) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          <span className="mt-4 text-gray-500 text-sm">Loading...</span>
        </div>
      </div>
    );
  }

  if (!dataExists) { 
    return <CoursePlanIllustration />;
  }

  return (
    <div className="h-full overflow-auto scrollbar-hide transition-all duration-500">
      <CoursePlanOverview
        course={courseData?.[params.courseId]}
      />
    </div>
  );
};

export default CoursePage;
