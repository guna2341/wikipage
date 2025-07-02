import React from 'react'
import { cn } from '@/components'

export const Stepper = (
  {
    currentIndex = 1,
    setCurrentindex,
    data = [
      {
        id: 1,
        label: "Course Details"
      },
      {
        id: 2,
        label: "Course Plan"
      },
      {
        id: 3,
        label: "FAQ"
      }
    ],
  }
) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex'>
        {data.map(item => (
          <div className='flex items-center' key={item.id}>
            <div
              className={cn('bg-custom-1014 w-8 h-8 rounded-full flex justify-center items-center text-white font-medium text-base leading-6 cursor-pointer', {
                'bg-white text-black border border-custom-1015': currentIndex + 1 <= item.id
              })}
              onClick={() => setCurrentindex(item.id)}
            >
              {item.id}
            </div>
            <div className={cn('text-nowrap', {
              'hidden': item.id === 3
            })}>-------------------------</div>
          </div>
        ))}

      </div>
      <div className='flex ml-[-40px]'>
        {data.map((item, index) => (
          <div className={cn('w-[220px] font-semibold text-base leading-6 cursor-pointer', {
            'pl-10': item.id === 2,
            'text-center pl-6': item.id === 3
          })}
            onClick={() => setCurrentindex(item.id)}
            key={index}
          >{item.label}</div>
        ))}
      </div>
    </div>
  )
}
