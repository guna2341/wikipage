import { DownArrow, SearchIcon } from '@/assets'
import { InputField, MessageCard } from '@/components'

export const MessageList = ({
  messageList = [
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
    {
      name: "Elmar",
      role: "student",
      delay: "12m"
    },
  ]
}) => {
  return (
    <div className='w-full h-full px-5 py-5 overflow-hidden'>
      <div className='flex items-center gap-2.5'>
        <span className='font-semibold text-xl leading-5'>
          Messages
        </span>
        <DownArrow />
        <span className='w-[29px] h-[22px] bg-custom-950 rounded-full flex justify-center items-center font-semibold text-xs leading-7'>
          10
        </span>
      </div>
      <InputField
        size="lg"
        startContent={<SearchIcon />}
        placeholder="Search messages"
        classname={"w-[300px] mt-[22px]"}
      />
      <div className='mt-8 h-[80%] overflow-y-scroll scrollbar-hide flex flex-col gap-3.5'>
        {messageList.map((list, index) => (
          <MessageCard
            key={index}
            name={list.name}
            role={list.role}
            delay={list.delay}
          />
        ))}
      </div>
    </div>
  )
}

