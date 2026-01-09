import { Navigate, Outlet } from 'react-router-dom';

function isAuthenticated() {
  return !!localStorage.getItem('authToken');
}

export function AuthRedirect() {
  if (isAuthenticated()) {
    // If already logged in, don't show login/signup
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}