import React from 'react';

interface CustomImagePreviewProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const CustomImagePreview: React.FC<CustomImagePreviewProps> = ({ src, alt, className = '', style, onError }) => (
  <img src={src} alt={alt} className={className} style={style} onError={onError} />
);

export default CustomImagePreview; 