export function Loader() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="mt-6 text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }