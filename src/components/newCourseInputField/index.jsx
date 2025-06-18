import React from 'react';
import { InputField } from '../input';

export const NewCourseInputField = () => {
  return (
    <div
    className='bg-white h-full rounded-2xl py-[22px] px-10'
    >
       <div>
       <span className='font-semibold text-lg leading-6'>
           Enter Course Name
        </span>
        <InputField/>
       </div>
       <div></div>
       <div></div>
    </div>
  )
}
