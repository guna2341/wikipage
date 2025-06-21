import { NavBar, SideBar } from '@/components'
import { CommentPage } from './pages/comment'
import { TabList } from './utils'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CoursePlanEdit } from './pages/coursePlanEdit'
import { CreateCourse } from './pages/createCourse'
import { CoursePlan } from './pages/coursePlanOverview'
import useCoursePlanStore from '@/store/faculty/coursePlan'
import { CourseMaterial } from './pages/courseMaterial'

export const Faculty = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/faculty');
  }, []);
  
  const activeTab = useCoursePlanStore(e => e.currentNavbar);
  const changeCoursePlan = useCoursePlanStore(e => e.changeCoursePlan);

  function setActiveTab(newTab) {
      changeCoursePlan("currentNavbar",newTab);
  }
  
  return (
    <div className='flex bg-custom-850 h-screen w-full'>
      <SideBar
        tabList={TabList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className='w-full h-full flex flex-col '>
        <NavBar />
        {activeTab == "0" && <CoursePlanEdit/>}
        {activeTab == "1" && <CourseMaterial/>}
        {activeTab == "2" && <CommentPage />}
        {activeTab == "3" && "Profile"}
      </div>
    </div>
  )
}

