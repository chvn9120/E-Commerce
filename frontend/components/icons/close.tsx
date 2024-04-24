import React from 'react';

interface CloseProps {
  height?: number;
  width?: number;
  size?: number;
  [key: string]: any;
}

export const CloseIcon: React.FC<CloseProps> = ({ height, width, size, ...props }) => {
  return (
      <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          aria-hidden="true"
          viewBox="0 0 24 24"
          width={size || width || 24}
          height={size || height || 24}
          {...props}
      >
        <path d="M18 6L6 18M6 6l12 12"></path>
      </svg>
  );
};

