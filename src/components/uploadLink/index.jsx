import React from 'react'
import { ButtonComponent, InputField } from '@/components'

export const UploadLink = ({ value, onChange, header = "Upload Lecture Video URL Link:", placeholder = "Enter video link" }) => {


    return (
        <div className='flex flex-col gap-2 w-full'>
            <span
                className='flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'
            >{header}
            </span>
            <InputField
                classname={'max-w-[692px]'}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                classnames={{
                    inputWrapper: "h-[50px] bg-custom-1025 border border-custom-1023"
                }}
                // endContent={
                //     <ButtonComponent
                //         className={'h-[35px]'}
                //         onClick={() => handleUpload}
                //     >
                //         Upload
                //     </ButtonComponent>}
            />
        </div>
    )
}

