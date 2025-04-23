import React from 'react';
import { motion } from 'framer-motion';
import { Plus, FileText, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Founder() {
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
  
  // Mock data of user's projects
  const projects = [
    {
      id: 'test',
      title: 'test',
      description: 'test',
      imageUrl: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg',
      created: new Date().toISOString(),
    }
  ];
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-6xl mx-auto py-4"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <div className="p-1 rounded-full bg-primary-100 dark:bg-primary-900/50">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Founder
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Button 
            variant="primary"
            leftIcon={<Plus size={16} />}
          >
            Create Project
          </Button>
        </motion.div>
      </div>
      
      {/* Info card */}
      <motion.div variants={itemVariants} className="card mb-6">
        <p className="text-gray-600 dark:text-gray-300">
          To create a new project, an on-chain transaction and a Nostr DID are created.
        </p>
      </motion.div>
      
      {/* Projects */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="card overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-48 h-32 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <Button 
                    variant="outline"
                    leftIcon={<FileText size={16} />}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div variants={itemVariants} className="card text-center py-12">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7V13M12 17.01L12.01 16.9989M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">No Projects Yet</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6">
            You haven't created any projects yet. Start your funding journey by creating your first project.
          </p>
          <Button 
            variant="primary"
            leftIcon={<Plus size={16} />}
          >
            Create Your First Project
          </Button>
        </motion.div>
      )}
      
      {/* Founder guide */}
      <motion.div variants={itemVariants} className="mt-6 card bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 flex-shrink-0">
            <AlertCircle size={20} className="text-primary-600 dark:text-primary-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Founder Guide</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Creating a successful project requires clear communication, realistic goals, and active engagement with your community.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Clearly define your project's purpose and goals</li>
              <li>Set realistic funding targets and timelines</li>
              <li>Provide regular updates to your investors</li>
              <li>Be transparent about how funds will be used</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}