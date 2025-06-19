import React from 'react'
import { NewCourseInputField } from '../newCourseInputField'
import { ButtonComponent } from '../button'

export const CreateCourseFirst = ({onClick}) => {
  return (
    <div className='flex flex-col gap-[26px]'>
         <span className='font-semibold text-[22px] leading-6'>
            Create New Course
        </span>
        <div className='bg-white px-10 py-[22px] rounded-2xl flex flex-col gap-8'>       
           <NewCourseInputField
          topLabel={"Enter Course Name"}
          placeholder={"Enter the Course Name"}
          bottomLabel={"Enter the Course Name like( 22CS501 - Theory of Computation)."}
        />
        <NewCourseInputField
          topLabel={"Introduction to the course"}
          placeholder={"Enter the Course Name"}
          isTextArea
        />
        <NewCourseInputField
          topLabel={"Course Objective"}
          placeholder={"Enter the Course Objective"}
          isTextArea
        />
        <div className='flex justify-end'>
        <ButtonComponent
        className={'w-[120px]'}
        onClick={onClick}
        >
          Next
        </ButtonComponent>
        </div>
        </div>
    </div>
  )
}
