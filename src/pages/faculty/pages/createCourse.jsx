import { BigArrow } from '@/assets'
import { CreateCourseFirst, CreateCourseSecond, Stepper } from '@/components'
import React from 'react'

export const CreateCourse = ({
  handleCreate
}) => {
  const [currentIndex,setCurrentIndex] = React.useState(1);

  function handleNext() {
    if (currentIndex <= 2) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrevious() {
    let tab = currentIndex - 1;
    if (tab >=0 ) {
      setCurrentIndex(tab);
    }
    if (tab == 0) {
      handleCreate();
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
        {currentIndex == 1 && <CreateCourseFirst onNext={handleNext} onPrevious={handlePrevious} /*onStart = {handleStart}*/ />}
        {currentIndex == 2 && <CreateCourseSecond onNext={handleNext} onPrevious={handlePrevious} />}
        {currentIndex == 3 && <CreateCourseSecond onNext={handleNext} onPrevious={handlePrevious} isDiscourse={true} />}

    </div>
  )
}
