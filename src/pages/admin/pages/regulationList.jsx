import { AdminSyllabusTable, ButtonComponent, cn, StudentListTable } from '@/components';
import React from 'react'
import { courseTable, faculties, facultyHeader, studentHeader, students } from '../utils';

export const AdminRegulationList = () => {

  const [currentTab, setCurrentTab] = React.useState(1);


  const list = [
    {
      id:1,
      list:"Student List",
      component: <StudentListTable
        iseditBtn
        student={students}
        header={studentHeader}
      />
    },
    {
      id:2,
      list:"Faculty List",
      component: <StudentListTable
        iseditBtn={true}
        student={faculties}
        header={facultyHeader}
      />
    },
    {
      id:3,
      list:"Course Coordinator List",
      component:<AdminSyllabusTable
      header={"B.E. Computer Science And Engineering"}
      courses={courseTable}
      minimun_credits={'22.0'}
      />
    }
  ];


  return (
    <div className='h-full p-7 pb-0 pt-5 overflow-auto scrollbar-hide'>   
      <p className='font-semibold leading-6 text-lg w-full pb-4'>
        Create New Course
      </p>
      <div className={cn('h-[calc(100%-4.5rem)] bg-white rounded-2xl border border-custom-100 overflow-hidden', {
      'h-full max-h-full min-h-[calc(100%+10rem)]'  :  currentTab == 3
      })}>  
        <div className='flex gap-4 px-5 pt-5 border-b border-custom-100'>
          {list.map(li => (
            <div
              key={li.id}
              className={cn(
                'font-medium text-base leading-6 text-custom-1011 p-3 rounded-t-2xl cursor-pointer text-nowrap ',
                { 'text-custom-600 bg-custom-500': currentTab === li.id }
              )}
              onClick={() => setCurrentTab(li.id)}
            >
              {li.list}
            </div>
          ))}
        </div>

        <div className={cn('h-[calc(100%-4.5rem)] w-full', {
        })}>
          {list.map((li, index) => (
            <div
              className={cn('h-full w-full',{
                'hidden': currentTab != li.id
              })}
              key={index}>
              {li.component}
              </div>
          ))}
        </div>
      </div>

      <div className='flex gap-4 justify-end py-3'>
        <ButtonComponent
          className={'bg-white border border-custom-100 text-black'}
        >
          Cancel
        </ButtonComponent>
        <ButtonComponent>
          Save
        </ButtonComponent>
      </div>
    </div>

  )
}

  