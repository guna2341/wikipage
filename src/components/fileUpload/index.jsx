import { FileUpload } from '@/assets'
import React from 'react'
import * as XLSX from 'xlsx'
export const FileUploadBox = ({handleData}) => {
  const ref = React.useRef(null);

  function handleFileUpload(e) {
    const file=e.target.files[0]
    const reader=new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload=(event)=>{
      const res=event.target.result
      const data=new Uint8Array(res)
      const booksheet=XLSX.read(data,{type:"array"})
      const sheet=booksheet.Sheets[booksheet.SheetNames[0]]
      const json=XLSX.utils.sheet_to_json(sheet)
      handleData(json);
    }

  }

  function handleClick() {
    ref.current.click();
  }


  return (
    <div>
      <div className='w-full mb-[20px] cursor-pointer max-w-full h-full justify-between border border-dashed border-custom-1021 rounded-md p-4 flex flex-col gap-2.5'
      onClick={handleClick}
      >
        <span className='flex justify-center'><FileUpload /></span>
        <div className='text-center flex flex-col gap-1.5'>
          <p className='text-custom-1022 font-normal text-xs leading-3'>
            Drag your file(s) or <span className='text-custom-1017 font-semibold cursor-pointer'>browse</span>
          </p>
          <p className='font-normal text-xs leading-3'>
            Max 10 MB files are allowed
          </p>
          <input className='hidden' type='file' ref={ref} accept='.xlsx, .xls' onChange={handleFileUpload} />
        </div>
      </div>
    </div>
  )
}

