import { NavBar, SideBar } from '@/components';
import useAdminRegulationStore from '@/store/admin/regulation';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AdminTabList } from './utils';

const ADMIN_TABS = {
  REGULATION: "0",
  STUDENTS: "1",
  FACULTY: "2"
};

export const Admin = () => {
  const navigate = useNavigate();
  const activeTab = useAdminRegulationStore((s) => s.currentNavbar);
  const changeRegulation = useAdminRegulationStore((s) => s.changeRegulation);

  useEffect(() => {
    navigate("regulation");
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
