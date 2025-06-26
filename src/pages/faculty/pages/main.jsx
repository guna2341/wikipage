import React from 'react'
import { Faculty } from '../layout'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <Faculty>
        <Outlet/>   
    </Faculty>
  )
}

