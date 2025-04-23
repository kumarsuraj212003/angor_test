import React from 'react';
import { RefreshCw } from 'lucide-react';

interface BalanceDisplayProps {
  balance: string;
  currency?: string;
  onRefresh?: () => void;
}

export default function BalanceDisplay({
  balance,
  currency = 'BTC',
  onRefresh,
}: BalanceDisplayProps) {
  return (
    <div className="card flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/50">
          <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 4L12 8M12 8L8 4M12 8V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Current Balance</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-bold">{balance}</h2>
            <span className="text-gray-500 dark:text-gray-400">{currency}</span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onRefresh}
        className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Refresh balance"
      >
        <RefreshCw size={20} />
      </button>
    </div>
  );
}