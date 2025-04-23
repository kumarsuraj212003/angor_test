import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchInput from '../components/ui/SearchInput';
import ProjectCard from '../components/browse/ProjectCard';

export default function Browse() {
  const [searchQuery, setSearchQuery] = useState('');
  
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
  
  // Mock project data
  const projects = [
    {
      id: '1',
      title: 'India Bitcoin Summit',
      description: 'The India Bitcoin Summit is the premier gathering dedicated exclusively to Bitcoin in India. Recognizing the transformative potential of Bitcoin...',
      imageUrl: 'https://images.pexels.com/photos/1386884/pexels-photo-1386884.jpeg',
    },
    {
      id: '2',
      title: 'Testy Testy',
      description: 'Testing the Flow',
      imageUrl: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg',
    },
    {
      id: '3',
      title: 'Urban Farming Initiative',
      description: 'Revolutionizing how cities produce food with sustainable vertical farming technology powered by renewable energy.',
      imageUrl: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg',
    },
    {
      id: '4',
      title: 'Clean Water Access',
      description: 'Bringing clean water solutions to underserved communities through innovative filtration technology.',
      imageUrl: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
    },
    {
      id: '5',
      title: 'Renewable Power Station',
      description: 'Building modular renewable power stations that combine solar, wind and battery storage for off-grid communities.',
      imageUrl: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg',
    },
    {
      id: '6',
      title: 'Lightning Network Exchange',
      description: 'A next-generation Bitcoin exchange built on Lightning Network for instant, low-fee trading.',
      imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
    },
  ];
  
  // Filter projects based on search query
  const filteredProjects = searchQuery
    ? projects.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : projects;
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto py-4"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <div className="p-1 rounded-full bg-primary-100 dark:bg-primary-900/50">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Browse Projects
          </h2>
        </motion.div>
        
        <motion.div variants={itemVariants} className="w-full md:w-auto">
          <SearchInput 
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
            placeholder="Search projects..."
            className="w-full md:w-80"
          />
        </motion.div>
      </div>
      
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              transition={{ delay: index * 0.05 }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                onClick={() => console.log(`Viewing project: ${project.id}`)}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div variants={itemVariants} className="card text-center py-12">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 15.5L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Project not found in any relay!</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            We couldn't find any projects matching your search. Try adjusting your search terms or browse all projects.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}