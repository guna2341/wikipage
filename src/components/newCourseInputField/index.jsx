import React from 'react';
import { InputField } from '../input';
import { TextField } from '../textarea';

export const NewCourseInputField = (
  {
    placeholder,
    topLabel,
    bottomLabel,
    isTextArea = false,
  }
) => {

  const [words,setWords] = React.useState(0);

  function handleOnChange(e) {
    setWords(e.target.value.length);
  }

  if (!isTextArea) {
  return (
    <div
    >
       <div className='flex flex-col gap-4'>
       <span className='font-semibold text-lg leading-6'>
          {topLabel}
        </span>
              <span 
        className='font-normal text-custom-1016 text-xs leading-6 flex flex-col gap-2'
        >
        <InputField
        disabled  
        placeholder={placeholder}
        classname={'opacity-100'}
        classnames={{
          base:"rounded-2xl",
          mainWrapper:"border border-custom-1015 rounded-2xl h-[70px]",
          inputWrapper:"bg-custom-850 h-full w-full rounded-2xl data-[hover=true]:bg-custom-850  group-data-[focus=true]:bg-custom-850"
        }}
        />
          <span className='text-sm leading-6'>
          {bottomLabel}
          </span>
        </span>
       </div>
    </div>
  )
}

else {
return (
    <div
      >
       <div className='flex flex-col gap-4'>
       <span className='font-semibold text-lg leading-6'>
          {topLabel}
        </span>
        <span 
        className='font-normal text-custom-1016 text-xs leading-6 flex flex-col gap-2'
        >
          <div className='rounded-xl border border-custom-1015 bg-custom-850 pb-0.5'>
        <TextField
        disableAutosize
        disabled   
        onChange={handleOnChange}
        placeholder={placeholder}
        classname={'opacity-100'}
        classNames={{
          inputWrapper:"bg-custom-850 max-h-[190px] w-full shadow-none border-custom-1015 data-[hover=true]:bg-custom-850 group-data-[focus=true]:bg-custom-850",
          input:"h-[192px] p-1 pt-5"
        }}
        />
        <span className='pl-4 font-normal text-custom-1016 text-xs leading-6'>
          {words} Words Out Of 500 Words
        </span>
        </div>
          {bottomLabel}
        </span>
       </div>
    </div>
  )
}
}
