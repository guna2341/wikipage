import { img } from '@/assets'
import { AvatarComponent } from '@/components';
import { Shimmer } from '../shimmer/shimmer';

export const MessageBox = ({
    icon = img,
    msg = "answer is a,b,e,f,g,h this is correct.",
    type,
    loading = false,
}) => {

    if (loading) {
        return (
            <div className={`flex gap-4 ${type === "outgoing" ? "justify-end" : ""}`}>
                {type === "incoming" && <Shimmer className="w-12 h-12 rounded-full" />}

                <div className='flex-1'>
                    <Shimmer className='h-10 w-full rounded-2xl' />
                </div>

                {type === "outgoing" && <Shimmer className="w-12 h-12 rounded-full" />}
            </div>
        )
    }

    if (type === "incoming") {
        return (
            <div className='flex items-center gap-4'>
                <AvatarComponent src={icon} radius="sm" size="lg" className="w-12 h-12 border" />
                <div className='bg-custom-900 p-2 py-1 font-normal text-sm rounded-[10px]'>
                    {msg}
                </div>
            </div>
        )
    } else {
        return (
            <div className='flex gap-4 items-center justify-end'>
                <div className='bg-custom-900 p-2 py-1 font-normal text-sm rounded-[10px]'>
                    {msg}
                </div>
                <AvatarComponent src={icon} radius="sm" size="lg" className="w-12 h-12 border" />
            </div>
        )
    }
}
