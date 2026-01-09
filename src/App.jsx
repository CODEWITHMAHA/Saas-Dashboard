import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { UserProvider } from '@/context/UserContext';
import { MainLayout } from '@/components/layout/MainLayout';
import { ProtectedRoute } from '@/pages/auth/ProtectedRoute';
import { AuthRedirect } from '@/pages/auth/AuthRedirect';

// Lazy load all pages (big performance boost!)
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Users = lazy(() => import('@/pages/Users'));
const Analytics = lazy(() => import('@/pages/Analytics'));
const Settings = lazy(() => import('@/pages/Settings'));
const Login = lazy(() => import('@/pages/auth/Login'));
const Signup = lazy(() => import('@/pages/auth/Signup'));

// Import the Loader we just created
import { Loader } from '@/components/Loader';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Routes>
            {/* Auth Pages */}
            <Route element={<AuthRedirect />}>
              <Route
                path="/login"
                element={
                  <Suspense fallback={<Loader />}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="/signup"
                element={
                  <Suspense fallback={<Loader />}>
                    <Signup />
                  </Suspense>
                }
              />
            </Route>

            {/* Protected Dashboard Routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Dashboard />
                    </Suspense>
                  }
                />
                <Route
                  path="/users"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Users />
                    </Suspense>
                  }
                />
                <Route
                  path="/analytics"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Analytics />
                    </Suspense>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Settings />
                    </Suspense>
                  }
                />
              </Route>
            </Route>

            {/* Fallback Route */}
            <Route
              path="*"
              element={<Navigate to={localStorage.getItem('authToken') ? '/' : '/login'} replace />}
            />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;