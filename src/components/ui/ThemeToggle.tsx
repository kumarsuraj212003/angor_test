import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../utils/cn';

interface ThemeToggleProps {
  minimized?: boolean;
}

export default function ThemeToggle({ minimized = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex items-center justify-center gap-2 p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
        minimized ? "w-8 h-8" : "h-8"
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <>
          <Moon size={16} />
          {!minimized && <span className="text-sm">Dark mode</span>}
        </>
      ) : (
        <>
          <Sun size={16} />
          {!minimized && <span className="text-sm">Light mode</span>}
        </>
      )}
    </button>
  );
}