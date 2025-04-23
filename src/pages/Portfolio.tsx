import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Portfolio() {
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
  
  // Assume user has no investments yet
  const hasInvestments = false;
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-6xl mx-auto py-4"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <div className="p-1 rounded-full bg-primary-100 dark:bg-primary-900/50">
            <TrendingUp size={24} className="text-primary-600 dark:text-primary-400" />
          </div>
          My Portfolio
        </h2>
      </motion.div>
      
      {hasInvestments ? (
        // Portfolio content would go here
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Portfolio summary */}
          <div className="md:col-span-3">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Portfolio Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Invested</p>
                  <p className="text-2xl font-bold">0.12 BTC</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Current Value</p>
                  <p className="text-2xl font-bold">0.15 BTC</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Return</p>
                  <p className="text-2xl font-bold text-success-500">+25%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project investments would go here */}
        </div>
      ) : (
        // Empty state
        <motion.div variants={itemVariants} className="card flex flex-col items-center text-center py-12">
          <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <Wallet size={40} className="text-gray-400 dark:text-gray-500" />
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Your Portfolio is Empty</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
            You haven't invested in any projects yet. Start exploring opportunities and build your investment portfolio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
            >
              Browse Projects
            </Button>
            <Button
              variant="outline"
              leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V15M15 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
            >
              Learn About Investing
            </Button>
          </div>
        </motion.div>
      )}
      
      {/* Tips and guidance */}
      <motion.div variants={itemVariants} className="mt-6 card bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 flex-shrink-0">
            <AlertCircle size={20} className="text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Investment Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Diversify your investments across multiple projects</li>
              <li>Research thoroughly before investing in any project</li>
              <li>Start with smaller amounts as you learn the platform</li>
              <li>Keep track of project updates and milestones</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}