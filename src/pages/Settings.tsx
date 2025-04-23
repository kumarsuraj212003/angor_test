import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, EyeOff, RefreshCw } from 'lucide-react';
import Button from '../components/ui/Button';
import { useTheme } from '../contexts/ThemeContext';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [showSeed, setShowSeed] = useState(false);
  
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
  
  // Mock seed phrase
  const seedPhrase = 'witch collapse practice feed shame open despair creek road again ice least';
  
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
            <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          Settings
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Security Settings */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/50">
                <Shield size={20} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold">Security</h3>
            </div>
            
            <div className="space-y-6">
              {/* Seed phrase */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Wallet Seed Phrase
                </label>
                <div className="relative">
                  <div className={`p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm ${!showSeed && 'filter blur-sm select-none'}`}>
                    {seedPhrase}
                  </div>
                  <button
                    onClick={() => setShowSeed(!showSeed)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white dark:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {showSeed ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  This 12-word seed phrase is the key to your wallet. Never share it with anyone.
                </p>
              </div>
              
              {/* Password protection */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password Protection
                  </label>
                  <span className="text-xs px-2 py-1 bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-300 rounded-full">
                    Not Set
                  </span>
                </div>
                <Button variant="outline">Set Password</Button>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Add an additional layer of security with a password.
                </p>
              </div>
              
              {/* Backup wallet */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Backup Wallet
                </label>
                <Button 
                  variant="outline"
                  leftIcon={<RefreshCw size={16} />}
                >
                  Create Backup
                </Button>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Create an encrypted backup of your wallet.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Appearance Settings */}
        <motion.div variants={itemVariants} className="md:col-span-1">
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Appearance</h3>
            
            <div className="space-y-6">
              {/* Theme toggle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Theme
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => theme === 'dark' && toggleTheme()}
                    className={`w-16 h-16 rounded-lg flex items-center justify-center ${theme === 'light' ? 'bg-primary-100 ring-2 ring-primary-500' : 'bg-gray-100 dark:bg-gray-800'}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={theme === 'light' ? 'text-primary-500' : 'text-gray-500 dark:text-gray-400'}>
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => theme === 'light' && toggleTheme()}
                    className={`w-16 h-16 rounded-lg flex items-center justify-center ${theme === 'dark' ? 'bg-primary-900 ring-2 ring-primary-500' : 'bg-gray-100 dark:bg-gray-800'}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={theme === 'dark' ? 'text-primary-400' : 'text-gray-500 dark:text-gray-400'}>
                      <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1582 17.4668C18.1126 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.7479 21.1181 10.0795 20.7461C8.41113 20.3741 6.88717 19.5345 5.67516 18.3225C4.46315 17.1105 3.62356 15.5864 3.25154 13.9181C2.87953 12.2497 2.99033 10.5097 3.57106 8.90193C4.15179 7.29412 5.17845 5.88496 6.53084 4.83939C7.88324 3.79383 9.50543 3.15501 11.2076 2.99777C10.2718 4.16345 9.83093 5.60475 9.95896 7.04893C10.087 8.49312 10.7754 9.84271 11.8958 10.8635C13.0162 11.8843 14.3996 12.4941 15.8476 12.5361C17.2956 12.5781 18.711 12.0495 19.8854 11.0918C20.2122 11.603 20.4783 12.1524 20.68 12.73L21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Choose between light and dark mode.
                </p>
              </div>
              
              {/* Language */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Language
                </label>
                <select className="input">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="ja">日本語</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Network Settings */}
        <motion.div variants={itemVariants} className="md:col-span-3">
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Network</h3>
            
            <div className="space-y-6">
              {/* Network Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bitcoin Network
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <input
                      type="radio"
                      id="testnet"
                      name="network"
                      className="peer sr-only"
                      checked
                      readOnly
                    />
                    <label
                      htmlFor="testnet"
                      className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900/30"
                    >
                      <div className="w-4 h-4 rounded-full border-2 border-gray-400 dark:border-gray-500 flex items-center justify-center peer-checked:border-primary-500">
                        <div className="w-2 h-2 rounded-full bg-primary-500 peer-checked:block"></div>
                      </div>
                      <span className="font-medium">Testnet</span>
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="radio"
                      id="mainnet"
                      name="network"
                      className="peer sr-only"
                      disabled
                    />
                    <label
                      htmlFor="mainnet"
                      className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-not-allowed opacity-60"
                    >
                      <div className="w-4 h-4 rounded-full border-2 border-gray-400 dark:border-gray-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary-500 hidden"></div>
                      </div>
                      <span className="font-medium">Mainnet</span>
                      <span className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-700 rounded-full ml-2">
                        Coming Soon
                      </span>
                    </label>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Testnet is for testing purposes. Use testnet coins for all transactions.
                </p>
              </div>
              
              {/* Relays */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nostr Relays
                  </label>
                  <span className="text-xs px-2 py-1 bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-300 rounded-full">
                    Connected
                  </span>
                </div>
                <ul className="space-y-2 mb-3">
                  <li className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center">
                    <span className="font-mono text-sm">wss://relay.damus.io</span>
                    <span className="w-2 h-2 bg-success-500 rounded-full"></span>
                  </li>
                  <li className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center">
                    <span className="font-mono text-sm">wss://nos.lol</span>
                    <span className="w-2 h-2 bg-success-500 rounded-full"></span>
                  </li>
                  <li className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center">
                    <span className="font-mono text-sm">wss://relay.nostr.band</span>
                    <span className="w-2 h-2 bg-warning-500 rounded-full"></span>
                  </li>
                </ul>
                <Button variant="outline" size="sm">
                  Add Relay
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}