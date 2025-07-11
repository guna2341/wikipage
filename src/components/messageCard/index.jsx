import { AvatarComponent, cn } from '@components';

export const MessageCard = ({
    index,
    img = "https://tse3.mm.bing.net/th/id/OIP.QZIRZKUSWt1HBifjDRKGzAHaFj?pid=Api&P=0&h=180",
    name = "Elmer Laverty",
    role = "Student",
    delay = "12m",
    handleClick,
    active = false
}) => {
    return (
        <div className={cn('flex justify-between cursor-pointer p-2 rounded-md transition-all', {
            'bg-custom-950 text-custom-600': active,
            'bg-white': !active,
        })}
            key={index}
            onClick={handleClick}
        >
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
