import React from 'react'
import { NewCourseInputField } from '../newCourseInputField'
import { ButtonComponent } from '../button'
import { LeftArrow } from '@/assets'

export const CreateCourseFirst = ({
   onPrevious,
    onNext
}) => {
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
        <div className='flex justify-end items-center gap-4'>
        <ButtonComponent
        className={'w-[140px] border bg-white border-purple-600 text-purple-600 rounded-lg font-normal text-base leading-6 pr-3'}
        onClick={onPrevious}
        startContent={<span className='text-purple-600 pr-2'><LeftArrow/></span>}
        >
          Previous
        </ButtonComponent>
          <ButtonComponent
        className={'w-[120px] border bg-purple-600 border-purple-600 text-white rounded-lg font-normal text-base leading-6 pr-3'}
        onClick={onNext}
        endContent={<span className='text-white ml-2 rotate-180'><LeftArrow/></span>}
        >
          Next
        </ButtonComponent>
        </div>
        </div>
    </div>
  )
}
