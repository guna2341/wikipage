import {  CourseHeader, CoursePlanCodeInput } from '@/components'
import { welcome } from '@/assets'
import React from 'react'

export const CoursePlanIllustration = ({handleSubmit}) => {
  return (
    <div className='p-7 flex flex-col gap-9 h-full overflow-auto scrollbar-hide'>
      <CourseHeader
        isSaveBtn={false}
        dept={"CSE"}
        course_code={"22CS501"}
        academic_year={"24-25"}
        faculty_members={["Dr.Parthasarathi P", "Mrs.Ganagavalli K"]}
      />
      <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col items-center gap-[30px]'>
          <img src={welcome} alt='welcome-illustration' className='w-[302px] h-[302px]' />
          <span
            className='text-custom-1008 font-normal text-base w-[702px] text-center'>
            Welcome to QuickNotes! Stay organized and capture your thoughts anytime, anywhere start by creating your first notepad now.
          </span>
          <div className='flex items-center gap-4'>
          <CoursePlanCodeInput
            isHeader={false}
            handleSubmit={handleSubmit}
          />
          </div>
        </div>
      </div>
    </div>
  )
}
