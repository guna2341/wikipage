import React from 'react'
import { ButtonComponent, AccordianComponent, CourseItem } from '@/components'
import { AddIcon, LeftArrow } from '@/assets'

export const CreateCourseSecond = ({
  onPrevious,
  onNext,
  isDiscourse = false
}) => {

  const [data, setData] = React.useState([
    {
      unit: 1,
      lessonPlan: [
        {
          lp: 1.1,
          lm: 1.1,
          lv: 1.1
        }
      ]
    },
    {
      unit: 2,
      lessonPlan: [
        {
          lp: 1.1,
          lm: 1.1,
          lv: 1.1
        }
      ]
    }
  ]);

  function handleAddUnit() {
    const newPlan = {
      unit: data.length + 1,
      lessonPlan: [
        {
          lp: 1.1,
          lm: 1.1,
          lv: 1.1
        }
      ]
    };
    const newData = [...data, newPlan];
    setData(newData);

  }

  function handleAddLessonPlan(unitToAdd) {
    const newData = data.map(item => {
      if (item.unit === unitToAdd) {
        const lastLP = item.lessonPlan[item.lessonPlan.length - 1].lp;
        const nextLP = Math.round((lastLP + 0.1) * 10) / 10;

        const newPlan = {
          lp: nextLP,
          lm: nextLP,
          lv: nextLP
        };

        return {
          ...item,
          lessonPlan: [...item.lessonPlan, newPlan]
        };
      }
      return item;
    });

    setData(newData);

  }

  return (
    <div className='w-full h-[calc(100%-9rem)] flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <span className='font-semibold text-[22px] leading-6'>
          Create New Course
        </span>
        <ButtonComponent
          onClick={handleAddUnit}
          startContent={<AddIcon />}
        >
          Add Unit
        </ButtonComponent>
      </div>
      <div className='bg-white h-full overflow-auto rounded-2xl border border-custom-100 scrollbar-hide flex flex-col justify-between'>
        <div>
          {data.map((item, index) => (
            <div className='w-full' key={index}>
              <AccordianComponent
                className={'px-0'}
                classNames={{
                  heading: "border-y border-custom-100 h-full p-0",
                  titleWrapper: "px-8 py-3",
                  content: "pb-2",
                  indicator: "mr-6"
                }}
                id={index}
                title={<span className='text-custom-1016 font-semibold text-base leading-6'>UNIT No: {item.unit < 10 ? <span>0{item.unit}</span> : <span>{item.unit}</span>}</span>}
                content={<CourseItem data={item.lessonPlan} onClick={() => handleAddLessonPlan(item.unit)} isDiscourse={isDiscourse} />}
              />
            </div>
          ))}
        </div>
        <div className='flex justify-end items-center gap-4 p-4'>
          <ButtonComponent
            onClick={onPrevious}
            className={'w-[140px] border bg-white border-purple-600 text-purple-600 rounded-lg font-normal text-base leading-6 pr-3'}
            startContent={<span className='text-purple-600 pr-2'><LeftArrow /></span>}
          >
            Previous
          </ButtonComponent>
          <ButtonComponent
            onClick={onNext}
            className={'w-[120px] border bg-purple-600 border-purple-600 text-white rounded-lg font-normal text-base leading-6 pr-3'}
            endContent={<span className='text-white ml-2 rotate-180'><LeftArrow /></span>}
          >
            Next
          </ButtonComponent>
        </div>
      </div>
    </div>
  )
}
