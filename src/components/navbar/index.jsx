import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar';
import { AvatarComponent } from '@/components';
import { img } from '@/assets';

export const NavBar = ({
  name = "MaheshKumar R",
  sub = "Course coordinator"
}) => {
  return (
    <Navbar className="static w-full justify-end border border-custom-100 border-l-0 bg-white pb-7" classNames={{
      wrapper: "!p-0",
    }}>

      <NavbarContent justify="end" className='w-full pr-9 flex'>
        <NavbarItem justify="end" className='flex items-center gap-3.5 pt-7'>
          <div className='flex flex-col gap-2'>
            <span className='font-semibold text-xl leading-5'>{name}</span>
            <span className='font-medium text-xs leading-6 text-custom-300 pl-[1px]'>{sub}</span>
          </div>
          <AvatarComponent
            className="w-14 h-14 items-center"
            src={img} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

