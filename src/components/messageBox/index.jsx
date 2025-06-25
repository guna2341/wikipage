import { img } from '@/assets'
import { AvatarComponent } from '@/components';

export const MessageBox = ({
    icon = img,
    msg = "answer is a,b,e,f,g,h this is correct.",
    type
}) => {
    if (type == "incoming") {
        return (
            <div className='flex gap-4'>
                <AvatarComponent src={icon} radius="sm" size="lg" className="w-12 h-12" />
                <div className='bg-custom-900 p-2 font-normal text-sm leading-7 rounded-2xl'>
                    {msg}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='flex gap-4 justify-end'>
                <div className='bg-custom-900 p-2 font-normal text-sm leading-7 rounded-2xl'>
                    {msg}
                </div>
                <AvatarComponent src={icon} radius="sm" size="lg" className="w-12 h-12" />
            </div>
        )
    }
}

