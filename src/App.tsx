import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Browse from './pages/Browse';
import Portfolio from './pages/Portfolio';
import Founder from './pages/Founder';
import Settings from './pages/Settings';

function App() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <MainLayout 
      isSidebarOpen={isSidebarOpen} 
      toggleSidebar={() => setIsSidebarOpen(prev => !prev)}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
}

export default App;