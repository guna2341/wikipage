import { NavBar, SideBar } from '@/components'
import { TabList } from './utils'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useCoursePlanStore from '@/store/faculty/coursePlan'
import { CourseMaterial } from './pages/courseMaterial'
import { CoursePlan } from './pages/coursePlan'
import { Comment } from './pages/comment'
import useCourseMaterialStore from '@/store/faculty/courseMaterial'

export const Faculty = () => {
  const navigate = useNavigate();
  const activeTab = useCoursePlanStore(e => e.currentNavbar);
  const changeCoursePlan = useCoursePlanStore(e => e.changeCoursePlan);
  const changeCourseMaterial = useCourseMaterialStore(e => e.changeCourseMaterial);

  React.useEffect(() => {
    navigate('/faculty/courseplan');
  }, []);
  
  function navigateRoute(tab) {
      switch(tab) {
        case "0":
          navigate("/faculty/courseplan");
          break;
        case "1":
          changeCourseMaterial("createCourseTab",0);
          navigate("/faculty/coursematerial");
          break;
        case "2":
          navigate("/faculty/comment");
          break;
        default:
          navigate("/faculty"); 
      }
  }

  function setActiveTab(newTab) {
      changeCoursePlan("currentNavbar",newTab);
      navigateRoute(newTab);
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
        <Outlet/>
      </div>
    </div>
  )
}

