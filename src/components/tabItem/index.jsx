import React from 'react'
import { cn } from '../cn'
import { Tab, Tabs } from '@heroui/tabs'
import { Edit } from '@/assets'

export const TabItem = ({
    activeTab,
    setActiveTab,
    tabList = [],
}) => {
    return (
        <Tabs
            isVertical
            selectedKey={activeTab}
            onSelectionChange={setActiveTab}
            classNames={{
                base: "w-full border-0",
                tab: "w-full p-0 border-0 justify-start outline-0 z-0",
                tabList: "w-full p-0 border-0 gap-0 bg-white outline-0",
                tabContent: "p-4 w-full border-0 outline-0 z-0",
                cursor: "bg-custom-500 border-0 outline-0 z-0 shadow-none",
            }}
        >
            {tabList.map(tab => (
                <Tab
                    key={tab?.id}
                    title={
                        <div className='flex justify-between items-center'>
                        <div className={cn(
                            'w-full flex items-center gap-4 font-normal text-base leading-6 text-custom-400',
                            {
                                "font-semibold text-custom-600": activeTab == tab?.id
                            }
                        )}>
                            <tab.img />
                            {tab?.tab}
                            </div>
                            {tab.comments &&
                                <div className={cn('w-6 h-6 rounded flex justify-center font-normal items-center text-custom-400', {
                                    'bg-custom-600 text-white':activeTab==tab?.id
                                })}>
                                    {tab?.comments}
                                </div>
                            }
                        </div>
                    }
                    itemKey={tab?.id}
                    className="h-18"
                >
                </Tab>
            ))}
        </Tabs>
    )
}
