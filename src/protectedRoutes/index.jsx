import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = 'true';
  if (!token) {
    return <Navigate to="/login"/>;
  }

  return <Outlet />;
};
