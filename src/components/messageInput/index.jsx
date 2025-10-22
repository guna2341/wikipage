import { Pin, SendIcon } from '@/assets'
import { TextField } from '@/components';
import { useState } from 'react';

export const MessageInput = ({ handleClick }) => {
  const [value, setValue] = useState("");

  const sendMessage = () => {
    if (!value.trim()) return; // prevent sending empty messages
    handleClick(value);        // send message
    setValue("");              // clear input immediately
  };

  return (
    <div className="w-full flex items-center gap-6 justify-center">
      <Pin />
      <div className="relative w-full">
        <TextField
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              sendMessage(); // handle Enter key
            }
          }}
          minRows={1}
          placeholder="Type a message"
        />
        <span
          className="absolute right-2 bottom-2 cursor-pointer"
          onClick={sendMessage}
        >
          <SendIcon />
        </span>
      </div>
    </div>
  );
};


