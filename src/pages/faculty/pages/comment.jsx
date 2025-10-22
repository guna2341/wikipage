import { MessageBox, MessageInput, MessageList, MessageNavbar } from "@/components";
import { toast } from "@/components/toast/addToast";
import { facultyCommentsStore } from "@/store/faculty/comments";
import useGlobalStore from "@/store/global/globalStore";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export const FacultyComment = () => {
  const getUsers = facultyCommentsStore((e) => e.getUsers);
  const getMessages = useGlobalStore((e) => e.getMessages);
  const changeGlobalStore = useGlobalStore((e) => e.changeGlobalStore);

  const [messageList, setMessageList] = useState([]);
  const [chatCache, setChatCache] = useState({});
  const [receiver_id, setReceiver_id] = useState("");
  const [loading, setLoading] = useState(false);
  const [navLoading, setNavLoading] = useState(false);
  const [currentMessages, setCurrentMessages] = useState([]); // ✅ proper state use

  const scrollRef = useRef(null);
  const profile = useGlobalStore((e) => e.profile);
  const sender_id = profile?.id;

  // Scroll to bottom when chat changes
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages]);

  // 🔌 Setup socket listeners
  useEffect(() => {
    if (!sender_id) return;

    socket.emit("join_room", sender_id);

    socket.on("receive_message", (data, user) => {
      console.log("Received message:", data, user);
      if (currentMessages.length == 0) {
        getData(sender_id,user?.[0]?.roll_no);
      };
      // Add new user to left panel if not already there
      if (user?.[0]) {
        setMessageList((prev) => {
          const exists = prev.find((u) => u.roll_no === user[0].roll_no);
          return exists ? prev : [...prev, user[0]];
        });
      }

      const targetId =
        data.sender_id === sender_id ? data.receiver_id : data.sender_id;

      setChatCache((prev) => {
        const updated = {
          ...prev,
          [targetId]: [...(prev[targetId] || []), data],
        };

        if (targetId === receiver_id) {
          setCurrentMessages(updated[targetId]);
        }

        return updated;
      });
    });

    return () => socket.off("receive_message");
  }, [sender_id, receiver_id]);

  // ✉️ Send message
  const sendMessage = (input) => {
    if (!input.trim() || !receiver_id) return;
    const newMessage = { sender_id, receiver_id, content: input };

    socket.emit("send_message", newMessage);

    setChatCache((prev) => {
      const updated = {
        ...prev,
        [receiver_id]: [...(prev[receiver_id] || []), newMessage],
      };
      setCurrentMessages(updated[receiver_id]); // ✅ reflect immediately
      return updated;
    });
  };

  // 🔍 Fetch messages (from cache or API)
  const getData = async (sender_id, receiver_id) => {
    if (!receiver_id) return;

    // If cached, use that
    if (chatCache[receiver_id]) {
      setReceiver_id(receiver_id);
      setCurrentMessages(chatCache[receiver_id]); // ✅ update chat view
      return;
    }

    setLoading(true);
    const response = await getMessages(sender_id, receiver_id);
    setLoading(false);

    if (!response?.state) {
      toast("Error", response?.message, "danger");
      return;
    }

    const messages = response.messages || [];

    setChatCache((prev) => ({
      ...prev,
      [receiver_id]: messages,
    }));

    setReceiver_id(receiver_id);
    setCurrentMessages(messages); // ✅ store and render
    changeGlobalStore("messageLength", messages.length);
  };

  // Load messages when receiver_id changes
  useEffect(() => {
    if (receiver_id && sender_id) {
      getData(sender_id, receiver_id);
    }
  }, [receiver_id]);

  // Load user list on mount
  useEffect(() => {
    async function fetchUsers() {
      setNavLoading(true);
      const response = await getUsers("f001");
      setNavLoading(false);

      if (!response?.state) {
        toast("Error", response?.message, "danger");
        return;
      }

      const users = response?.data || [];
      setMessageList(users);

      if (users[0]) {
        const firstUserId = users[0].roll_no;
        setReceiver_id(firstUserId);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="py-6 px-3.5 h-full w-full overflow-hidden">
      <div className="flex bg-white h-full w-full border border-custom-100 rounded-2xl">
        {/* LEFT PANEL */}
        <div className="h-full border-r border-custom-100">
          <MessageList
            data={messageList}
            loading={navLoading}
            handleClick={(user) => getData(sender_id, user.roll_no)}
          />
        </div>

        {/* RIGHT CHAT PANEL */}
        <div className="flex flex-col w-full">
          <div className="px-5 pt-3 h-full max-h-[89px] w-full border-b border-custom-100">
            <MessageNavbar status />
          </div>

          <div className="p-7 flex flex-col gap-8 overflow-y-scroll scrollbar-hide">
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
            ) : currentMessages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center py-20">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7486/7486803.png"
                  alt="No messages"
                  className="w-24 h-24 mb-4 opacity-70"
                />
                <p className="text-lg font-medium">No messages yet</p>
                <p className="text-sm text-gray-400">
                  Start the conversation below 👇
                </p>
              </div>
            ) : (
              currentMessages.map((item, index) => (
                <MessageBox
                  key={index}
                  msg={item?.content}
                  type={item?.sender_id !== sender_id && "incoming"}
                  icon={
                    item?.sender_id === "7376231CS162"
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkZUtzfzfx1Q742HyOIfrdYbJuUbijcha_A&s"
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3r3Yx8fWkXdcBVm7KT88MUanFUF_XF4jqRQ&s"
                  }
                />
              ))
            )}
            <div ref={scrollRef}></div>
          </div>

          {/* INPUT FIELD */}
          <div className="pl-28 pr-32 py-4 mt-auto">
            <MessageInput handleClick={(e) => sendMessage(e)} />
          </div>
        </div>
      </div>
    </div>
  );
};
