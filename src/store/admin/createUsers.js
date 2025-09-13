import axios from "axios";
import { create } from "zustand";



export const useCreateUsers = create((set, get) => ({
  loading: {
    faculty: false,
    student: false,
  },

  addFaculty: async (data) => {
    try {
      const invalidItem = data?.find((item) => {
        return (
          !item.name || !item.email || !item.semester || !item.dept
        );
      });

      if (invalidItem) {
        let missingFields = [];
        if (!invalidItem.id) missingFields.push("id");
        if (!invalidItem.name) missingFields.push("name");
        if (!invalidItem.email) missingFields.push("email");
        if (!invalidItem.semester) missingFields.push("semester");
        if (!invalidItem.dept) missingFields.push("dept");

        return {
          state: false,
          message: `Missing fields: ${missingFields.join(", ")}`,
        };
      }

      const response = await axios.post(
        "http://localhost:3000/wikipage/admin/addFaculty",
        data
      );
      return { state: true, message: response?.data?.message };
    } catch (err) {
      return { state: false, message: err?.response?.data?.message };
    }
  },

  addStudent: async (data, regulation) => {
    try {
      const invalidItem = data?.find((item) => {
        return (
          !item.name ||
          !item.email ||
          !item.semester ||
          !item.dept ||
          !item.roll_no ||
          !regulation
        );
      });

      if (invalidItem) {
        let missingFields = [];
        if (!invalidItem.name) missingFields.push("name");
        if (!invalidItem.email) missingFields.push("email");
        if (!invalidItem.semester) missingFields.push("semester");
        if (!invalidItem.dept) missingFields.push("dept");
        if (!invalidItem.roll_no) missingFields.push("roll_no");
        if (!regulation) missingFields.push("regulation");

        return {
          state: false,
          message: `Missing fields: ${missingFields.join(", ")}`,
        };
      }

      const response = await axios.post(
        "http://localhost:3000/wikipage/admin/addStudent",
        {
          data,
          regulation,
        }
      );
      return { state: true, message: response?.data?.message };
    } catch (err) {
      return { state: false, message: err?.response?.data?.message };
    }
  },
}));