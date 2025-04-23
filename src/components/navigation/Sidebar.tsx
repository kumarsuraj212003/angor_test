import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Wallet, 
  Search, 
  BarChart, 
  UserPlus, 
  Settings, 
  Home,
  Server
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../utils/cn';
import ThemeToggle from '../ui/ThemeToggle';
import AngorIcon from '../ui/AngorIcon';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const { theme } = useTheme();
  
  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 flex-shrink-0 flex flex-col bg-sidebar-light dark:bg-sidebar-dark border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-20"
      )}
    >
      <div className="flex items-center h-16 px-4 py-6">
        <div className={cn("flex items-center justify-start gap-3", isOpen ? "" : "md:justify-center")}>
          <AngorIcon size={32} />
          {isOpen && <h1 className="text-xl font-bold">Angor</h1>}
        </div>
      </div>
      
      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="px-3 space-y-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => cn(
              "sidebar-link", 
              isActive && "active",
              !isOpen && "md:justify-center md:px-2"
            )}
          >
            <Home size={20} />
            {isOpen && <span>Dashboard</span>}
          </NavLink>
          
          <NavLink 
            to="/wallet" 
            className={({ isActive }) => cn(
              "sidebar-link", 
              isActive && "active",
              !isOpen && "md:justify-center md:px-2"
            )}
          >
            <Wallet size={20} />
            {isOpen && <span>Wallet</span>}
          </NavLink>
          
          <NavLink 
            to="/browse" 
            className={({ isActive }) => cn(
              "sidebar-link", 
              isActive && "active",
              !isOpen && "md:justify-center md:px-2"
            )}
          >
            <Search size={20} />
            {isOpen && <span>Browse</span>}
          </NavLink>
          
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => cn(
              "sidebar-link", 
              isActive && "active",
              !isOpen && "md:justify-center md:px-2"
            )}
          >
            <BarChart size={20} />
            {isOpen && <span>Portfolio</span>}
          </NavLink>
          
          <NavLink 
            to="/founder" 
            className={({ isActive }) => cn(
              "sidebar-link", 
              isActive && "active",
              !isOpen && "md:justify-center md:px-2"
            )}
          >
            <UserPlus size={20} />
            {isOpen && <span>Founder</span>}
          </NavLink>
          
          <NavLink 
            to="/settings" 
            className={({ isActive }) => cn(
              "sidebar-link", 
              isActive && "active",
              !isOpen && "md:justify-center md:px-2"
            )}
          >
            <Settings size={20} />
            {isOpen && <span>Settings</span>}
          </NavLink>
        </nav>
      </div>
      
      <div className={cn(
        "p-4 border-t border-gray-200 dark:border-gray-800 flex items-center",
        isOpen ? "justify-between" : "md:justify-center"
      )}>
        <div className={cn("flex items-center gap-3", !isOpen && "md:hidden")}>
          <Server size={18} className="text-primary-500 animate-pulse-slow" />
          {isOpen && <span className="text-sm">Angornet (testnet)</span>}
        </div>
        <ThemeToggle minimized={!isOpen} />
      </div>
    </aside>
  );
}