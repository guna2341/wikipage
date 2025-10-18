import React from 'react';
import { DownArrow, Edit } from '@/assets';
import { cn } from '@/components';
import useCoursePlanStore from '@/store/faculty/coursePlan';
import useCourseMaterialStore from '@/store/faculty/courseMaterial';
import { useNavigate } from 'react-router-dom';

export const SideBarAccordian = ({handleNav, customTab}) => {

  const subNavbar = useCoursePlanStore(e => e.subNavbar);
  const changeCoursePlan = useCoursePlanStore(e => e.changeCoursePlan);
  const [sidebar, setSidebar] = React.useState(false);
  const contentRef = React.useRef(null);
  const { mappedCourses } = useCourseMaterialStore();
  const nav = useNavigate();

  function SubNavbarChange() {
    changeCoursePlan("subNavbar", "-1");
    setSidebar(!sidebar);
    nav("/faculty/courseplan")
  }

  function onTabChange(newTab) {
    changeCoursePlan("subNavbar", newTab);
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
    <div className="flex flex-col w-full">
      <div className='flex gap-4 items-center pl-4'>
        <span>
          <Edit />
        </span>
        <div
          className='flex justify-between w-full items-center p-4 pl-0 cursor-pointer'
          onClick={SubNavbarChange}
        >
          Course Plan
          {customTab && <DownArrow
            className={cn("transition-transform duration-500 ease-in-out", {
              "rotate-180": sidebar
            })}
          />
          }
        </div>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all w-full duration-500 ease-in-out"
        style={{ maxHeight: sidebar ? 'auto' : '0px' }}
      >
        <div className='border-t-0 border w-full border-custom-500 rounded-b-md'>
          {mappedCourses?.map((course, index) => (
            <div
              key={course?.id}
              onClick={() => {
                onTabChange(course?.id);
                handleNav(course?.course_code)
              }}
              className={cn(
                'border-t border-custom-500 py-3 bg-white cursor-pointer transition-colors font-normal text-base leading-6 text-custom-400 duration-200 !w-full',
                {
                  'bg-custom-500 border-b border-custom-1007 bg-opacity-100': subNavbar === course?.id,
                  'hover:bg-gray-100': subNavbar !== course?.id,
                  'rounded-b-md': `${index}` === mappedCourses?.length - 1
                }
              )}
            >
              {course?.course_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};