import React from 'react'
import { CreateCourse } from './createCourse';
import { CourseMaterialHeader, SelectComponent } from '@/components';

export const CourseMaterial = () => {

    const [createCourse,setCreateCourse] = React.useState(false);

    function handleCreate() {
             setCreateCourse(!createCourse);
    }
    
    if (createCourse) {
        return (
            <CreateCourse handleCreate={handleCreate} />
        );
    }
    else {
        return (
                <div className='h-full p-7 flex flex-col gap-5 overflow-auto scrollbar-hide'>
                    <CourseMaterialHeader handleCreate={handleCreate} />
                    <div className='bg-white h-full rounded-2xl py-7 px-6'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center justify-between'>                            
                            <p className='font-semibold leading-6 text-xl w-full'>
                                Academic Regulation
                            </p>
                            <div className='w-fit'>
                            <SelectComponent
                            label='All Regulation'
                            className="w-[156px] h-[31px]"
                            classNames={{
                                base:"h-[31px] p-0",
                                mainWrapper:"h-[31px] p-0",
                                trigger:"h-[31px]",
                                innerWrapper:"h-[31px]",
                            }}
                            />
                            </div>
                            </div>
                             <p className='font-semibold leading-6 text-lg'>
                                2022 Regulation
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

