import React from 'react';

interface TagProps {
  text: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className = '' }) => {
  return (
    <span
      className={`bg-blue text-blue-light dark:bg-blue-light dark:text-blue px-1 py-1 rounded-md text-sm shadow-md font-semibold ${className}`}
    >
      {text}
    </span>
  );
};

export default Tag;
