import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowDown, List } from 'lucide-react';
import Button from '../components/ui/Button';
import BalanceDisplay from '../components/wallet/BalanceDisplay';

export default function Wallet() {
  const [balance] = useState("193.98978614");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };
  
  const refreshBalance = () => {
    // This would connect to an API in a real application
    console.log('Refreshing balance...');
  };
  
  const sendBitcoin = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to an API in a real application
    console.log(`Sending ${amount} BTC to ${address}`);
    // Reset form
    setAddress("");
    setAmount("");
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-6xl mx-auto py-4"
    >
      <div className="flex justify-between items-center mb-6">
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <div className="p-1 rounded-full bg-primary-100 dark:bg-primary-900/50">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6.5V6C16 4.34315 14.6569 3 13 3H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H13C14.6569 21 16 19.6569 16 18V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M19 15L19 9M19 15C17.3431 15 16 13.6569 16 12C16 10.3431 17.3431 9 19 9M19 15C20.6569 15 22 13.6569 22 12C22 10.3431 20.6569 9 19 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            My Wallet
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Button 
            variant="secondary"
            leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}
          >
            View Seed
          </Button>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <BalanceDisplay 
            balance={balance} 
            currency="TBTC"
            onRefresh={refreshBalance} 
          />
        </motion.div>
        
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <div className="card h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Send size={18} />
                Send
              </h3>
            </div>
            
            <form onSubmit={sendBitcoin}>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Send to Address
                </label>
                <div className="flex">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-700">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                      <path d="M20 10H4V16H20V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 7C18 5.34315 16.6569 4 15 4H9C7.34315 4 6 5.34315 6 7V10H18V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 16V17C6 18.6569 7.34315 20 9 20H15C16.6569 20 18 18.6569 18 17V16H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Bitcoin address"
                    className="input rounded-l-none flex-1"
                  />
                  <button 
                    type="button"
                    className="p-2 bg-gray-100 dark:bg-gray-800 border border-l-0 border-gray-300 dark:border-gray-700 rounded-r-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Amount
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.0"
                    className="input rounded-r-none flex-1"
                  />
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 border border-l-0 border-gray-300 dark:border-gray-700 rounded-r-lg min-w-20 flex justify-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">TBTC</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="primary"
                type="submit"
                leftIcon={<Send size={16} />}
                fullWidth
              >
                Send Bitcoin
              </Button>
            </form>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <div className="grid grid-cols-1 gap-4 h-full">
            <div className="card flex flex-col items-center justify-center p-4">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/50 mb-2">
                <ArrowDown size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Receive</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">
                Generate an address to receive funds
              </p>
              <Button variant="outline" fullWidth>
                Generate Address
              </Button>
            </div>
            
            <div className="card flex flex-col items-center justify-center p-4">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/50 mb-2">
                <List size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Addresses</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">
                View and manage your wallet addresses
              </p>
              <Button variant="outline" fullWidth>
                View Addresses
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}