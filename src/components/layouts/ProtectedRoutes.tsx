import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface IProtectedRoutes {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: IProtectedRoutes) => {
  const { currentUser } = useAuth();
  return currentUser ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
