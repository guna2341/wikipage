import { MessageInput } from '@/components'
import React from 'react'

export const MSgInput = () => {
  return (
      <div className='pl-28 pr-32 py-4'>
          <MessageInput handleEnter={() => console.log("click")}/>
    </div>
  )
}

