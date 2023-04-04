import { createContext, Dispatch, SetStateAction } from 'react';
import { Nft } from '@_types/nft';

export interface NftWithAtrributes extends Nft {
  name?: string;
  description?: string;
  image?: string;
  attributes?: {
    trait_type?: string;
    value?: string;
  }[];
  network?: {
    value: string;
    name: string;
    icon: string;
  }[];
}

interface NftCreated {
  selected: NftWithAtrributes | undefined;
  setSelected: Dispatch<SetStateAction<NftWithAtrributes | undefined>>;
}

const INITIAL_NFT: NftWithAtrributes = {
  name: '',
  description: '',
  image: '',
  attributes: [
    { trait_type: 'attack', value: '0' },
    { trait_type: 'health', value: '0' },
    { trait_type: 'speed', value: '0' },
  ],
};

const INITIAL_CREATE_NFT_CONTEXT: NftCreated = {
  selected: INITIAL_NFT,
  setSelected: () => {},
};

export const CreateNftContext = createContext(INITIAL_CREATE_NFT_CONTEXT);
