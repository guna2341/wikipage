import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar'
import { AvatarComponent, cn } from '@/components';
import { img } from '@/assets';

export const MessageNavbar = ({
    name = "Florencio Dorrance",
    status = false
}) => {
    return (
        <Navbar className='justify-start'
            classNames={{
                wrapper: "!p-0",
            }}
        >
            <NavbarContent justify='start'>
                <NavbarItem>
                    <AvatarComponent src={img} radius="sm" size="lg" className="w-12 h-12" />
                </NavbarItem>
                <NavbarItem>
                    <div className='font-semibold text-xl leading-5'>
                        {name}
                    </div>
                    <div className='flex items-center gap-2 font-semibold text-xs leading-6'>
                        <span className={cn('w-2.5 h-2.5 bg-custom-1001 rounded-full mt-[1.5px]', {
                            "bg-custom-400": !status
                        })}></span>
                        {status ? "Online" : "Offline"}
                    </div>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

