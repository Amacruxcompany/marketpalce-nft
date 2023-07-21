import { toast } from 'react-toastify';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { useWeb3 } from '@providers/web3';
import { NftMeta, IpfsRes } from '@_types/nft';
import Image from 'next/image';
import { Switch } from '@headlessui/react';

interface Props {
  nftMeta: any;
  setNftMeta: (val: any) => void;
  callback?: () => void;
}

const NFTUpload: React.FC<Props> = ({ nftMeta, setNftMeta, callback }) => {
  const { ethereum, contract } = useWeb3();

  const getSignedData = async () => {
    const messageToSign = await axios.get('/api/verify');
    const accounts = (await ethereum?.request({
      method: 'eth_requestAccounts',
    })) as string[];
    const account = accounts[0];

    const signedData = await ethereum?.request({
      method: 'personal_sign',
      params: [
        JSON.stringify(messageToSign.data),
        account,
        messageToSign.data.id,
      ],
    });

    return { signedData, account };
  };

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error('Select a file');
      return;
    }

    const file = e.target.files[0];
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);

    try {
      const { signedData, account } = await getSignedData();
      const promise = axios.post('/api/verify-image', {
        address: account,
        signature: signedData,
        bytes,
        contentType: file.type,
        fileName: file.name.replace(/\.[^/.]+$/, ''),
      });

      const res = await toast.promise(promise, {
        pending: 'Uploading image',
        success: 'Image uploaded',
        error: 'Image upload error',
      });

      const data = res.data as IpfsRes;

      setNftMeta({
        ...nftMeta,
        image: `${process.env.NEXT_PUBLIC_IPFS_DOMAIN}/ipfs/${data.IpfsHash}`,
      });
    } catch (e: any) {
      console.error("aqui va", e.message);
    }
  };

  return (
    <div className='bg-transparent-custom rounded-lg shadow-lg px-10 py-5 flex flex-col justify-center tracking-wide'>
      <div className='flex flex-col space-y-3'>
        <span className='text-sm font-bold text-gray block'>
          Choose an image or media file compatible with one of these formats:
          JPG, PNG, GIF, WAV, MP3, MP4 or PDF
        </span>
      </div>
      <div className='relative'>
        {nftMeta.image ? (
          <div className='w-full flex justify-center py-8'>
            <Image
              width={500}
              height={300}
              objectFit='cover'
              src={nftMeta.image}
              alt='Image'
              className='w-full rounded-lg'
            />
          </div>
        ) : (
          <div className='mt-5'>
            <div className='mt-1 flex justify-center px-6 py-12 border-2 border-gray border-dashed rounded-md'>
              <div className='space-y-1 text-center'>
                <svg
                  className='mx-auto h-24 w-24 text-gray'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'
                >
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div className='flex text-sm text-gray'>
                  <label
                    htmlFor='file-upload'
                    className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 '
                  >
                    <span>Upload a file</span>
                    <input
                      onChange={handleImage}
                      id='file-upload'
                      name='file-upload'
                      type='file'
                      className='sr-only'
                    />
                  </label>
                  <p className='pl-1'>or drag and drop</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {nftMeta.image && (
          <div className='flex text-sm absolute bottom-5 left-3 text-white shadow-lg rounded-full'>
            <label
              htmlFor='file-upload'
              className='relative cursor-pointer bg-white rounded-full font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 '
            >
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                />
              </svg>
              <input
                onChange={handleImage}
                id='file-upload'
                name='file-upload'
                type='file'
                className='sr-only'
              />
            </label>
          </div>
        )}
      </div>
      <div className='mt-3'>
        <div className='flex justify-between mb-1'>
          <span className='block uppercase font-bold text-base self-end text-gray'>
            Max size 32MB
          </span>
        </div>
      </div>
      <div className='mt-4 flex justify-end'>
        <button
          type='button'
          className='inline-flex font-bold justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-sm text-white hover:bg-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2'
          onClick={callback}
          disabled={!nftMeta.image}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default NFTUpload;
