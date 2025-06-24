import { CourseMaterialHeader, CourseMaterialTable, ModCourseMaterialTable, SelectComponent } from '@/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Regulation = () => {

    const navigate = useNavigate();

  function handleCourse(dept,sem,academic_year) {
        navigate(`${academic_year}/${dept}/${sem}`);
  }

  return (
    <div className='h-full p-7 flex flex-col gap-5 overflow-auto scrollbar-hide'>
                        <div className='bg-white rounded-2xl py-7 px-6'>
                            <div className='flex flex-col gap-5'>
                                <div className='flex items-center justify-between'>                            
                                <p className='font-semibold leading-6 text-xl w-full'>
                                    Academic Regulation
                                </p>
                                    <div className='w-fit '>
                                    <SelectComponent
                                    label='All Regulation'
                                    className="w-[156px] h-[31px]"
                                    />
                                    </div>
                                </div>
                                 <p className='font-semibold leading-6 text-lg'>
                                    2022 Regulation
                                </p>
                                <div className='flex flex-col w-full gap-14'>
                                <CourseMaterialTable handleClick={handleCourse} />
                                <CourseMaterialTable/>
                                <ModCourseMaterialTable/>
                                <ModCourseMaterialTable/>   
                                </div>
                            </div>
                        </div>
                    </div>
  )
}

