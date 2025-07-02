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
    <div className='flex flex-col gap-5 px-4 py-4'>
      <div className='flex items-center gap-4 justify-end'>

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

      <div className='px-20'>
        <SyllabusTable
          header={header}
          courses={courses}
          minimun_credits={minimun_credits}
        />
      </div>
    </div>
  )
}

