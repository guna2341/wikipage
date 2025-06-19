import React from 'react'
import { ButtonComponent } from '../button'
import { InputField } from '../input'
import { AddIcon } from '@/assets'

export const CourseItem = ({
    data = [
        {
            lp:1.1,
            lm:"",
            lv:""
        }
    ]
}) => {

    const [lm,setLm] = React.useState("");

  return (
    <div>
        <div className='flex justify-end'>
        <ButtonComponent
        startContent={<AddIcon/>}
        >
            Add Lesson Plan
        </ButtonComponent>
        </div>
        {data.map((item) =>(
            <div className='flex flex-col gap-[22px]'>
                <span className='flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'>
                    Lesson Plan:{item?.lp}
                    <InputField
                    variant={"bordered"}
                    disabled
                    classnames={{
                        inputWrapper:"shadow-none border-[1px] border-custom-1015"
                    }}
                    />
                </span>
                    <span className='flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'>
                        Upload Lecture Material File:
                        <div className='flex justify-between'>
                            <div className='w-[419px] h-[114px] border border-dashed border-custom-1021 rounded-md'>

                            </div>
                            <div></div>
                        </div>
                    </span>
            </div>
        ))}
    </div>
  )
}
