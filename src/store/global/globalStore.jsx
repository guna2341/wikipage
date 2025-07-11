import { authService } from '@/api';
import secureLocalStorage from 'react-secure-storage';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useGlobalStore = create(
  immer((set) => ({
    name: JSON.parse(secureLocalStorage.getItem("name")) || "",
    role: JSON.parse(secureLocalStorage.getItem("role")) || "",
    changeGlobalStore: (key, value) => {
      set({ [key]: value });
    },
    token: JSON.parse(secureLocalStorage.getItem("token")) || "",

    handleLogin: async (credentials) => {
      try {
        let response = await authService.login(credentials);
        set({
          token: response.data.token,
          role: response.data.user.role,
          name: response.data.user.name
        });
        secureLocalStorage.setItem("name", JSON.stringify(response.data.user.name));
        secureLocalStorage.setItem("token", JSON.stringify(response.data.token));
        secureLocalStorage.setItem("role", JSON.stringify(response.data.user.role));
        return { status: true, message: "User logged in Succuessfully", role: response.data.user.role };
      }
      catch (err) {
        return { status: false, message: err?.response?.data?.message };
      }
    },

    handleLogout: (navigate) => {
      secureLocalStorage.clear();
      set({ role: "", token: "" });
      navigate("/login");
    }

  })),


);

export default useGlobalStore;
