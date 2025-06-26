import { Checkbox } from "@heroui/checkbox";
import { ButtonComponent, CourseHeader, InputField } from '@/components';
import React from "react";

export const CoursePlanCodeInput = ({
  course,
  faculty_members,
  onSubmit,
  isHeader = true
}) => {

  const [input, setInput] = React.useState("");

  return (
    <div className='flex items-center w-full justify-between'>
      {isHeader && 
        <div className='flex items-start'>
        <Checkbox
          radius='full'
          className='pt-[6.5px]'
          size='lg'
        />
        <CourseHeader
          isEdit={true}
          className={'ml-2'}
          isSaveBtn={false}
          course={course}
          dept={"CSE"}
          course_code={"22CS501"}
          academic_year={"24-25"}
          faculty_members={faculty_members}
        />
      </div>
}
      <div className='flex items-center gap-4'>
        <InputField
          radius={"sm"}
          placeholder={"Enter the code"}
          onChange={e => setInput(e.target.value)}
          classnames={{
            mainWrapper: "bg-white rounded-lg",
            inputWrapper: "bg-custom-1010 shadow-none border border-custom-1009"
          }}
        />
        <ButtonComponent
          className={"bg-purple-600"}
          onClick={() => onSubmit(input)}
        >
          Submit
        </ButtonComponent>
      </div>
    </div>
  )
}
