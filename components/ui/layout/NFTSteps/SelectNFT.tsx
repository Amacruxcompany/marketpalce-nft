import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { Modal, NFTUpload } from '@ui';
import { useListedNfts, useNetwork } from '@hooks';
import { Nft } from '../../../../types/nft';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { Tooltip, Zoom } from '@mui/material';
import { useRouter } from 'next/router';
import { CreateNftContext, NftWithAtrributes } from 'context/nft';

const SelectNFT: React.FC = () => {
  const router = useRouter();
  const { selected, setSelected } = useContext(CreateNftContext);
  const [openModal, setOpenModal] = useState(false);
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
  const { nfts } = useListedNfts();
  const { network } = useNetwork();

  const handleSelectNFT = (item: NftWithAtrributes) => {
    selected === item ? setSelected(undefined) : setSelected(item);
  };

  const handleNextStepModal = () => {
    handleSelectNFT(nftMeta as NftWithAtrributes);
    openModal && setOpenModal(false);
    router.push('/nft/create');
  };

  const handleNextStep = () => {
    router.push('/nft/create/list');
  };

  return (
    <>
      <section className='max-w-2xl mx-auto py-10 md:py-16 flex flex-col'>
        <div>
          <h1 className='text-4xl font-bold'>Import your NFTs</h1>
          <p className='text-blue-800 text-base'>
            You can import your NFT through an external link (via URL) or click
            on the button of the NFT linked to your wallet
          </p>
        </div>
        <div className='mt-3'>
          <h2 className='font-bold'>External Link</h2>
          <p className='text-blue-800 text-base'>
            Insert the NFT URL. You can only insert one at a time
          </p>

          <div className='flex space-x-5 pt-3'>
            <input
              className='w-full rounded-lg bg-transparent-custom px-2 py-2  focus:outline-none '
              placeholder='Paste the url of your NFT'
            />
            <button className='bg-violet-500 text-white px-5 rounded-lg'>
              Apply
            </button>
          </div>
        </div>
        <p className='font-bold text-center text-white my-5 text-lg'>or</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {network.isConnectedToNetwork &&
            nfts.data?.map(nft => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={nft.tokenId}
                onClick={() => handleSelectNFT(nft as NftWithAtrributes)}
                className={`${
                  selected?.tokenId === nft.tokenId && 'border'
                } bg-transparent-custom rounded-xl shadow-custom bg-purple-500 relative flex flex-col cursor-pointer`}
              >
                <picture className='w-full overflow-hidden '>
                  <img
                    src={nft.meta?.image}
                    alt='Card image'
                    className='w-full h-52 rounded-lg'
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center',
                    }}
                  />
                </picture>
                <div className='p-2'>
                  <h2 className='font-bold text-lg'>{nft.meta?.name}</h2>
                </div>
                {selected?.tokenId === nft.tokenId && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className='absolute -top-2 -right-2'
                  >
                    <CheckCircleOutlineRoundedIcon
                      fontSize='large'
                      className='bg-green-500 rounded-full text-white'
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
        </div>
        <div className='mt-10 flex flex-col md:flex-row justify-center items-center'>
          <h3 className='text-2xl'>Or you can create a new NFT</h3>
          <button
            onClick={() => setOpenModal(true)}
            className='text-2xl mt-5 md:mt-0 underline md:no-underline md:ml-3 flex items-center hover:underline focus:outline-none active:outline-none text-violet-500'
          >
            Create NFT
            <Tooltip
              arrow
              TransitionComponent={Zoom}
              title='You can create a new item by uploading an image or media file from your computer
'
            >
              <InformationCircleIcon className='h-6 w-6 text-white ml-2' />
            </Tooltip>
          </button>
        </div>

        <button
          onClick={handleNextStep}
          disabled={!selected?.tokenId}
          className='bg-violet-500 text-3xl font-bold rounded-lg w-full md:w-1/2 py-2 mt-16 mx-auto disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Import (1/2)
        </button>
      </section>

      <Modal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        content={
          <NFTUpload
            callback={handleNextStepModal}
            setNftMeta={setNftMeta}
            nftMeta={nftMeta}
          />
        }
        title='Create an NFT'
      />
    </>
  );
};

export default SelectNFT;
