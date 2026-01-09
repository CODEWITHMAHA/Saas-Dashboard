export function AuthLayout({ children, title, description }) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">SaaS Dash</h1>
            <p className="text-muted-foreground mt-2">{description}</p>
          </div>
          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    );
  }