import { Outlet, Navigate } from "react-router-dom";

export const Protect = () => {
  const user = true;

  return <div>{user ? <Outlet /> : <Navigate to="/" />}</div>;
};
