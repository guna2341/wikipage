import useGlobalStore from "@/store/global/globalStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
  const allowedRoles = {
    admin: ["admin", "faculty", "student"],
    faculty: ["faculty", "student"],
    student:["student"]
  };
  const token = useGlobalStore(state => state.token);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const role = useGlobalStore(state => state.role); 
  
  if (!token) {
    return <Navigate to="/login" />;
  }
else if (!allowedRoles[role].includes(path)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
