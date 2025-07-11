import { NavBar, SideBar } from '@/components';
import React from 'react';
import { Outlet,  useFormAction,  useNavigate } from 'react-router-dom';
import { AdminTabList } from './utils';
import useGlobalStore from '@/store/global/globalStore';
import useAdminStore from '@/store/admin/admin';

const ADMIN_TABS = {
  REGULATION: "0",
  STUDENTS: "1",
  FACULTY: "2"
};

export const Admin = () => {
  const navigate = useNavigate();
  const activeTab = useAdminStore((s) => s.currentNavbar);
  const changeRegulation = useAdminStore((s) => s.changeRegulation);
  const token = useGlobalStore(state => state.token);

  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    else if (token) {
      navigate("regulation");
    }

  }, []);

  const navigateToTab = (tabId) => {
    switch (tabId) {
      case ADMIN_TABS.REGULATION:
        navigate("regulation");
        break;
      case ADMIN_TABS.STUDENTS:
        navigate("studentList");
        break;
      case ADMIN_TABS.FACULTY:
        navigate("facultyList");
        break;
      default:
        navigate("regulation");
    }
  };

  const handleTabChange = (newTab) => {
    changeRegulation("currentNavbar", newTab);
    changeRegulation("createCourseTab", false);
    navigateToTab(newTab);
  };


  return (
    <div className="flex bg-custom-850 h-screen w-full">
      <SideBar
        role="Admin"
        tabList={AdminTabList}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />
      <div className="w-full h-full flex flex-col">
        <NavBar sub="Admin" />
        <Outlet />
      </div>
    </div>
  );
};
