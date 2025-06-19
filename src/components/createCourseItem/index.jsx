import React from 'react'
import { ButtonComponent } from '../button'
import { InputField } from '../input'
import { AddIcon, DocumentIcon, FileUpload } from '@/assets'
import { TickMark } from '@/assets/svgs/tickMark'
import { Progress } from '@heroui/progress'
import { cn } from '../cn'

export const CourseItem = ({
    data = [],
    onClick
}) => {

    const [lm,setLm] = React.useState({
        lm:"",
        lmName:"HannahBusing.Resume.pdf",
        size:"200 KB",
        progress:100
    });
    const [lv,setLv] = React.useState("https://sharefile.xyz/file.jpg");
  return (
    <div className='flex flex-col gap-5 py-4 px-4'>
        <div className='flex justify-end'>
        <ButtonComponent
        onClick={onClick}
        startContent={<AddIcon/>}
        >
            Add Lesson Plan
        </ButtonComponent>
        </div>
        {data.map((item,index) =>(
            <div className={cn('flex flex-col gap-[22px] px-8 pb-8',{
                   'border-b border-custom-100' :data.length-1   !== index
            })}>
                <span className='flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'>
                    Lesson Plan: {item?.lp}
                    <InputField
                    variant={"bordered"}
                    disabled
                    classnames={{
                        inputWrapper:"shadow-none border-[1px] border-custom-1015"
                    }}
                    />
                </span>
                <div className='flex flex-col gap-6'>
                    <span className='flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'>
                        Upload Lecture Material File:
                        <div className='flex justify-between items-start gap-32'>
                            <div className='w-full max-w-[492px] h-full max-h-[114px] border border-dashed border-custom-1021 rounded-md p-4 flex flex-col gap-2.5'>
                                <span className='flex justify-center'><FileUpload/></span>
                                <div className='text-center flex flex-col gap-1.5'>
                                    <p className='text-custom-1022 font-normal text-xs leading-3'>
                                        Drag your file(s) or <span className='text-custom-1017 font-semibold cursor-pointer'>browse</span>
                                    </p>
                                    <p className='font-normal text-xs leading-3'>
                                        Max 10 MB files are allowed
                                    </p>
                                </div>
                            </div>
                            <div className='w-full h-full max-h-[88px] border border-custom-1023 rounded-md px-4 py-3 flex flex-col'>
                               <div className='flex items-center justify-between'>

                                <div className='flex gap-3 w-full'>
                                    <div className='pt-0.5'>
                                    <DocumentIcon/>
                                    </div>
                                    <div className='text-custom-1022 w-full'>
                                        <div className='flex items-center justify-between w-full font-medium'>{lm?.lmName}<TickMark/></div>
                                         <div className='text-custom-1020'>{lm?.size}</div>
                                    </div>
                                </div>
                               </div>
                               <div className='gap-3 flex items-center'>
                                <Progress
                                    size='sm'
                                    value={lm.progress}
                                    classNames={{
                                        indicator:"bg-custom-1024"
                                    }}
                                />
                                {lm.progress}%
                               </div>
                            </div>
                        </div>
                    </span>
                    <div className='flex flex-col gap-2'>
                        <span
                        className='flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'
                        >Upload Lecture Video URL Link:
                        </span>
                        <InputField
                        classname={'w-[492px]'}
                        value={lv}
                        onChange={e => setLv(e.target.value)}
                        classnames={{
                            inputWrapper:"h-[50px] bg-custom-1025 border border-custom-1023"
                        }}
                        endContent={
                        <ButtonComponent
                        className={'h-[35px]'}
                        onClick={() => console.log("clicked")}
                        >
                            Upload
                        </ButtonComponent>}
                        />
                    </div>
                  </div>
            </div>
        ))}
    </div>
  )
}
