import { DocumentIcon, TickMark } from '@/assets'
import { Progress } from '@heroui/progress'
import React from 'react'

export const UploadProgress = ({
    name,
    size,
    progress
}) => {
  return (
     <div className='w-full h-full max-h-[98px] border border-custom-1023 rounded-md px-4 py-3 flex flex-col gap-1'>
                                   <div className='flex items-center justify-between'>
    
                                    <div className='flex gap-3 w-full'>
                                        <div className='pt-1'>
                                        <DocumentIcon/>
                                        </div>
                                        <div className='text-custom-1022 w-full'>
                                            <div className='flex items-center justify-between w-full font-medium'>{name}<TickMark/></div>
                                             <div className='text-custom-1020'>{size}</div>
                                        </div>
                                    </div>
                                   </div>
                                   <div className='gap-3 flex items-center'>
                                    <Progress
                                        size='sm'
                                        value={progress}
                                        classNames={{
                                            indicator:"bg-custom-1024"
                                        }}
                                    />
                                    {progress}%
                                   </div>
                                </div>
  )
}

