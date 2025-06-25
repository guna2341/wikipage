import React from 'react'
import { CourseMaterialHeader, CourseMaterialTable, ModCourseMaterialTable, SelectComponent } from '@/components';
import useCourseMaterialStore from '@/store/faculty/courseMaterial';
import { useNavigate } from 'react-router-dom';
import { CreateRegulation } from './createRegulation';
import useAdminRegulationStore from '@/store/admin/regulation';

export const AdminRegulation = () => {

    const navigate = useNavigate();
    const createCourse = useAdminRegulationStore(e => e.createCourseTab);
    const changeAdminRegulation = useAdminRegulationStore(e => e.changeRegulation);

    function handleCourse(dept,sem) {
        navigate(`${dept}/${sem}`)
    }

    function handleCreate() {
        changeAdminRegulation("createCourseTab",true);
    }
    
    if (createCourse) {
        return (
            <CreateRegulation/>
        );
    }
    else {
        return (
                <div className='h-full p-7 flex flex-col gap-5 overflow-auto scrollbar-hide'>
              <CourseMaterialHeader handleCreate={handleCreate} />           
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
        );
    }
}

