import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar';
import Header from '../components/navigation/Header';

interface MainLayoutProps {
  children: ReactNode;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function MainLayout({ 
  children, 
  isSidebarOpen, 
  toggleSidebar 
}: MainLayoutProps) {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Welcome to Angor';
    if (path === '/wallet') return 'My Wallet';
    if (path === '/browse') return 'Browse Projects';
    if (path === '/portfolio') return 'My Portfolio';
    if (path === '/founder') return 'Founder';
    if (path === '/settings') return 'Settings';
    return 'Angor';
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Sidebar isOpen={isSidebarOpen} />
      
      <div className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <Header 
          title={getPageTitle()} 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}