import { FC, useState } from 'react';
import { Nft } from '@_types/nft';
import { CreateNftContext } from '.';
import { NftWithAtrributes } from './CreateNftContext';

interface Props {
  children?: any;
}

export const CreateNftProvider: FC<Props> = ({ children }) => {
  const [selected, setSelected] = useState<NftWithAtrributes>();

  return (
    <CreateNftContext.Provider value={{ selected, setSelected }}>
      {children}
    </CreateNftContext.Provider>
  );
};
