import React from 'react';

const Dropdown = () => {
  return (
    <select className='bg-blue-light focus:outline-none text-blue text-sm py-1 rounded-md my-4'>
      <option>Collections</option>
      <option>NFTs</option>
    </select>
  );
};

export default Dropdown;
