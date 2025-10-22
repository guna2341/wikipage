import { ButtonComponent, NewCourseInputField } from '@/components'
import { LeftArrow } from '@/assets'
import { useState } from 'react'
import { useCreateCourse } from '@/store/faculty/createCourse'

export const CreateCourseFirst = ({
  onPrevious,
  onNext
}) => {


  const createCourse = useCreateCourse(e => e.createCourse);

  const [course, setCourse] = useState({
    courseName: '',
    courseDescription: '',
    courseObjective: ''
  });

  function handleChange(e) {
    setCourse(p => ({...p, [e.target.name]: e.target.value }));
  }

  function handleNext() {
    createCourse(course.courseName, course.courseDescription, course.courseObjective);
    onNext();
  }

  return (
    <div className='flex flex-col gap-[26px]'>
      <span className='font-semibold text-[22px] leading-6'>
        Create New Course
      </span>
      <div className='bg-white px-10 py-[22px] rounded-2xl flex flex-col gap-8'>
        <NewCourseInputField
          name={"courseName"}
          words={course.courseName}
          handleValue={handleChange}
          topLabel={"Enter Course Name"}
          placeholder={"Enter the Course Name"}
          bottomLabel={"Enter the Course Name like( 22CS501 - Theory of Computation)."}
        />
        <NewCourseInputField
          name={"courseDescription"}
          words={course.courseDescription}
          handleValue={(e) => handleChange({target:{name:"courseDescription",value:e.target.value}})}
          topLabel={"Introduction to the course"}
          placeholder={"Enter the Course Name"}
          isTextArea
        />
        <NewCourseInputField
          name={"courseObjective"}
          words={course.courseObjective}
          handleValue={(e) => handleChange({ target: { name: "courseObjective", value: e.target.value } })}
          topLabel={"Course Objective"}
          placeholder={"Enter the Course Objective"}
          isTextArea
        />
        <div className='flex justify-end items-center gap-4'>
          <ButtonComponent
            className={'w-[140px] border bg-white border-purple-600 text-purple-600 rounded-lg font-normal text-base leading-6 pr-3'}
            onClick={onPrevious}
            startContent={<span className='text-purple-600 pr-2'><LeftArrow /></span>}
          >
            Previous
          </ButtonComponent>
          <ButtonComponent
            className={'w-[120px] border bg-purple-600 border-purple-600 text-white rounded-lg font-normal text-base leading-6 pr-3'}
            onClick={handleNext}
            endContent={<span className='text-white ml-2 rotate-180'><LeftArrow /></span>}
          >
            Next
          </ButtonComponent>
        </div>
      </div>
    </div>
  )
}
