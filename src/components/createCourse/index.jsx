import { BigArrow } from '@/assets'
import { CreateCourseFirst, CreateCourseSecond, Stepper } from '@/components'
import useCourseMaterialStore from '@/store/faculty/courseMaterial';
import { useNavigate } from 'react-router-dom';

export const CreateCourse = ({ handleNavigate }) => {

  const navigate = useNavigate();
  const currentIndex = useCourseMaterialStore(e => e.createCourseTab);
  const changeCourseMaterial = useCourseMaterialStore(e => e.changeCourseMaterial);

  function handleIndex(index) {
    changeCourseMaterial("createCourseTab", index);
  }


  function handleNext() {
    if (currentIndex == 3) {
      navigate(-1);
    }
    if (currentIndex <= 2) {
      changeCourseMaterial("createCourseTab", currentIndex + 1);
    }
  }

  function handlePrevious() {
    let tab = currentIndex - 1;
    if (tab == 0) {
      handleNavigate();
      return;
    }
    if (tab > 0) {
      changeCourseMaterial("createCourseTab", tab);
    }
  }

  return (
    <div className='p-5 pb-5 flex flex-col gap-6 h-full overflow-auto scrollbar-hide w-full'>
      <div className='flex'>
        <div className='pt-1 cursor-pointer'
          onClick={handlePrevious}
        >
          <BigArrow />
        </div>
        <div className='w-full flex justify-center'>
          <Stepper
            currentIndex={currentIndex}
            setCurrentindex={handleIndex}
          />
        </div>
      </div>
      {currentIndex == 1 && <CreateCourseFirst onNext={handleNext} onPrevious={handlePrevious} />}
      {currentIndex == 2 && <CreateCourseSecond onNext={handleNext} onPrevious={handlePrevious} />}
      {currentIndex == 3 && <CreateCourseSecond onNext={handleNext} onPrevious={handlePrevious} isDiscourse={true} isLast={true} />}
    </div>
  )
}
