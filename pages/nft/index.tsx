import { NextPage } from 'next';
import { BaseLayout, Layout, NFTUpload, SelectNFT } from '@ui';
import { useContext, useState } from 'react';
import { CreateNftContext, NftWithAtrributes } from 'context/nft';
import { useRouter } from 'next/router';

const NFT: NextPage = () => {
  const { selected, setSelected } = useContext(CreateNftContext);
  const router = useRouter();

  const [nftMeta, setNftMeta] = useState<any>({
    name: '',
    description: '',
    image: '',
    attributes: [
      { trait_type: 'attack', value: '0' },
      { trait_type: 'health', value: '0' },
      { trait_type: 'speed', value: '0' },
    ],
  });

  const handleNextStepModal = () => {
    handleSelectNFT(nftMeta as NftWithAtrributes);
    router.push('/nft/create');
  };

  const handleSelectNFT = (item: NftWithAtrributes) => {
    selected === item ? setSelected(undefined) : setSelected(item);
  };

  return (
    <>
      <BaseLayout>
        <NFTUpload
          callback={handleNextStepModal}
          setNftMeta={setNftMeta}
          nftMeta={nftMeta}
        />
      </BaseLayout>
    </>
  );
};

export default NFT;
