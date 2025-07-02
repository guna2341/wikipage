import { AdminSyllabusTable, ButtonComponent, cn } from '@/components';
import React from 'react'
import { courseTable } from '../utils';

export const AdminRegulationList = () => {

  const [currentTab,setCurrentTab] = React.useState(1);
  const list = [
    {
      id:1,
      list:"Faculty List",
      component:"faculty table"
    },
    {
      id:2,
      list:"Student List",
      component:"student   table"
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
    <div className='h-full p-7 overflow-auto scrollbar-hide'>    
      <div className='flex flex-col bg-white rounded-2xl border h-fit'>
        <div>
          <div className='flex h-fit gap-4 w-full overflow-auto scrollbar-hide px-8 pt-4 border-b border-custom-100'>
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
        </div>
        <div className='h-full pb-4'>
                  {list.map(item => (
                    <div className={cn('hidden opacity-0',{
                        'opacity-100 block' : item.id === currentTab,
                    })}>
                      <div>
                      {item.component}
                      </div>
                    </div>
                  ))}
        </div>
    </div>
    <div className='flex gap-4 justify-end py-4'>
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

  