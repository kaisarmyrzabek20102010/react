import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
  const user = sessionStorage.getItem('user');

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
