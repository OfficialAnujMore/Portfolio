import React from 'react';

interface CustomTextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  className?: string;
  style?: React.CSSProperties;
}

const CustomText: React.FC<CustomTextProps> = ({ children, variant = 'p', className = '', style }) => {
  const Tag = variant as keyof JSX.IntrinsicElements;
  return <Tag className={className} style={style}>{children}</Tag>;
};

export default CustomText; 