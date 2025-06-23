import { Image } from '@heroui/image'
import React from 'react'
import { Comment, Edit, logo, User, Logout } from '@/assets';
import { ButtonComponent } from '@components';
import { TabItem } from '../tabItem';

export const SideBar = ({
    role = "Faculty",
    tabList,
    activeTab,
    customTab,
    setActiveTab
}) => {
    return (
        <div className='w-full h-screen max-w-[340px] bg-white px-6 py-7 border border-custom-100 flex flex-col justify-between'>
            <div className='flex flex-col gap-12'>
                <div className='flex gap-4 items-center'>
                    <Image
                        src={logo}
                    />
                    <span className='text-custom-400 font-semibold text-2xl leading-6'>
                        {role}
                    </span>
                </div>
                <TabItem
                    customTab = {customTab}
                    tabList={tabList}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
        <ButtonComponent
                className="w-full h-full rounded max-h-[50px] bg-custom-700 font-semibold font-base text-white justify-normal"
                startContent={<Logout />}
            >
                Logout
         </ButtonComponent>
        </div>
    )
}

