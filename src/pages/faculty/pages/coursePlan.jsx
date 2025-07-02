import { CoursePlanCodeInput, CoursePlanIllustration, CoursePlanUndoTable, CoursePlanOverview  } from '@/components'
import React from 'react'
import { Courses, courseUndoCourses, courseUndoList } from '../utils'
import useCoursePlanStore from '@/store/faculty/coursePlan'
import useCourseMaterialStore from '@/store/faculty/courseMaterial'
import { useNavigate } from 'react-router-dom'

export const CoursePlan = () => {

  const navigate = useNavigate();
  const subNavbar = useCoursePlanStore(e => e.subNavbar);
  const changeCoursePlan = useCoursePlanStore(e => e.changeCoursePlan);

  function handleEdit() {
    changeCoursePlan("currentNavbar","1");
    navigate("/faculty/courseMaterial"); 
  }

  function handleSubmit(courseId) {
    navigate("/faculty/courseMaterial"); 
    changeCoursePlan("currentNavbar","1");
  }

  return (
    <div className='h-[calc(100%-0rem)] w-full overflow-scroll scrollbar-hide'>
      {subNavbar == "-1" &&
      <div className='p-7 flex flex-col gap-5 h-full'> 
        {Courses.map(item => (
          <CoursePlanCodeInput
              key={item.id}
              course={item.course}
              faculty_members={item.faculty_members}
              onSubmit={() => handleSubmit(item.id)}
          />
        ))}
          <div className='bg-white border border-custom-100 rounded-2xl min-h-[440px] overflow-auto scrollbar-hide'>
          <CoursePlanUndoTable
        data={courseUndoList}
        courses={courseUndoCourses}
            /> 
          </div>
        </div>
      }
      {
        subNavbar == "1" &&
        <CoursePlanIllustration/>
      }
      {
        subNavbar == "2" && 
        <CoursePlanOverview
        handleEdit={handleEdit}
        />
      }
    </div>
  )
}
