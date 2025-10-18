import { Image } from '@heroui/image'
import { logo, Logout } from '@/assets';
import { ButtonComponent, TabItem } from '@components';
import { useNavigate } from 'react-router-dom';
import useGlobalStore from '@/store/global/globalStore';

export const SideBar = ({
    role = "Faculty",
    tabList,
    activeTab,
    customTab,
    setActiveTab
    
}) => {

    const nav = useNavigate();
    const logout = useGlobalStore(e => e.logout);

    function handleLogout() {
        logout();
        nav('/login');
    }
    
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
                    customTab={customTab}
                    tabList={tabList}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
            <ButtonComponent
                className="w-full h-full rounded max-h-[50px] bg-custom-700 font-semibold font-base text-white justify-normal"
                startContent={<Logout />}
                onClick={handleLogout}
            >
                Logout
            </ButtonComponent>
        </div>
    )
}

