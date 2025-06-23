import { MessageBox, MessageInput, MessageList, MessageNavbar } from '@/components'

export const StudentComment = () => {
  return (
    <div className='py-6 px-3.5 h-full w-full overflow-hidden'>
      <div className='flex bg-white h-full w-full border border-custom-100 rounded-2xl'>
          <div className='h-full border-r border-custom-100'>
                  <MessageList />
              </div>
        <div className='flex flex-col w-full'>
          <div className='px-5 pt-3 h-full max-h-[89px] w-full border-b border-custom-100'>
                      <MessageNavbar status />
                </div>
             <div className='p-7 flex flex-col gap-8 overflow-y-scroll scrollbar-hide'>     
                <MessageBox />
                <MessageBox type='incoming' />
                <MessageBox />
                <MessageBox type='incoming' />
                <MessageBox />
                <MessageBox type='incoming' />
                <MessageBox />
                <MessageBox type='incoming' />
                <MessageBox />
                <MessageBox type='incoming' />
              </div>
             <div className='pl-28 pr-32 py-4'>
                    <MessageInput handleEnter={() => console.log("click")}/>
              </div>
        </div>
      </div>
    </div>
  )
}

