import { AvatarComponent } from '@components';
import { img } from '@/assets';

export const MessageCard = ({
    index,
    name = "Elmer Laverty",
    role = "Student",
    delay = "12m"
}) => {
  return (
      <div className='flex justify-between cursor-pointer' key={index}>
          <div className='flex gap-3.5'>
          <AvatarComponent src={img} radius="sm" size="lg" className="w-12 h-12" />
              <div className='flex flex-col gap-0'>
                  <span className='font-semibold text-sm leading-6'>
                      {name}
                  </span>
                  <span className='font-medium text-xs leading-6 text-custom-300'>
                      {role}
                  </span>
              </div>
          </div>
          <div className='font-medium text-sm leading-6 text-custom-300'>
          {delay}
          </div>
    </div>
  )
}

