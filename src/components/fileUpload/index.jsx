import { FileUpload } from '@/assets'
import React from 'react'

export const FileUploadBox = () => {
  return (
    <div className='w-full max-w-full h-full justify-between border border-dashed border-custom-1021 rounded-md p-4 flex flex-col gap-2.5'>
      <span className='flex justify-center'><FileUpload /></span>
      <div className='text-center flex flex-col gap-1.5'>
        <p className='text-custom-1022 font-normal text-xs leading-3'>
          Drag your file(s) or <span className='text-custom-1017 font-semibold cursor-pointer'>browse</span>
        </p>
        <p className='font-normal text-xs leading-3'>
          Max 10 MB files are allowed
        </p>
      </div>
    </div>
  )
}

