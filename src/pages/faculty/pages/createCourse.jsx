import { BigArrow, DownArrow } from '@/assets'
import { Stepper } from '@/components'
import { NewCourseInputField } from '@/components/newCourseInputField'
import React from 'react'

export const CreateCourse = () => {
  return (
    <div className='p-7 flex flex-col gap-9 h-full overflow-hidden w-full'>
        <div className='flex'>
            <div className='pt-1'>
        <BigArrow/>
        </div>
        <div className='w-full flex justify-center'>        
        <Stepper
        currentIndex={1}
        />
        </div>
        </div>
        <span className='font-semibold text-[22px] leading-6'>
            Create New Course
        </span>
        <NewCourseInputField
        
        />
    </div>
  )
}
