import { MessageBox } from '@/components'
import React from 'react'

export const MsgChat = () => {
  return (
   <div className='p-7 flex flex-col gap-8 overflow-y-scroll scrollbar-hide'>     
      <MessageBox />
      <MessageBox type='incoming' />
      <MessageBox />
      <MessageBox type='incoming' />
      <MessageBox />
      <MessageBox type='incoming' />
      <MessageBox />
      <MessageBox type='incoming' />
      <MessageBox />
      <MessageBox type='incoming' />
    </div>
  )
}

