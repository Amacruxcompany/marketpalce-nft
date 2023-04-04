import { DetailsMode } from '@_types/hooks';
import { useState } from 'react';

export const useDetailsMode = () => {
  const [detailsMode, setDetailsMode] = useState(DetailsMode.HightlightsMode);

  const render = () => (
    <nav className='mt-6'>
      <h3 className='text-center'>Change View</h3>
      <ul className='list-none flex justify-center gap-4 mt-4'>
        <li>
          <button
            className='text-gray hover:text-blue-light'
            onClick={() => setDetailsMode(DetailsMode.HightlightsMode)}
          >
            Highligths
          </button>
        </li>
        <li>
          <button
            className='text-gray hover:text-blue-light'
            onClick={() => setDetailsMode(DetailsMode.ClearanceMode)}
          >
            Clearance
          </button>
        </li>
        <li>
          <button
            className='text-gray hover:text-blue-light'
            onClick={() => setDetailsMode(DetailsMode.AuctionsMode)}
          >
            Auctions
          </button>
        </li>
      </ul>
    </nav>
  );

  return {
    detailsMode,
    render,
  };
};
