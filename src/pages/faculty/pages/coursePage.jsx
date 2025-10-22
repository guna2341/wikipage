import { CoursePlanIllustration, CoursePlanOverview } from '@/components';
import useCourseMaterialStore from '@/store/faculty/courseMaterial';
import { param } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { courseData, getCourseData } = useCourseMaterialStore();
  const params = useParams();
  const [loading, setLoading] = useState({});
  const [data, setData] = useState(false);

  useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      if (courseData?.[params?.courseId]) { 
        return;
      }
      setLoading({[params?.courseId]: true});
      try {
        const response = await getCourseData(params.courseId);
        if (!response?.state) {
          setData(true);
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


  if (loading[params?.courseId]) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          <span className="mt-4 text-gray-500 text-sm">Loading...</span>
        </div>
      </div>
    );
  }


  if (data) { 
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
