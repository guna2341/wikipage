import { CourseHeader, CoursePlanCodeInput } from '@/components';
import { welcome } from '@/assets';
import React from 'react';

export const CoursePlanIllustration = ({ handleSubmit }) => {
  return (
    <div className='p-7 flex flex-col gap-9 h-full overflow-auto scrollbar-hide'>
      <CourseHeader
        isSaveBtn={false}
        dept={"CSE"}
        course_code={"22CS501"}
        academic_year={"24-25"}
        faculty_members={["Dr.Parthasarathi P", "Mrs.Ganagavalli K"]}
      />

      <div className='w-full h-full flex flex-col justify-center items-center gap-6'>
        <img src={welcome} alt='welcome-illustration' className='w-[302px] h-[302px]' />

        {/* No data message */}
        <span className='text-red-500 font-semibold text-lg text-center'>
          No course data exists yet.
        </span>

    

        <div className='flex items-center gap-4'>
          <CoursePlanCodeInput
            isHeader={false}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
