import { DownArrow, Edit } from '@/assets';
import { Courses } from '@/pages/faculty/utils';
import React from 'react';
import { cn } from '../cn';
import useCoursePlanStore from '@/store/faculty/coursePlan';

export const SideBarAccordian = ({ onClick }) => {

  const subNavbar = useCoursePlanStore(e => e.subNavbar);
  const changeCoursePlan = useCoursePlanStore(e => e.changeCoursePlan);
  const [sidebar, setSidebar] = React.useState(false);
  const contentRef = React.useRef(null);

  function SubNavbarChange() {
    setSidebar(!sidebar);
    changeCoursePlan("subNavbar","-1");
  }

  function onTabChange(newTab) {
      changeCoursePlan("subNavbar",newTab);
  }

  React.useEffect(() => {
    const content = contentRef.current;
    if (content) {
      if (sidebar) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0px';
      }
    }
  }, [sidebar]);

  return (
    <div className="flex flex-col">
      <div className='flex gap-4 items-center pl-4'>
        <span>
          <Edit />
        </span>
        <div
          className='flex justify-between w-full items-center p-4 cursor-pointer'
          onClick={SubNavbarChange}
        >
          Course Plan
          <DownArrow
            className={cn("transition-transform duration-500 ease-in-out", {
              "rotate-180": sidebar
            })}
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: sidebar ? 'auto' : '0px' }}
      >
        <div className='mt-4 border-t-0 border border-custom-500 rounded-b-md'>
          {Courses.map((course, index) => (
            <div
              key={course.id}
              onClick={() => onTabChange(course.id)}
              className={cn(
                'border-t border-custom-500 py-3 pl-10 bg-white cursor-pointer transition-colors font-normal text-base leading-6 text-custom-400 duration-200',
                {
                  'bg-custom-500 border-b border-custom-1007 bg-opacity-100': subNavbar === course.id,
                  'hover:bg-gray-100': subNavbar !== course.id,
                  'rounded-b-md': `${index}` === Courses.length - 1
                }
              )}
            >
              {course.course}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};