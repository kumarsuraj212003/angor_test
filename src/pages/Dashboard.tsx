import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Search, UserPlus, BarChart } from 'lucide-react';
import Button from '../components/ui/Button';
import FeatureCard from '../components/dashboard/FeatureCard';
import AngorIcon from '../components/ui/AngorIcon';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  
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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto py-4"
    >
      {/* Hero Section */}
      <motion.div 
        variants={itemVariants}
        className="card flex flex-col items-center text-center py-12 mb-8"
      >
        <AngorIcon size={80} />
        
        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-3">Welcome to Angor</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          A P2P funding protocol built on Bitcoin and Nostr
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => navigate('/wallet')}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/browse')}
          >
            Learn More
          </Button>
        </div>
      </motion.div>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={<Wallet size={24} />}
            title="Create Your Wallet"
            description="Create a new wallet or recover your existing one to get started with Angor"
            onClick={() => navigate('/wallet')}
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={<Search size={24} />}
            title="Explore Opportunities"
            description="Browse through innovative projects and find your next investment"
            onClick={() => navigate('/browse')}
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={<UserPlus size={24} />}
            title="Launch Your Project"
            description="Start your fundraising journey and launch your project on Angor"
            onClick={() => navigate('/founder')}
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={<BarChart size={24} />}
            title="Invest & Grow"
            description="Invest in promising projects and be part of their success story"
            onClick={() => navigate('/portfolio')}
          />
        </motion.div>
      </div>
      
      {/* Additional Info */}
      <motion.div 
        variants={itemVariants}
        className="card mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">What is Angor?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Angor is a decentralized funding platform that connects founders with investors using Bitcoin and Nostr technologies. 
          Our protocol enables secure, transparent, and efficient funding with minimal fees and maximum control.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Whether you're looking to fund your next big idea or searching for promising investments, 
          Angor provides the tools and platform to make it happen.
        </p>
      </motion.div>
      
      <motion.div
        variants={itemVariants}
        className="card bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800"
      >
        <h3 className="text-lg font-semibold mb-2">Get Started Today</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Create your wallet and start exploring the Angor ecosystem. It's free to join!
        </p>
        <Button 
          variant="primary"
          onClick={() => navigate('/wallet')}
        >
          Create Wallet
        </Button>
      </motion.div>
    </motion.div>
  );
}