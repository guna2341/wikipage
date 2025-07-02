import { CreateCourse } from '@/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const FacultyCreateCourse = () => {
  
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(-1);
    }
  
    return (
    <CreateCourse 
    handleNavigate={handleNavigate}
    />
  )
}

