import { cn } from '@/components'
import { Tab, Tabs } from '@heroui/tabs'
import { SideBarAccordian } from '../sidebarAccordian'
import { useNavigate } from 'react-router-dom'

export const TabItem = ({
    customTab,
    activeTab,
    setActiveTab,
    tabList = [],
}) => {
    const nav = useNavigate();
    return (
        <Tabs
            isVertical
            selectedKey={activeTab}
            onSelectionChange={setActiveTab}
            classNames={{
                base: "w-full border-0 justify-start",
                tab: "w-full p-0 border-0 justify-start outline-0 my-2 z-0 data-[focus-visible=true]:outline-0",
                tabList: "w-full p-0 border-0 gap-0 bg-white outline-0",
                tabContent: "w-full border-0 outline-0 z-0",
                cursor: "bg-custom-500 border-0 outline-0 z-0 shadow-none",
            }}
        >
            {tabList.map(tab => (                   
                <Tab
                    key={tab?.id}
                        title={
                            tab?.id == 0 ?
                                <div className={"!p-0"}>
                                    <div className={cn(
                                        'w-full flex items-center p-0 font-normal text-base leading-6 text-custom-400',
                                        {
                                            "font-semibold text-custom-600": activeTab == tab?.id
                                        }
                                    )}>
                                        <SideBarAccordian customTab={customTab} handleNav={e => nav(`courseplan/${e}`)} />
                                        </div>
                                </div>
                            :
                        <div className={cn('flex items-center p-4')} onClick={() => nav(tab?.link)}  >
                            <div className={cn(
                                'w-full flex items-center gap-4 font-normal text-base leading-6 text-custom-400',
                                {
                                    "font-semibold text-custom-600": activeTab == tab?.id
                                }
                            )}>
                                {tab.img &&
                                    <span>
                                        <tab.img />
                                    </span>
                                }
                                <span className='w-full text-left' onClick={tab.onClick}>
                                    {tab?.tab}
                                </span>
                            </div>
                            {tab.comments &&
                                <div className={cn('w-6 h-6 rounded flex justify-center font-normal items-center text-custom-400', {
                                    'bg-custom-600 text-white': activeTab == tab?.id
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
