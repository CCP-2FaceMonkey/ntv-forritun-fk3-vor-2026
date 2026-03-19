import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
