import useGlobalStore from "@/store/global/globalStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = useGlobalStore(e => e.token);

  const role = useGlobalStore(e => e.role);

  const location = useLocation();
  const routes = {
    admin: ["admin", "faculty", "student"],
    faculty: ["faculty", "student"],
    student: ["student"],
  };
  const paths = location?.pathname?.split("/");
  const path = paths[1];
  if (!token) {
    return <Navigate to="/login" />;
  }

  else if (routes[role]?.includes?.(path)) {
    return <Outlet />;
  }

  else {
    return "not authorized";
  }
 
};
