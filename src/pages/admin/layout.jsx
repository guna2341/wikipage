import { NavBar, SideBar } from '@/components'
import useAdminRegulationStore from '@/store/admin/regulation';
import useGlobalStore from '@/store/global/globalStore';
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { AdminTabList } from './utils';

export const Admin = () => {

   const role = useGlobalStore(e => e.role);
  const activeTab = useAdminRegulationStore(e => e.currentNavbar);
  const changeAdminRegulation = useAdminRegulationStore(e => e.changeRegulation);
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (role === "admin" ) {
  //   navigate('regulation');
  //   }
  //   else {
  //     navigate("/login");
  //   }
  // }, []);

  function navigateRoute(tab) {
    switch(tab) {
      case "0":
        navigate("regulation");
        break;
      case "1":
        navigate("studentList");
        break;
      case "2":
        navigate("facultyList");
        break;
      default:
        navigate("admin");
        break;
    }
  }

   function setActiveTab(newTab) {
      changeAdminRegulation("currentNavbar",newTab);
      navigateRoute(newTab);
  }

  return (
     <div className='flex bg-custom-850 h-screen w-full'>
             <SideBar
               tabList={AdminTabList}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
             />
             <div className='w-full h-full flex flex-col '>
               <NavBar
               sub='Admin'
               />
               <Outlet/>
             </div>
           </div>
  )
}

