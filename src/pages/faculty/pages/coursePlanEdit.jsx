import { CoursePlanCodeInput, CoursePlanUndoTable } from '@/components'
import React from 'react'
import { Courses, courseUndoCourses, courseUndoList } from '../utils'
import useCoursePlanStore from '@/store/faculty/coursePlan'
import { CoursePlanIllustration } from './coursePlanIllustration'
import { CoursePlan } from './coursePlanOverview'

export const CoursePlanEdit = () => {

  const subNavbar = useCoursePlanStore(e => e.subNavbar);

  function handleSubmit(courseId) {
          console.log(courseId);
  }

  return (
    <div className='h-[calc(100%-5rem)] w-full overflow-hidden'>
      {subNavbar == "-1" &&
      <div className='p-7 flex flex-col gap-9 h-full'> 
        {Courses.map(item => (
          <CoursePlanCodeInput
              key={item.id}
              course={item.course}
              faculty_members={item.faculty_members}
              onSubmit={() => handleSubmit(item.id)}
          />
        ))}
        <CoursePlanUndoTable
        data={courseUndoList}
        courses={courseUndoCourses}
        /> 
        </div>
      }
      {
        subNavbar == "1" &&
        <CoursePlanIllustration/>
      }
      {
        subNavbar == "2" && 
        <CoursePlan/>
      }
    </div>
  )
}
