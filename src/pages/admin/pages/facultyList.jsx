import { StudentListTable } from '@/components'
import React from 'react'
import { faculties, facultyHeader } from '../utils'

export const FacultyList = () => {
  return (
   <div className='flex flex-col gap-4 p-7 h-[calc(100%-3rem)] overflow-auto scrollbar-hide'>
        <p className='font-semibold leading-6 text-lg'>
          Current Regulation
        </p>
        <div className='bg-white border border-custom-100 rounded-2xl h-full overflow-hidden'>
        <StudentListTable
          isedit
          student={faculties}
          header={facultyHeader}
          />
        </div>
      </div>
  )
}

