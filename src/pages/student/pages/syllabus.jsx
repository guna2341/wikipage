import { SyllabusTable } from '@/components/syllabusTable'
import React from 'react'
import { courseTable } from '../utils'
import { useNavigate, useParams } from 'react-router-dom'

export const Syllabus = () => {

  const params = useParams();
  const navigate = useNavigate();

 function dept(dept) {
  switch (dept.toUpperCase()) {
    case "BIOMEDICAL ENGINEERING":
      return "BIO";
    case "CIVIL ENGINEERING":
      return "CIVIL";
    case "COMPUTER SCIENCE AND ENGINEERING":
      return "CSE";
    case "ELECTRICAL AND ELECTRONICS ENGINEERING":
      return "EEE";
    case "ELECTRONICS AND COMMUNICATION ENGINEERING":
      return "ECE";
    case "MECHANICAL ENGINEERING":
      return "MECH";
    case "INFORMATION TECHNOLOGY":
      return "IT";
    case "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE":
      return "AIDS";
    default:
      return "UNKNOWN";
  }
}

function sem(sem) {
  switch (sem) {
    case "S1":
      return "I";
    case "S2":
      return "II";
    case "S3":
      return "III";
    case "S4":
      return "IV";
    case "S5":
      return "V";
    case "S6":
      return "VI";
    case "S7":
      return "VII";
    case "S8":
      return "VIII";
    default:
      return "UNKNOWN";
  }
}

function handleClick(course_code) {
        if (course_code) {
            navigate(`${course_code}`);
        }
}

  return (
    <div className='p-5 scrollbar-hide overflow-scroll h-full'>
      <div className='bg-white h-[calc(100%+10rem)] py-5 px-5 border border-custom-100 rounded-2xl flex flex-col gap-5 pb-10'>
        <p className='font-semibold text-xl leading-6'>
          {dept(params.dept)}: SEMESTER {sem(params.sem)} (25-26)
        </p>
        <p className='font-semibold text-base leading-6'>
          B.E. {params.dept.toUpperCase()} SYLLABUS
        </p>
      <div className='w-full h-full'>
      <SyllabusTable
      handleClick={handleClick}
      minimun_credits={'22.0'}
      header={`B.E ${params.dept}`}
      courses={courseTable}
      />
      </div>
      </div>
    </div>
  )
}

