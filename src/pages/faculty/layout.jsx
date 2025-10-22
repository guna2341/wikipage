import { NavBar, SideBar } from '@/components';
import { TabList } from './utils';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useCoursePlanStore from '@/store/faculty/coursePlan';
import useCourseMaterialStore from '@/store/faculty/courseMaterial';


export const Faculty = () => {
  const navigate = useNavigate();
  const activeTab = useCoursePlanStore((s) => s.currentNavbar);
  const changeCoursePlan = useCoursePlanStore((s) => s.changeCoursePlan);
  const { getCourse } = useCourseMaterialStore();

  useEffect(() => {
    navigate('courseplan');
    async function getCourseData() {
      await getCourse();
    }
    getCourseData();
  }, []);

  const handleTabChange = (newTab) => {
    changeCoursePlan("currentNavbar", newTab);
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
