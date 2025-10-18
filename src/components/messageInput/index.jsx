import { Pin, SendIcon } from '@/assets'
import { TextField } from '@/components';
import { useState } from 'react';

export const MessageInput = ({handleClick}) => {

  const [value, setValue] = useState("");

  return (
    <div className='w-full flex items-center gap-6 justify-center'>
      <Pin />
      <div className='relative w-full'>
        <TextField
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => {
            if (e.key == "Enter") {
              console.log("enter")
            }
          }}
          minRows={1}
          placeholder={"Type a message"}
        />
        <span
          className='absolute right-2 bottom-2 cursor-pointer'
          onClick={() => handleClick(value)}
        >
          <SendIcon />
        </span>
      </div>
    </div>
  )
}

