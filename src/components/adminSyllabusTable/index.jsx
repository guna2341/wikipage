import React from 'react'
import { AddIcon, Edit2 } from '@/assets'
import { SyllabusTable, ButtonComponent } from '@/components'

export const AdminSyllabusTable = ({
  handleClick,
  header,
  minimun_credits,
  courses = []
}) => {
  return (
    <div className='flex flex-col gap-5 py-4 h-full'>
      <div className='flex items-center px-4 gap-4 justify-end'>

        <ButtonComponent
          className={'p-2'}
          startContent={
            <Edit2
              color='currentColor'
            />}
        >
          Edit
        </ButtonComponent>

        <ButtonComponent
          startContent={
            <AddIcon
            />}
        >
          Upload
        </ButtonComponent>

      </div>

      <div className='px-8 h-full'>
        <SyllabusTable
          header={header}
          courses={courses}
          minimun_credits={minimun_credits}
        />
      </div>
    </div>
  )
}

