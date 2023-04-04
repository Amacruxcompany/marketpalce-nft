import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { Layout, InputField, NFTImage, ToogleCard } from '@ui';
import { networkOptions, royaltiesOptions } from 'helpers/nftOptions';
import { CreateNftContext } from 'context/nft';
import { useRouter } from 'next/router';

const FormNFT: React.FC = () => {
  const router = useRouter();
  const [isMultiple, setIsMultiple] = useState(false);
  const [hasGass, setHasGass] = useState(false);
  const { selected, setSelected } = useContext(CreateNftContext);

  const netwoksOptions = selected?.network || networkOptions;

  const handleChangeStandard = () => {
    setIsMultiple(!isMultiple);
    setSelected({
      ...selected,
      standard: !isMultiple ? 'Multiple' : 'Single',
    });
  };

  const hanldeChangeGass = () => {
    setHasGass(!hasGass);
  };

  const handlePrevStep = () => {
    router.push('/nft');
  };

  const handleNextStep = () => {
    router.push('/nft/create/list');
  };

  return (
    <section className='md:max-w-4xl md:mx-auto my-12 md:mb-20 md:-mt-12'>
      <form className=''>
        <div className='mb-7'>
          <h1 className='uppercase font-bold text-2xl'>Create an NFT</h1>
          <p className='text-blue-600/95 text-sm'>Required fields *</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-10'>
          <div className=''>
            <div className=''>
              <InputField
                type='select'
                inputName='network'
                label='Network *'
                subLabel="Select the blockchain where you'd like the items from the collection to be minted"
                selectOptions={networkOptions}
              />
            </div>
            <div className='mt-5'>
              {/* Inputs */}
              <InputField
                type='input'
                inputName='title'
                inputType='text'
                label='Name *'
                subLabel='Identifies the item to publish'
                placeholder='Bored Apes Bros #12s3'
                // value={selected.name && selected.name}
              />

              <div className='mt-5'>
                <InputField
                  type='textarea'
                  inputName='description'
                  label='Description'
                  subLabel='Provide brief information for your item'
                  placeholder='Describe your NFT'
                />
              </div>

              <div className='mt-5'>
                <InputField
                  type='select'
                  inputName='royalties'
                  label='Royalties'
                  subLabel='You can receive a percentage as a reward for future sales'
                  selectOptions={royaltiesOptions}
                />
              </div>
              <ToogleCard
                title='Include multiple versions'
                verification={isMultiple}
                handleChange={handleChangeStandard}
                buttonAlt='Multiple NFT'
              >
                A series allows you to sell multiple versions of your
                collectible, but each is still unique by identifier
              </ToogleCard>

              {selected !== null && selected?.standard === 'Multiple' && (
                <div className='mt-5'>
                  <InputField
                    type='input'
                    inputName='copies'
                    label='Copies'
                    subLabel='Add the number of copies that can be minted. (Free gas)'
                    placeholder='2'
                  />
                </div>
              )}

              <ToogleCard
                title='Gasless'
                verification={hasGass}
                handleChange={hanldeChangeGass}
                buttonAlt='Has Gass?'
              >
                Buyer will pay for minting gas fee. <br />
                If you want to know, learn about{' '}
                <a href='#' className='underline'>
                  Delay minting
                </a>
              </ToogleCard>
            </div>
          </div>
          <div className='row-start-1 md:col-start-2'>
            <NFTImage image={selected?.image} />
          </div>

          <div className='flex justify-between items-center'>
            <button
              type='button'
              onClick={handlePrevStep}
              className='uppercase font-bold text-lg px-6 text-white bg-[#A66ED8] rounded-lg mt-20 py-2 self-center'
            >
              Back
            </button>

            <button
              type='button'
              onClick={handleNextStep}
              className='uppercase font-bold text-lg px-6 text-white bg-[#A66ED8] rounded-lg mt-20 py-2 self-center'
            >
              Mint (2/3)
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FormNFT;
