import React from 'react'
import { ButtonComponent } from '../button'
import { AddIcon } from '@/assets'

export const CreateCourseSecond = ({
    data = [
        {
            unit:1,
            lessonPlan:[
                {
                    lp:1.1,
                    lm:1.1,
                }
            ]
        }
    ]
}) => {
  return (
    <div>
        <div className='flex items-center justify-between'>
        <span className='font-semibold text-[22px] leading-6'>
            Create New Course
        </span>
            <ButtonComponent
            className={'bg-custom-1017'}
            startContent={<AddIcon/>}
            >
                Add Unit
            </ButtonComponent>
        </div>
        <div>

        </div>
    </div>
  )
}
