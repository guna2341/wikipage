import { MessageBox, MessageInput, MessageList, MessageNavbar } from '@/components'
import { toast } from '@/components/toast/addToast';
import useGlobalStore from '@/store/global/globalStore';
import useStudentRegulationStore from '@/store/student';
import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';

const socket = io("http://localhost:3000", { transports: ["websocket"] });

export const StudentComment = () => {
  const [message, setMessage] = useState({}); // ✅ use object for per-user messages
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Navloading, setNavLoading] = useState(false);

  const getMessages = useGlobalStore(e => e.getMessages);
  const getComments = useStudentRegulationStore(e => e.getComments);
  const changeGlobalStore = useGlobalStore(e => e.changeGlobalStore);
  const profile = useGlobalStore(e => e.profile);

  const ref = useRef(null);
  const [receiver_id, setReceiver_id] = useState("");
  const sender_id = profile?.roll_no;

  

  // 🧩 Fetch old messages
  async function getData(sender_id, receiver_id) {
    if (message[receiver_id]) {
      return;
    }
    try {
      setLoading(true);
      const response = await getMessages(sender_id, receiver_id);
      setLoading(false);

      if (!response?.state) {
        toast("Error", response?.message, "danger");
      } else {
        // ✅ Store messages for this receiver
        setMessage(prev => ({
          ...prev,
          [receiver_id]: response?.messages || [],
        }));
        changeGlobalStore("messageLength", response?.messages?.length || 0);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  // 🧹 Auto-scroll to bottom on new message
  useEffect(() => {
    scrollToBottom();
  }, [message, receiver_id]);

  // 🔗 Join socket room + listen for messages
  useEffect(() => {
    if (!sender_id) return;
    socket.emit("join_room", sender_id);

    const handleReceive = (data) => {
      console.log("📩 New message received:", data);
      setMessage(prev => ({
        ...prev,
        [data.sender_id]: [...(prev[data.sender_id] || []), data],
      }));
    };

    socket.on("receive_message", handleReceive);
    return () => socket.off("receive_message", handleReceive);
  }, [sender_id]);

  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 📨 Send message handler
  const handleSend = (msg) => {
    if (!msg.trim() || !receiver_id) return;

    const msgData = {
      sender_id,
      receiver_id,
      content: msg,
      timestamp: new Date(),
    };

    socket.emit("send_message", msgData);

    // ✅ Add to local chat view
    setMessage(prev => ({
      ...prev,
      [receiver_id]: [...(prev[receiver_id] || []), msgData],
    }));
  };

  // 🧭 Load sidebar data
  useEffect(() => {
    async function fetchComments() {
      setNavLoading(true);
      const response = await getComments();
      setNavLoading(false);

      if (!response?.state) {
        toast("Error", response?.message, "danger");
      } else {
        const list = response?.data || [];
        setData(list);
        if (list.length > 0) {
          setReceiver_id(list[0].id);
          getData(sender_id, list[0].id);
        }
      }
    }
    fetchComments();
  }, []);

  return (
    <div className="py-6 px-3.5 h-full w-full overflow-hidden">
      <div className="flex bg-white h-full w-full border border-custom-100 rounded-2xl">
        {/* Left Panel */}
        <div className="h-full border-r border-custom-100">
          <MessageList
            data={data}
            loading={Navloading}
            handleClick={(e) => {
              setReceiver_id(e?.id);
              getData(sender_id, e?.id);
            }}
          />
        </div>

        {/* Chat Section */}
        <div className="flex flex-col w-full">
          <div className="px-5 pt-3 h-full max-h-[89px] w-full border-b border-custom-100">
            <MessageNavbar status />
          </div>

          {/* Messages */}
          <div className="p-7 flex flex-col gap-8 overflow-y-scroll scrollbar-hide">
            {loading || Navloading ? (
              Array(6).fill("").map((_, index) => (
                <MessageBox
                  key={index}
                  loading={true}
                  type={index % 2 === 0 ? "incoming" : "outgoing"}
                />
              ))
            ) : !message?.[receiver_id] || message[receiver_id].length === 0 ? (
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
              message[receiver_id].map((item, i) => (
                <MessageBox
                  key={i}
                  msg={item.content}
                  type={item.sender_id === sender_id ? "outgoing" : "incoming"}
                  icon={
                    item.sender_id === sender_id
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkZUtzfzfx1Q742HyOIfrdYbJuUbijcha_A&s"
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3r3Yx8fWkXdcBVm7KT88MUanFUF_XF4jqRQ&s"
                  }
                />
              ))
            )}
            <div ref={ref}></div>
          </div>

          {/* Message Input */}
          <div className="pl-28 pr-32 py-4 mt-auto">
            <MessageInput handleClick={handleSend} />
          </div>
        </div>
      </div>
    </div>
  );
};
