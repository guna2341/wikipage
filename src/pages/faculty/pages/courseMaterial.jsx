import React from 'react'
import { CreateCourse } from './createCourse';
import { CourseMaterialHeader } from '@/components';

export const CourseMaterial = () => {

    const [createCourse,setCreateCourse] = React.useState(false);
    if (createCourse) {
        return (
            <CreateCourse/>
        );
    }
    else {
        return (
                <div className='p-7'>
                    <CourseMaterialHeader/>
                    
                </div>
        );
    }
}

