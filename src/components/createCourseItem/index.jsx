import React from 'react'
import { ButtonComponent, InputField, cn, SelectComponent, FileUploadBox, UploadProgress, UploadLink } from '@/components'
import { AddIcon } from '@/assets'

export const CourseItem = ({
    data = [],
    onClick,
    isDiscourse
}) => {

    const [lm, setLm] = React.useState({
        lm: "",
        lmName: "HannahBusing.Resume.pdf",
        size: "200 KB",
        progress: 100
    });

    const [lv, setLv] = React.useState("https://sharefile.xyz/file.jpg");

    return (
        <div className='flex flex-col gap-5 py-4 px-4'>
            <div className='flex justify-end'>
                <ButtonComponent
                    onClick={onClick}
                    startContent={<AddIcon />}
                >
                    Add Lesson Plan
                </ButtonComponent>
            </div>
            {data.map((item, index) => (
                <div className={cn('flex flex-col gap-[22px] px-8 pb-8', {
                    'border-b border-custom-100': data.length - 1 !== index
                })}>

                    <CustomInputField isDiscourse={isDiscourse} lp={item?.lp} />
                    <div className='flex flex-col gap-6'>
                        <span className='flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'>
                            {isDiscourse ? <span>Upload DISCOURSE Material File:</span> : <span>Upload Lecture Material File:</span>}
                            <div className='flex justify-between items-start gap-8'>
                                <FileUploadBox />
                                <UploadProgress
                                    name={lm?.lmName}
                                    size={lm?.size}
                                    progress={lm?.progress}
                                />
                            </div>
                        </span>
                        <UploadLink
                            lv={lv}
                        />
                    </div>
                    <div className='flex gap-4 justify-end'>
                        <ButtonComponent
                            className={"border border-custom-1026 bg-white text-black"}
                        >
                            Cancel
                        </ButtonComponent>
                        <ButtonComponent>
                            Save
                        </ButtonComponent>
                    </div>
                </div>
            ))}
        </div>
    )
}

const CustomInputField = ({ isDiscourse, lp }) => {
    const lpData = [
        {
            key: '1.1',
            label: '1.1'
        },
        {
            key: '1.2',
            label: '1.2'
        },
        {
            key: '1.3',
            label: '1.3'
        },
    ];
    if (isDiscourse) {
        return (
            <div className='flex items-center gap-[82px]'>
                <div className='w-full max-w-[280px] flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'>
                    Starting Lesson Plan:
                    <SelectComponent
                        label='Select Lesson Plan'
                        data={lpData}
                    />
                </div>
                <div className='w-full max-w-[280px] flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'>
                    Ending Lesson Plan:
                    <SelectComponent
                        label='Select Lesson Plan'
                        data={lpData}
                    />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'>
                Lesson Plan: {lp}
                <InputField
                    variant={"bordered"}
                    disabled
                    classnames={{
                        inputWrapper: "shadow-none border-[1px] border-custom-1015"
                    }}
                />
            </div>
        )
    }
}