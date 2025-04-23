import React from 'react';
import { Server } from 'lucide-react';

export default function NetworkStatus() {
  const isTestnet = true; // This would come from context/props in a real app
  
  return (
    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-primary-100/80 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300">
      <Server size={14} className="animate-pulse-slow" />
      <span>{isTestnet ? 'Testnet' : 'Mainnet'}</span>
    </div>
  );
}