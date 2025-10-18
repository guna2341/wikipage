import axios from 'axios';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useGlobalStore = create(
  immer((set) => ({
    
    role: localStorage.getItem("role"),
    token:localStorage.getItem("token"),
    messageLength: 0,
    
    changeGlobalStore: (key, value) => { 
      set({[key]:value});
    },

    profile: JSON.parse(localStorage.getItem("profile")),

    handleAuth: async (email,password) => {
      try {
        const response = await axios.post("http://localhost:3000/wikipage/auth/login",
          {email,password}
        );
        set({ role: response?.data?.user?.role, profile: response?.data?.user, token: response?.data?.token });
        localStorage.setItem("role", response?.data?.user?.role);
        localStorage.setItem("profile", JSON.stringify(response?.data?.user));
        localStorage.setItem("token", response?.data?.token);
        return { state: true, role: response?.data?.user?.role };
      }
      catch (err) {
        console.log(err);
        return { state: false, message: err?.response?.data?.message };
      }
    },

    getMessages: async (sender_id, receiver_id) => {
      try {
        const response = await axios.post(`http://localhost:3000/wikipage/common/comments`, { sender_id,receiver_id });
        return { state: true, messages: response?.data?.data };
      }
      catch (error) { 
        console.log(error);
        return { state: false, message: error?.response?.data?.message };
      }
    },

    changeGlobalStore:(key,value) => {
    set({[key]:value});
    },
    
    logout: () => {
      localStorage.removeItem("token");
      localStorage.clear();
      set({ role: null, profile: null, token: null });
      return { state: true };
    },

  }))
);

export default useGlobalStore;
