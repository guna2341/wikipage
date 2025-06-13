import React from 'react'
import { NavBar, SideBar, InputField, MessageCard, MessageNavbar, MessageBox, MessageList } from "@/components";
import { SearchIcon } from '@/assets';
import { TabItem } from '@/components/tabItem';
const Test = () => {
    const sampleData = [
        {
            user: "faculty",
            msg: "sir, 6 question Based on the social media network described, analyze the following statements and predict the five correct ones.",
        },
        {
            user: "student",
            msg: "answer is a,b,e,f,g,h this is correct.",
        }
    ];
  return (
      <div className='p-12 flex flex-col gap-5'>
          <TabItem/>
          <SideBar />
          <NavBar />
          <div className='text-center'>
              <InputField
                  size="lg"
                  startContent={<SearchIcon />}
                  placeholder="Search messages"
              />
          </div>
          <MessageCard />
          <MessageNavbar />
          {sampleData.map((item,index) => (
              <MessageBox
                  key={index}
                  index={index}
                  msg={item.msg}
            />
          ))}
          <MessageList/>
      </div>
  )
}

export default Test