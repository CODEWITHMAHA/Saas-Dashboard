import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useUser } from '@/context/UserContext';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();

  const currentUser = user || { name: 'User', avatar: null };

  const initials = currentUser.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-6">
      <div>{/* Left side empty */}</div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-full"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Avatar className="h-9 w-9">
          {currentUser.avatar ? (
            <img
              src={currentUser.avatar}
              alt="Profile"
              className="h-full w-full object-cover rounded-full"
            />
          ) : (
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {initials}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
    </header>
  );
}