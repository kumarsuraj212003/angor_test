import React from 'react';
import { Menu, Bell, User } from 'lucide-react';
import { cn } from '../../utils/cn';
import NetworkStatus from '../ui/NetworkStatus';

interface HeaderProps {
  title: string;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Header({ 
  title, 
  isSidebarOpen, 
  toggleSidebar 
}: HeaderProps) {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-primary-950/80 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <Menu size={20} />
        </button>
        
        <h1 className="text-xl font-semibold">
          {title}
        </h1>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <NetworkStatus />
        
        <button className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1.5 w-2 h-2 bg-accent-500 rounded-full"></span>
        </button>
        
        <button className="flex items-center gap-2 p-1.5 rounded-lg text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
            <User size={18} className="text-primary-600 dark:text-primary-400" />
          </div>
        </button>
      </div>
    </header>
  );
}