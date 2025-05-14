import React, { CSSProperties, ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  initial?: CSSProperties;
  animate?: CSSProperties;
  exit?: CSSProperties;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
  className?: string;
  style?: CSSProperties;
}

// Simple motion component for basic animations
export const motion = ({ 
  children, 
  initial = {}, 
  animate = {}, 
  transition = { duration: 0.3 },
  className = '',
  style = {},
}: MotionProps) => {
  const combinedStyle: CSSProperties = {
    ...style,
    ...animate,
    transition: `all ${transition?.duration || 0.3}s ${transition?.ease || 'ease-in-out'}`,
  };
  
  return React.createElement('div', {
    className,
    style: combinedStyle
  }, children);
}