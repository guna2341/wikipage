import { Pin, SendIcon } from '@/assets'
import React from 'react'
import { TextField } from '../textarea';

export const MessageInput = ({handleEnter}) => {
  return (
    <div className='w-full flex items-center gap-6 justify-center'>
      <Pin />
      <div className='relative w-full'>
        <TextField
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
        >
          <SendIcon />
          </span>
      </div>
    </div>
  )
}

