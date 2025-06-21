import { BigArrow } from '@/assets'
import { CreateCourseFirst, CreateCourseSecond, Stepper } from '@/components'
import React from 'react'

export const CreateCourse = () => {
  const [currentIndex,setCurrentIndex] = React.useState(2);

  function handleNext() {
    if (currentIndex <= 2) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrevious() {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className='p-7 flex flex-col gap-9 h-full overflow-auto scrollbar-hide w-full'>
        <div className='flex'>
        <div className='pt-1 cursor-pointer'
        onClick={handlePrevious}
        >
        <BigArrow/>
        </div>
        <div className='w-full flex justify-center'>        
        <Stepper
        currentIndex={currentIndex}
        />
        </div>
        </div>
        {currentIndex == 1 && <CreateCourseFirst onClick={handleNext} />}
        {currentIndex == 2 && <CreateCourseSecond onClick={handleNext} />}

    </div>
  )
}
