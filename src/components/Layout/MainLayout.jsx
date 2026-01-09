import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar - Fixed on desktop, slide-in on mobile */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content - Outlet renders the current route's component */}
        <main className="flex-1 overflow-y-auto bg-muted/40 p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Optional: Add a subtle background pattern or keep it clean */}
    </div>
  );
}