import { DownArrow, SearchIcon } from '@/assets'
import { InputField, MessageCard } from '@/components'
import React from 'react';

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
  const [active, setActive] = React.useState(0);
  return (
    <div className='w-full h-full py-5 overflow-hidden'>
      <div className='flex items-center px-5 gap-2.5'>
        <span className='font-semibold text-xl leading-5'>
          Messages
        </span>
        <DownArrow />
        <span className='w-[29px] h-[22px] bg-custom-950 rounded-full flex justify-center items-center font-semibold text-xs leading-7'>
          10
        </span>
      </div>
      <div className='px-5'>
        <InputField
        size="lg"
        startContent={<SearchIcon />}
        placeholder="Search messages"
        classname={"w-[300px] mt-[22px]"}
      />
      </div>

      <div className='mt-8 h-[80%] overflow-y-scroll scrollbar-hide flex flex-col gap-3.5 px-5'>
        {messageList.map((list, index) => (
          <MessageCard
            key={index}
            name={list.name}
            role={list.role}
            delay={list.delay}
            active={index === active}
            handleClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  )
}

