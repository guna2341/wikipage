import React from 'react'
import { ButtonComponent } from '../button'
import { AddIcon } from '@/assets'
import { AccordianComponent } from '../accordian'
import { CourseItem } from '../createCourseItem'

export const CreateCourseSecond = ({
    data = [
        {
            unit:1,
            lessonPlan:[
                {
                    lp:1.1,
                    lm:1.1,
                    lv:1.1
                }
            ]
        },
         {
            unit:2,
            lessonPlan:[
                {
                    lp:1.1,
                    lm:1.1,
                    lv:1.1
                }
            ]
        }
    ]
}) => {
  return (
    <div className='w-full h-[calc(100%-9rem)] flex flex-col gap-4'>
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
        <div className='bg-white h-full overflow-auto rounded-2xl border border-custom-100'>
            {data.map((item,index) => (
                <div className='w-full'>
                    <AccordianComponent
                    className={'px-0'}   
                    classNames={{
                    heading:"border-b border-custom-100 h-full p-0",
                    titleWrapper:"px-8 py-3",
                    content:'px-8 py-3'
                    }}
                    id={index}
                    title={<span>Unit: {item.unit}</span>}
                    content={<CourseItem data={item.lessonPlan}/>}
                    />
                    </div>
            ))}
        </div>
    </div>
  )
}
