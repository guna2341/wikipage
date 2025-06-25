import { Edit2 } from '@/assets';
import { ButtonComponent, cn } from '@/components';
import React from 'react'

export const AdminRegulationList = () => {

  const [currentTab,setCurrentTab] = React.useState(1);
  const list = [
    {
      id:1,
      list:"Faculty List"
    },
    {
      id:2,
      list:"Student List"
    },
    {
      id:3,
      list:"FacultyList"
    }
  ];


  return (
    <div>
          <div className='flex gap-4 w-full overflow-auto scrollbar-hide pt-5 px-8 bg-white'>
                {list.map(li => (
                     <div
                        key={li.id}
                        className={cn(
                        'font-medium text-base leading-6 text-custom-1011 p-3 rounded-t-2xl cursor-pointer text-nowrap',
                        { 'text-custom-600 bg-custom-500': currentTab === li.id }
                        )}
                        onClick={() => setCurrentTab(li.id)}
                          >
                    {li.list}   
                  </div>
                ))}
                </div>
    </div>
  )
}

  