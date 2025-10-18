import { CoursePlanCodeInput, CoursePlanIllustration, CoursePlanUndoTable, CoursePlanOverview, AccordianComponent  } from '@/components'
import React from 'react'
import { Courses, courseUndoCourses, courseUndoList } from '../utils'
import useCoursePlanStore from '@/store/faculty/coursePlan'
import useCourseMaterialStore from '@/store/faculty/courseMaterial'
import { Outlet, useNavigate } from 'react-router-dom'
import { Accordion, AccordionItem } from '@heroui/accordion'

export const CoursePlan = () => {

  const navigate = useNavigate();
  const subNavbar = useCoursePlanStore(e => e.subNavbar);
  const changeCoursePlan = useCoursePlanStore(e => e.changeCoursePlan);
  const { mappedCourses } = useCourseMaterialStore();

  function handleEdit() {
    changeCoursePlan("currentNavbar","1");
    navigate("/faculty/courseMaterial"); 
  }

  function handleSubmit(courseId) {
    navigate("/faculty/courseMaterial"); 
    changeCoursePlan("currentNavbar","1");
  }

  return (
    <div className='h-[calc(100%-0rem)] w-full overflow-scroll scrollbar-hide'>
      {subNavbar == "-1" &&
        <div className='p-7 flex flex-col gap-5 h-full'> 
          <Accordion
            variant="splitted"
            className="px-0"
            itemClasses={{
              base: "rounded-xl border border-gray-200 bg-white shadow-none duration-200 mb-3",
              title: "font-semibold text-gray-800 text-lg",
              trigger: "rounded-xl flex justify-between items-center !shadow-none transition-colors duration-150 data-[focus-visible=true]:outline-0",
              content: "rounded-b-xl",
            }}
          >
            <AccordionItem
              key="mapped-courses"
              aria-label="Mapped Courses"
              title={
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900">
                    Mapped Courses
                  </span>
                  <span className="text-sm text-gray-500">
                    ({mappedCourses?.length || 0})
                  </span>
                </div>
              }
            >
              <div className="space-y-4">
                {mappedCourses?.length > 0 ? (
                  mappedCourses?.map((item) => (
                    <div
                      key={item?.id}
                      onClick={() => navigate(item?.course_code)}
                      className="border border-gray-200  cursor-pointer rounded-xl p-3 bg-white hover:shadow-sm transition-all duration-200"
                    >
                      <CoursePlanCodeInput
                        courseClassName={"text-base !font-medium"}
                        course={item?.course_name}
                        faculty_members={item?.faculty_members}
                        onSubmit={() => handleSubmit(item?.id)}
                      />
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-center py-6 text-sm">
                    No courses mapped yet.
                  </div>
                )}
              </div>
            </AccordionItem>
          </Accordion>

          <div className='bg-white border border-custom-100 rounded-2xl min-h-[440px] overflow-auto scrollbar-hide'>
          <CoursePlanUndoTable
        data={courseUndoList}
            /> 
          </div>
        </div>
      }
    </div>
  )
}
