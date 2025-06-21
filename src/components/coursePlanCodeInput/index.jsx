import React from 'react';
import {Checkbox} from "@heroui/checkbox";
import { ButtonComponent, CourseHeader, InputField } from '@/components';

export const CoursePlanCodeInput = ({
course,
faculty_members,
onSubmit
}) => {
  return (
    <div className='flex items-center w-full justify-between'>
            <div className='flex items-start'>
            <Checkbox
             radius='full'
             className='pt-[6.5px]'
             size='lg'
            />
              <CourseHeader
                className={'ml-2'}
                isSaveBtn={false}
                course={course}
                dept={"CSE"}
                course_code={"22CS501"}
                academic_year={"24-25"}
                faculty_members={faculty_members}
            />
            </div>
             <div className='flex items-center gap-4'>
                        <InputField
                        radius={"sm"}
                        placeholder={"Enter the code"}
                        classnames={{
                        mainWrapper:"bg-white",
                        inputWrapper:"bg-custom-1010 shadow-none border border-custom-1009"}}
                        />
                        <ButtonComponent
                                className={"bg-purple-600"}
                                onClick = {onSubmit}
                        >
                            Submit
                            </ButtonComponent>
                    </div>
        </div>      
  )
}
