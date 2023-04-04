import { CollectionCard } from '@ui/nft/CollectionCard';
import React from 'react';

const CollectionsContainer = () => {
  return (
    <section className='grid grid-cols-2 md:grid-cols-5 gap-8'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => (
        <CollectionCard key={`collection-${item}`} />
      ))}
    </section>
  );
};

export default CollectionsContainer;
