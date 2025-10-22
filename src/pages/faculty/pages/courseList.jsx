import { AdminSyllabusTable } from '@/components'
import { courseTable } from '@/pages/student/utils'
import { useCourseListStore } from '@/store/faculty/courseList'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const CourseList = () => {

  const getCourseList = useCourseListStore(e => e.getCourseList);
  const [course, setCourse] = useState();

  const nav = useNavigate();  
  const params = useParams();

  function handleNav(e) {
    nav(`/faculty/courseplan/${e}`);
  }

  function getDept(params) {
    switch (params) {
      case "Biomedical Engineering":
        return "bio";
      case "Civil Engineering":
        return "civil";
      case "Computer Science and Design":
        return "csd";
      case "Electrical and Electronics Engineering":
        return "eee";
      case "Electronics and Communication Engineering":
        return "ece";
      case "Artificial Intelligence and Data Science":
        return "aids";
      case "Information Science Technology":
        return "it";
      case "Mechanical Engineering":
        return "me";
      case "Mechatronics Engineering":
        return "mech";
      case "Computer Science And Engineering":
        return "cse";
    }
  }

  useEffect(() => {
    async function getCourse() {
      const response = await getCourseList(getDept(params.dept), params.sem);
      setCourse(response?.data);
    }
    getCourse();
  }, []);

  return (
    <div className='p-12 px-6 overflow-auto'>
      <div className='bg-white rounded-2xl p-4'>
        <AdminSyllabusTable
          isEdit={false}
          header={"B.E. Computer Science And Engineering"}
          courses={course}
          minimun_credits={'22.0'}
          handleClick={handleNav}
        />
      </div>
    </div>
  )
}
