import { LeftArrow } from '@/assets'
import { InputField } from '@/components';
import useAdminRegulationStore from '@/store/admin/regulation'
import React from 'react'

export const CreateRegulation = () => {

  const changeAdminRegulation = useAdminRegulationStore(e => e.changeRegulation);

  function handleClick() {
    changeAdminRegulation("createCourseTab",false);
  }

  return (
    <div className='p-7 h-[calc(100%-4.5rem)] flex flex-col gap-6'>
      <div className='flex items-center gap-4'>
        <span onClick={handleClick} className='cursor-pointer'>
        <LeftArrow
          size={30}
        />
        </span>
        <p className='font-semibold leading-6 text-xl w-full pt-0.5'>
              Create Regulation
        </p>
      </div>
      <div
      className='h-[calc(100%-10rem)] bg-white rounded-2xl border border-custom-100 px-[50px] py-[42px]'
      >
        <div className='font-semibold leading-6 text-xl w-full pt-0.5 flex flex-col gap-5'>
              Create Academic Regulation
              <InputField
              isReadOnly
              size={"lg"}
              value={"Enter Regulation"}
              />
        </div>
      </div>
    </div>
  )
}

