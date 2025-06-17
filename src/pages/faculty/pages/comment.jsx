import { MsgChat } from '../components/msgChat'
import { MsgNavbar } from '../components/msgNavbar.jsx.jsx'
import { MsgList } from '../components/msgList'
import { MSgInput } from '../components/msgInput'

export const CommentPage = () => {
  return (
    <div className='py-6 px-3.5 h-full w-full overflow-hidden'>
      <div className='flex bg-white h-full w-full border border-custom-100 rounded-2xl'>
        <MsgList />
        <div className='flex flex-col w-full'>
          <MsgNavbar />
          <MsgChat />
          <MSgInput />
        </div>
      </div>
    </div>
  )
}

