import { Navigate, Outlet } from 'react-router-dom';

function isAuthenticated() {
  return !!localStorage.getItem('authToken');
}

export function ProtectedRoute() {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the protected child routes (dashboard, users, etc.)
  return <Outlet />;
}