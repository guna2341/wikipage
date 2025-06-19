import { CoursePlanCodeInput, CoursePlanUndoTable } from '@/components'
import React from 'react'
import { courseUndoCourses, courseUndoList } from '../utils'
export const CoursePlanEdit = () => {
  return (
    <div className='p-7 flex flex-col gap-9 h-[calc(100%-7rem)] w-full'>
        <CoursePlanCodeInput/>
        <CoursePlanCodeInput/>
        <CoursePlanUndoTable
        data={courseUndoList}
        courses={courseUndoCourses}
        />
    </div>
  )
}
