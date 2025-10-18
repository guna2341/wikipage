import { CourseBody, CourseHeader, CoursePlanIllustration, CourseTable } from '@/components'
import { coursePlanList } from '@/pages/faculty/utils'
import React, { useState } from 'react'

export const CoursePlanOverview = ({
    handleEdit,
    showEdit = true,
    isEdit = false,
    course
}) => {

    return (
        <div className='p-7 flex flex-col gap-9 h-full overflow-auto scrollbar-hide'>
            <CourseHeader
                isEdit={isEdit}
                showEdit={showEdit}
                handleEdit={handleEdit}
                dept={course?.dept}
                course_code={course?.course_code}
                academic_year={course?.academic_year}
                faculty_members={["Dr.Parthasarathi P", "Mrs.Ganagavalli K"]}
            />
            <CourseBody
                isEdit={isEdit}
                className={"w-full max-w-[804px]"}
                body={course?.body}
                header={'Introduction to the course'}
                message={'In theoretical computer science and mathematics, the theory of computation is the branch that deals with what problems can be solved on a model of computation, using an algorithm, how efficiently they can be solved or to what degree (e.g., approximate solutions versus precise ones). The field is divided into three major branches: automata theory and formal languages, computability theory, and computational complexity theory, which are linked by the question: "What are the fundamental capabilities and limitations of computers?'}
            />
            <CourseBody
                isEdit={isEdit}
                className={"w-full max-w-[804px]"}
                header={'Course Objective'}
                message={<div>
                    <li>Understand the mathematical models of computation and formal language</li>
                    <li> Understand the capability of Turing machines and to design TM for a given language.</li>
                    <li>Understand the decidability and intractability of computational problems</li>
                </div>}
            />
            <CourseBody
                isEdit={isEdit}
                className={"w-full max-w-[804px]"}
                header={'Course Outcomes'}
                message={<div>
                    <li>Design the Finite Automata for computable problems.</li>
                    <li>Formulate / Design regular expression for pattern recognition.</li>
                    <li>Develop pushdown automata for language recognition.</li>
                    <li>Analyse the Turing machine for language acceptance.</li>
                    <li>Analyse the undecidability of languages.</li>
                </div>}
            />
            <div
                className='flex flex-col gap-[18px]'
            >
                <p
                    className='font-semibold text-lg leading-6 flex items-center gap-3'
                >
                    Course Plan
                </p>
                <CourseTable
                    data={coursePlanList}
                />
            </div>
        </div>
    )
}
