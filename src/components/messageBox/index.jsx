import { AvatarComponent } from '@/components';

export const MessageBox = ({
    img = "https://tse3.mm.bing.net/th/id/OIP.QZIRZKUSWt1HBifjDRKGzAHaFj?pid=Api&P=0&h=180",
    msg = "answer is a,b,e,f,g,h this is correct.",
    type
}) => {
    if (type == "incoming") {
        return (
            <div className='flex gap-4'>
                <AvatarComponent src={img} radius="sm" size="lg" className="w-12 h-12" />
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
                <AvatarComponent src={img} radius="sm" size="lg" className="w-12 h-12" />
            </div>
        )
    }
}

