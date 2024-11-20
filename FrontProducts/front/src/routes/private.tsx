import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "@/contexts/loginContext";


export function Private({ children }: { children: ReactNode }) {

  const {isLogged} = useContext(LoginContext);

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}