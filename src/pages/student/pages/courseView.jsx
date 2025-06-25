import { CoursePlanOverview } from '@/components'
import React from 'react'

export const StudentCourseView = () => {
  return (
    <div className='h-full overflow-auto scrollbar-hide'>
      <CoursePlanOverview
            showEdit = {false}
      />
    </div>
  )
}

