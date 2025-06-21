import React from 'react'
import { NavBar, SideBar, InputField, MessageCard, MessageNavbar, MessageBox, MessageList, CourseHeader, TabItem, CourseBody, CourseTable, Stepper, CourseItem, CreateCourseSecond, CourseMaterialTable } from "@/components";
import { SearchIcon } from '@/assets';
import { coursePlanList } from '../faculty/utils';
import { Tooltip } from '@heroui/tooltip';
export const Test = () => {
    const sampleData = [
        {
            user: "faculty",
            msg: "sir, 6 question Based on the social media network described, analyze the following statements and predict the five correct ones.",
        },
        {
            user: "student",
            msg: "answer is a,b,e,f,g,h this is correct.",
        }
    ];
  return (
      <div className='p-12 flex flex-col gap-5'>
        <CourseMaterialTable/>
        <CreateCourseSecond/>
        <CourseItem/>
          <Stepper/>
          <CourseTable
            data={coursePlanList}
          />
          <TabItem/>
          <SideBar />
          <NavBar />
          <div className='text-center'>
              <InputField
                  size="lg"
                  startContent={<SearchIcon />}
                  placeholder="Search messages"
              />
          </div>
          <MessageCard />
          <MessageNavbar />
          {sampleData.map((item,index) => (
              <MessageBox
                  key={index}
                  index={index}
                  msg={item.msg}
            />
          ))}
          <MessageList />
          <CourseHeader
              dept={"CSE"}
              course_code={"22CS501"}
              academic_year={"24-25"}
              faculty_members={["Dr.Parthasarathi P","Mrs.Ganagavalli K"]}
          />
             <CourseBody
                         className={"w-full max-w-[804px]"}
                         header={'Introduction to the course'}
                         message={'In theoretical computer science and mathematics, the theory of computation is the branch that deals with what problems can be solved on a model of computation, using an algorithm, how efficiently they can be solved or to what degree (e.g., approximate solutions versus precise ones). The field is divided into three major branches: automata theory and formal languages, computability theory, and computational complexity theory, which are linked by the question: "What are the fundamental capabilities and limitations of computers?' }
                     />
      </div>
  )
}

