import axios from "axios";
import { create } from "zustand";


export const facultyCommentsStore = create((set, get) => ({ 
    chatUsers: [],

    getUsers: async (faculty_id) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/wikipage/faculty/facultyComments", {
                  faculty_id
              }
            );
            return {state:true, data:response?.data}
        }
        catch (err) {
            console.log(err);
            return {state:false, message:err?.response?.data?.message}
        }
    }
}));