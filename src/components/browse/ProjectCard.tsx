import React from 'react';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="card overflow-hidden"
    >
      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        
        <div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm rounded-full p-2">
          <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
            <span className="text-accent-600 text-xs font-bold">BTC</span>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">{description}</p>
      
      <Button 
        onClick={onClick} 
        variant="outline"
        fullWidth
      >
        View Project
      </Button>
    </motion.div>
  );
}