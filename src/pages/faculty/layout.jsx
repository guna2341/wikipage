import { NavBar, SideBar } from '@/components';
import { TabList } from './utils';
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useCoursePlanStore from '@/store/faculty/coursePlan';
import useCourseMaterialStore from '@/store/faculty/courseMaterial';

const FACULTY_TABS = {
  COURSE_PLAN: "0",
  COURSE_MATERIAL: "1",
  COMMENT: "2"
};

export const Faculty = () => {
  const navigate = useNavigate();
  const activeTab = useCoursePlanStore((s) => s.currentNavbar);
  const changeCoursePlan = useCoursePlanStore((s) => s.changeCoursePlan);
  const changeCourseMaterial = useCourseMaterialStore((s) => s.changeCourseMaterial);

  useEffect(() => {
      navigate('/faculty/courseplan');
  }, [navigate]);

  const navigateToTab = (tabId) => {
    switch (tabId) {
      case FACULTY_TABS.COURSE_PLAN:
        navigate("/faculty/courseplan");
        break;
      case FACULTY_TABS.COURSE_MATERIAL:
        changeCourseMaterial("createCourseTab", 1);
        navigate("/faculty/coursematerial");
        break;
      case FACULTY_TABS.COMMENT:
        navigate("/faculty/comment");
        break;
      default:
        navigate("/faculty");
    }
  };

  const handleTabChange = (newTab) => {
    changeCoursePlan("currentNavbar", newTab);
    navigateToTab(newTab);
  };

  return (
    <div className="flex bg-custom-850 h-screen w-full">
      <SideBar
        customTab
        tabList={TabList}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />
      <div className="w-full h-full flex flex-col">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};
