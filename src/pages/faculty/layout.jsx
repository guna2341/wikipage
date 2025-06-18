import { NavBar, SideBar } from '@/components'
import { CommentPage } from './pages/comment'
import { TabList } from './utils'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CoursePlanHome } from './pages/coursePlanHome'
import { CoursePlanEdit } from './pages/coursePlanEdit'
import { CreateCourse } from './pages/createCourse'

export const Faculty = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/faculty');
  }, []);
  const [activeTab, setActiveTab] = React.useState("0");
  return (
    <div className='flex bg-custom-850 h-screen w-full'>
      <SideBar
        tabList={TabList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className='w-full h-full flex flex-col'>
        <NavBar />
        {activeTab == "0" && <CreateCourse/>}
        {activeTab == "1" && "Course Material"}
        {activeTab == "2" && <CommentPage />}
        {activeTab == "3" && "Profile"}
      </div>
    </div>
  )
}

