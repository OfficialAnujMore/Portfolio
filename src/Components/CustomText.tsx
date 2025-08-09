import React from 'react';

interface CustomTextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

const CustomText: React.FC<CustomTextProps> = ({ children, variant = 'p', className = '', style, id }) => {
  const Tag = variant as keyof JSX.IntrinsicElements;
  return <Tag className={className} style={style} id={id}>{children}</Tag>;
};

export default CustomText; 