import { NavBar, SideBar } from '@/components'
import React from 'react'
import { StudentTabList } from './utils'
import { Outlet, useNavigate } from 'react-router-dom'
import useStudentRegulationStore from '@/store/student'
import useGlobalStore from '@/store/global/globalStore'

export const Student = () => {

  const role = useGlobalStore(e => e.role);
  const activeTab = useStudentRegulationStore(e => e.currentNavbar);
  const changeStudentRegulation = useStudentRegulationStore(e => e.changeStudentRegulation);
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('regulation');
  }, []);

  function navigateRoute(tab) {
    switch(tab) {
      case "0":
        navigate("regulation");
        break;
      case "1":
        navigate("comments");
        break;
      default:
        navigate("student");
        break;
    }
  }

   function setActiveTab(newTab) {
      changeStudentRegulation("currentNavbar",newTab);
      navigateRoute(newTab);
  }

  return (
   <div className='flex bg-custom-850 h-screen w-full'>
         <SideBar
           tabList={StudentTabList}
           activeTab={activeTab}
           setActiveTab={setActiveTab}
         />
         <div className='w-full h-full flex flex-col '>
           <NavBar
           sub='Student'
           />
           <Outlet/>
         </div>
       </div>
  )
}

