"use client"

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const VetFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: 'What services do you offer ?',
      content: 'Content of section 1 goes here.',
    },
    {
      title: 'How do I schedule an appointment ?',
      content: 'Content of section 2 goes here.',
    },
    {
      title: 'How do I prepare my livestock for a vet service ?',
      content: 'Content of section 3 goes here.',
    },
   
  ];

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full mb-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-md shadow-md  bg-card mt-4">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => onItemClick(index)}
          >
            <div className='font-abc text-textcolor font-semibold '>{item.title}</div>
            <div>{index === activeIndex ? <ExpandMore /> : <ExpandLess/>}</div>
          </div>
          <hr className='w-full h-0.5 bg-card shadow-lg'/>
          {index === activeIndex && (
            <div className="p-4 bg-card font-abc text-textcolor">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VetFAQs;
