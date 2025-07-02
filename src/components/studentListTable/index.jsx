import React from 'react'
import { InputField } from '../input'
import { AddIcon, Delete, Edit, Edit2, SearchIcon } from '@/assets'
import { SelectComponent } from '../select'
import { ButtonComponent } from '../button'
import { span } from 'framer-motion/client'
import { Checkbox } from '@heroui/checkbox'

export const StudentListTable = (props) => {

    const [selected, setselected] = React.useState(false);

    const handleclick=()=>{
        props.edit(!props.isedit)
    }
   
  return (
    <div>
        <div className='border-2 w-full border-custom-100  rounded-tr-[10px] rounded-tl-[10px] p-5 bg-custom-1029 flex border-b-0 pb-0'>
                <div className='flex gap-[15px]'>
                    <InputField startContent={<SearchIcon/>} classnames={{inputWrapper:'bg-white border-2',mainWrapper:"rounded-2xl"}} placeholder={"Search"} classname={'w-[320px]  h-[32px]'} radius={"sm"}/>
                    <SelectComponent className={'w-[156px]'} placeholer="Select" classNames={{trigger:'h-[40px]' , mainWrapper:'bg-white rounded-2xl'}}/>
                </div>
                <div className='flex gap-[15px] ml-auto'>
                    <ButtonComponent startContent={<span className='text-white'><Edit2 color='currentColor'/></span>} children='Edit' onClick={handleclick} className={'ml-auto'}/>
                    <ButtonComponent startContent={<AddIcon/>}  children='Upload'/>
                </div>
        </div>
        <table className='w-full'>
            <thead>
                <tr className='border-2 w-full border-custom-100 border-t-0 text-center bg-custom-1029 '>
                      <th className='pl-5'>
                          <Checkbox
                              isSelected={selected}
                              onValueChange={setselected}
                          />
                        </th>
                    
                    {props.header.map((h)=>{
                        return(
                        <th className='font-semibold py-5 border-2 border-l-0 border-r-0 border-t-0 text-custom-1030 text-sm'>{h.label}</th>
                    ) })}
                </tr>
            </thead>
            <tbody className='rounded-[50px] border-2 '>
                {props.student.map((s)=>{
                    return(
                <tr key={s.id} className='border-2 text-center '>
                            <td className='pl-5'>
                                {selected ? <Checkbox isSelected={true} /> : <Checkbox /> }
                            </td>
                    <td className='py-[15px] text-custom-1004 text-sm '>{s.name}</td>
                    <td className='text-custom-1004 text-sm'>{s.email}</td>
                    <td className='text-custom-1004 text-sm'>{s.register}</td>
                    <td className='text-custom-1004 text-sm'>{s.department}</td>
                    <td className='text-custom-1004 text-sm'>{s.yos}</td>
                    <td className='text-custom-1004 text-sm'>{s.semester}</td>
                    <td><div className='flex justify-center items-center gap-[15px]'>
                        {props.isedit&&(<Edit2/>)}
                        
                        <Delete />
                    </div></td>
                    
                </tr>)
                })}
                
            </tbody>
        </table>
    </div>
  )
}

