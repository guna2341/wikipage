import { FileUpload } from '@/assets'
import { object } from 'framer-motion/client'
import React, { useRef, useState } from 'react'
import * as XLSX from 'xlsx'
import { StudentListTable } from '../studentListTable'
export const FileUploadBox = () => {
  const[exceldata,setExceldata]=useState([])
  const [isEdit, setEdit] = useState(false);
  const ref = useRef(null);

  function handleFileUpload(e) {
    console.log("e:",e)
    const file=e.target.files[0]
    // console.log("e:",e.target.files[0])
    const reader=new FileReader();
    reader.onload=(event)=>{
      console.log("event",event)
      const res=event.target.result
      console.log("result",res)
      const data=new Uint8Array(res)
      const booksheet=XLSX.read(data,{type:"array"})
      console.log("booksheet: ",booksheet);
      const sheet=booksheet.Sheets[booksheet.SheetNames[0]]
      console.log("sheets",sheet)
      const json=XLSX.utils.sheet_to_json(sheet)
      setExceldata(json)
      console.log(json)
      
    }
    reader.readAsArrayBuffer(file)

  }

  function handleClick() {
    ref.current.click();
  }
  console.log("EXCEL DATA:", exceldata);

  const students=exceldata;
  const studentHeader = exceldata.length > 0
  ? Object.keys(exceldata[0]).map((key) => ({
      id: key,
      label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize label
    }))
  : [];

  console.log("students: ",students)
  // const header=[{Object.}]
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
      {exceldata.length>0 && (
      //   <table className='w-full'>
      //   <thead>
      //     {Object.keys(exceldata[0]).map((key,index)=>(
      //       <th  className='border-1'>{key}</th>
      //     ))}
      //   </thead>  
      //   <tbody>
      //     {exceldata.map((row,index)=>(
      //       <tr key={index} >
      //         {Object.values(row).map((value,i)=>(
      //           <td className='border-1' key={i}>{value}</td>
      //         ))}
      //       </tr>
      //     ))}
      //   </tbody>
        
      // </table>
      <StudentListTable student={students} header={studentHeader} isedit={isEdit} edit={setEdit} />
    )}
      
    </div>
  )
}

