import React, { useState } from 'react'
import { NavBar, SideBar, InputField, MessageCard, MessageNavbar, MessageBox, MessageList, CourseHeader, TabItem, CourseBody, CourseTable, Stepper, CourseItem, CreateCourseSecond, CourseMaterialTable, StudentListTable } from "@/components";
import { SearchIcon } from '@/assets';
import { coursePlanList } from '../faculty/utils';
import { CoursePlanOverview } from '@/components/coursePlanOverview';
import { SyllabusTable } from '@/components/syllabusTable';
import { courseTable } from '../student/utils';
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
     const students=[{id:1,name:"Ajay k",email:"ajay.cs23@bitsathy.ac.in",register:"7376231CS101",department:"CSE",yos:2024, semester:"S5"},
        {id:2,name:"Ajay k",email:"ajay.cs23@bitsathy.ac.in",register:"7376231CS101",department:"CSE",yos:2024,semester:"S5"},
        {id:3,name:"Ajay k",email:"ajay.cs23@bitsathy.ac.in",register:"7376231CS101",department:"CSE",yos:2024,semester:"S5"}
    ];

    const studentHeader=[
        {id:1,label:"Student Name"},
        {id:2,label:"Email"},
        {id:3,label:"Register Number"},
        {id:4,label:"Department"},
        {id:5,label:"Year of Study"},
        {id:6,label:"Semester"},
        {id:7,label:"Action"}
    ]
    const [isEdit, setEdit] = useState(false);
    
  return (
      <div className='p-12 flex flex-col gap-5'>
        <StudentListTable student={students} header={studentHeader} isedit={isEdit} edit={setEdit} />
        <SyllabusTable
        header="B.E COMPUTER SCIENCE AND ENGINEERING"
        minimun_credits={'22.0'}
        courses={courseTable}
        />
        <CoursePlanOverview/>
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

