import React from 'react'
import { ButtonComponent } from '../button'
import { AddIcon } from '@/assets'
import { AccordianComponent } from '../accordian'
import { CourseItem } from '../createCourseItem'

export const CreateCourseSecond = ({
}) => {

    const [data,setData] = React.useState([
        {
            unit:1,
            lessonPlan:[
                {
                    lp:1.1,
                    lm:1.1,
                    lv:1.1
                }
            ]
        },
         {
            unit:2,
            lessonPlan:[
                {
                    lp:1.1,
                    lm:1.1,
                    lv:1.1
                }
            ]
        }
    ]);

    function handleAddUnit() {
        const newPlan = {
            unit:data.length+1,
            lessonPlan:[
                {
                    lp:1.1,
                    lm:1.1,
                    lv:1.1
                }
            ]
        };
        const newData = [...data,newPlan];
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
            className={'bg-custom-1017'}
            startContent={<AddIcon/>}
            >
                Add Unit
            </ButtonComponent>
        </div>
        <div className='bg-white h-full overflow-auto rounded-2xl border border-custom-100 scrollbar-hide'>
            {data.map((item,index) => (
                <div className='w-full'>
                    <AccordianComponent
                    className={'px-0'}   
                    classNames={{
                    heading:"border-b border-custom-100 h-full p-0",
                    titleWrapper:"px-8 py-3",
                    content:"pb-2",
                    indicator:"mr-6"
                    }}
                    id={index}
                    title={<span className='text-custom-1016 font-semibold text-base leading-6'>UNIT No: {item.unit < 10 ? <span>0{item.unit}</span> : <span>{item.unit}</span>}</span>}
                    content={<CourseItem data={item.lessonPlan} onClick={() => handleAddLessonPlan(item.unit)} />}
                    />
                    </div>
            ))}
        </div>
    </div>
  )
}
