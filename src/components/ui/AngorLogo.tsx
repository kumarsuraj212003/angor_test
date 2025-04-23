import React from 'react';
import { ThemeType } from '../../types';

interface AngorLogoProps {
  size?: number;
  theme?: ThemeType;
}

export default function AngorLogo({ size = 40, theme = 'dark' }: AngorLogoProps) {
  const mainColor = theme === 'dark' ? '#67e8f9' : '#0e7490';
  const accentColor = theme === 'dark' ? '#fb923c' : '#f97316';
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 10L10 85H90L50 10Z"
        stroke={mainColor}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <circle
        cx="50"
        cy="52"
        r="15"
        fill={accentColor}
        stroke={mainColor}
        strokeWidth="4"
      />
      <path
        d="M32 70L16 80M68 70L84 80M50 25V35"
        stroke={mainColor}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}