import React from 'react'
import { cn } from '../cn'

export const ModCourseMaterialTable = ({
    semesters = 3,
    header = "Tamil & English Question Bank"
}) => {
  return (
    <div className='flex flex-col gap-4'>
        <p className='font-semibold leading-6 w-full text-md'>
            {header}
       </p>
      <div className='flex'>
        <div className='w-[250px] border rounded-l-2xl py-3.5 pl-3'>
            Courses
        </div>
        <div className='flex'>
            {Array(3).fill("").map((item,index) => (
                <span
                key={index}
                className={cn('py-3.5 border border-l-0 w-[84px] px-3 text-center',{
                    'rounded-r-2xl' : index == semesters-1
                })}>sem{index+1}</span>
            ))}
        </div>
      </div>
    </div>
  )
}

