import React, { useEffect } from 'react'
import { ButtonComponent, AccordianComponent, CourseItem } from '@/components'
import { AddIcon, LeftArrow } from '@/assets';
import { useCreateCourse } from '@/store/faculty/createCourse';

export const CreateCourseSecond = ({
  onPrevious,
  onNext,
  isDiscourse = false,
  isLast = false
}) => {

  const setCoursePlan = useCreateCourse(e => e.createCoursePlan);
  const setDiscourse = useCreateCourse(e => e.createDiscourse);

  const coursePlan = useCreateCourse(e => e.coursePlan);

  const [data, setData] = React.useState([
    {
      unit: 1,
      lessonPlan: [
        {
          lp: 1.1,
          lm: '',
          lv: '',
          topic: '',
          discourseLink:''
        }
      ]
    }
  ]);

  useEffect(() => {
    if (isDiscourse) {
      setData(coursePlan);
    }
   }, [isDiscourse]);

  const handleAddUnit = () => {
    const newUnitNumber = data.length + 1;
    const newPlan = {
      unit: newUnitNumber,
      lessonPlan: [
        {
          lp: parseFloat(`${newUnitNumber}.1`),
          lm: '',
          lv: '',
          topic:'',
          discourseLink: ''
        }
      ]
    };
    setData([...data, newPlan]);
  };

  const handleAddLessonPlan = (unitToAdd) => {
    const newData = data.map(item => {
      if (item.unit === unitToAdd) {
        const lastLP = item.lessonPlan[item.lessonPlan.length - 1].lp;
        const nextLP = Math.round((lastLP + 0.1) * 10) / 10;

        const newPlan = {
          lp: nextLP,
          lm: '',
          lv: '',
          topic:'',
          discourseLink: ''
        };

        return {
          ...item,
          lessonPlan: [...item.lessonPlan, newPlan]
        };
      }
      return item;
    });

    setData(newData);
  };

  const handleUpdateLessonPlan = (unitNumber, lessonIndex, field, value) => {
    const newData = data.map(item => {
      if (item.unit === unitNumber) {
        const updatedLessonPlan = item.lessonPlan.map((lesson, idx) => {
          if (idx === lessonIndex) {
            return { ...lesson, [field]: value };
          }
          return lesson;
        });
        return { ...item, lessonPlan: updatedLessonPlan };
      }
      return item;
    });
    setData(newData);
  };

  const handleDeleteLessonPlan = (unitNumber, lessonIndex) => {
    const newData = data.map(item => {
      if (item.unit === unitNumber) {
        const updatedLessonPlan = item.lessonPlan.filter((_, idx) => idx !== lessonIndex);
        return { ...item, lessonPlan: updatedLessonPlan };
      }
      return item;
    });
    setData(newData);
  };

  const handleDeleteUnit = (unitNumber) => {
    const newData = data.filter(item => item.unit !== unitNumber);
    setData(newData);
  };

  const handleNext = () => {
    if (!isDiscourse) {
      setCoursePlan(data);
      onNext?.();
    }
    if (isDiscourse) {
      setDiscourse(data);
      console.log(data)
    }
  };

  return (
    <div className='w-full h-screen p-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto h-full flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <span className='font-semibold text-2xl text-gray-800'>
            Create New Course
          </span>
          <ButtonComponent
            onClick={handleAddUnit}
            startContent={<AddIcon/>}
          >
            Add Unit
          </ButtonComponent>
        </div>

        <div className='bg-white flex-1 overflow-auto rounded-2xl border border-gray-200 flex flex-col justify-between'>
          <div>
            {data?.map((item, index) => (
              <div className='w-full' key={index}>
                <AccordianComponent
                  classNames={{
                    heading: "border-y border-gray-200 h-full p-0",
                    titleWrapper: "px-8 py-4",
                    content: "pb-2",
                    indicator: "mr-6"
                  }}
                  title={
                    <div className="flex items-center justify-between w-full pr-8">
                      <span className='text-gray-800 font-semibold text-base'>
                        UNIT No: {item.unit < 10 ? `0${item.unit}` : item.unit}
                      </span>
                      {data.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteUnit(item.unit);
                          }}
                          className="text-red-600 hover:text-red-700 p-1"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  }
                  content={
                    <CourseItem
                      data={item.lessonPlan}
                      onAddLessonPlan={() => handleAddLessonPlan(item.unit)}
                      onUpdateLessonPlan={handleUpdateLessonPlan}
                      onDeleteLessonPlan={handleDeleteLessonPlan}
                      isDiscourse={isDiscourse}
                      unitNumber={item.unit}
                    />
                  }
                />
              </div>
            ))}
          </div>

          <div className='flex justify-end items-center gap-4 p-4 border-t border-gray-200'>
            <ButtonComponent
              onClick={onPrevious}
              className='w-[140px] border bg-white border-purple-600 text-purple-600 hover:bg-purple-50'
              startContent={<LeftArrow size={20} className="mr-2" />}
            >
              Previous
            </ButtonComponent>
            <ButtonComponent
              onClick={handleNext}
              className='w-[120px] bg-purple-600 text-white hover:bg-purple-700'
              endContent={<span className='text-white ml-2 rotate-180'><LeftArrow /></span>}
              >
              {isLast ? "Save" : "Next"}
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
