import React from 'react'
import { ButtonComponent } from '@/components';

export const CourseHeader = ({
    className,
    isSaveBtn = true,
    course,
    dept,
    course_code,
    academic_year,
    faculty_members = []
}) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <div className='flex flex-col gap-2'>
          <span
              className='font-semibold text-[22px] leading-6'>
                {course ? <>{course}</>:<>{dept}: {course_code} {academic_year}</>}
          </span>
        <span
        className='font-medium text-base leading-6 text-custom-1003'
        >
        Faculty member(s): 
          {faculty_members.map((member, index) => {
            let mem = "";
          if (index != faculty_members.length-1) {
            mem = `${member},`;
            }
          else {
            mem = `${member}.`;
            }
            return(
              <span key={index}>  
                {mem}
                </span>
            )
          })}
          </span>
      </div>
      {isSaveBtn &&
      <ButtonComponent
        className={"bg-purple-600"}
        onClick={() => console.log("Save")}
      >
        Save
      </ButtonComponent>
}
    </div>
  )
}
