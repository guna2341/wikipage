import { MessageBox, MessageInput, MessageList, MessageNavbar } from '@/components'
import { toast } from '@/components/toast/addToast';
import useGlobalStore from '@/store/global/globalStore';
import useStudentRegulationStore from '@/store/student';
import { useEffect, useState } from 'react'

export const StudentComment = () => {
  const [message, setMessage] = useState([]);
  const getMessages = useGlobalStore(e => e.getMessages);
  const role = useGlobalStore(e => e.role);
  const changeGlobalStore = useGlobalStore(e => e.changeGlobalStore);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [Navloading, setNavLoading] = useState(false);
  const getComments = useStudentRegulationStore(e => e.getComments);

  async function getData(sender_id, receiver_id) {
    console.log(receiver_id)
    setLoading(true);
    const response = await getMessages(sender_id, receiver_id);
    setLoading(false);
    if (!response?.state) {
      toast("Error", response?.message, "danger");
    }
    setMessage(response?.messages || []);
    changeGlobalStore("messageLength", response?.messages?.length || 0);
  }

  useEffect(() => {
    getData("7376231CS162", "f001");
  }, []);

  useEffect(() => {
    async function getData() {
      setNavLoading(true);
      const response = await getComments();
      setNavLoading(false);
      if (!response?.state) {
        toast("Error", response?.message, "danger");
      } else {
        setData(response?.data || []);
      }
    }
    getData();
  }, []);

  return (
    <div className='py-6 px-3.5 h-full w-full overflow-hidden'>
      <div className='flex bg-white h-full w-full border border-custom-100 rounded-2xl'>
        {/* Left Panel */}
        <div className='h-full border-r border-custom-100'>
          <MessageList
            data={data}
            loading={Navloading}
            handleClick={e => getData("7376231CS162", e?.id)}
          />
        </div>

        {/* Chat Section */}
        <div className='flex flex-col w-full'>
          <div className='px-5 pt-3 h-full max-h-[89px] w-full border-b border-custom-100'>
            <MessageNavbar status />
          </div>

          {/* Messages */}
          <div className='p-7 flex flex-col gap-8 overflow-y-scroll scrollbar-hide'>
            {loading ? (
              Array(6)
                .fill("")
                .map((_, index) => (
                  <MessageBox
                    key={index}
                    loading={true}
                    type={index % 2 === 0 ? "incoming" : "outgoing"}
                  />
                ))
            ) : message.length === 0 ? (
              // 👇 Placeholder when no messages
              <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center py-20">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7486/7486803.png"
                  alt="No messages"
                  className="w-24 h-24 mb-4 opacity-70"
                />
                <p className="text-lg font-medium">No messages yet</p>
                <p className="text-sm text-gray-400">Start the conversation below 👇</p>
              </div>
            ) : (
              message.map(item => (
                <MessageBox
                  key={item?.id}
                  msg={item?.content}
                  type={item?.sender_id == "7376231CS162" && "incoming"}
                  icon={
                    item?.sender_id == "7376231CS162"
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkZUtzfzfx1Q742HyOIfrdYbJuUbijcha_A&s"
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3r3Yx8fWkXdcBVm7KT88MUanFUF_XF4jqRQ&s"
                  }
                />
              ))
            )}
          </div>

          {/* Message Input */}
          <div className='pl-28 pr-32 py-4 mt-auto'>
            <MessageInput handleEnter={() => console.log("click")} />
          </div>
        </div>
      </div>
    </div>
  );
};
