import { InputField } from '@ui/Partial';
import { Switch } from '@headlessui/react';
import { cryptoOptions } from 'helpers/nftOptions';
import { useState } from 'react';
import { Tooltip, Zoom } from '@mui/material';
import { InformationCircleIcon } from '@heroicons/react/outline';

type SwitchValuesType =
  | 'duration'
  | 'tags'
  | 'unlockableContent'
  | 'sensitiveContent'
  | 'contacts';
interface SwitchValuesInterface {
  duration: boolean;
  tags: boolean;
  unlockableContent: boolean;
  sensitiveContent: boolean;
  contacts: boolean;
}

type PriceFormType = {
  priceType: string;
};

const PriceForm: React.FC<PriceFormType> = ({ priceType }) => {
  const [switchValues, setSwitchValues] = useState<SwitchValuesInterface>({
    duration: false,
    tags: false,
    unlockableContent: false,
    sensitiveContent: false,
    contacts: false,
  });

  const handleChangeSwitchValues = (val: SwitchValuesType) => {
    setSwitchValues({
      ...switchValues,
      [val]: !switchValues[val],
    });
  };

  return (
    <div>
      {/**Price*/}

      {priceType === 'Set Price' && (
        <div>
          <div className='flex flex-col md:flex-row items-center justify-between py-5 mt-8 pt-4 border-t'>
            <div className='flex flex-col items-center mb-2 md:items-start'>
              <div className='flex'>
                <span className='text-lg font-bold'>Price * </span>
                <Tooltip
                  arrow
                  TransitionComponent={Zoom}
                  title='You can change the price every 24 hours.'
                >
                  <InformationCircleIcon className='h-6 w-6 text-white ml-2' />
                </Tooltip>
              </div>
              <span className='text-xs text-violet'>
                Add a price for your item.
              </span>
            </div>
            <div className='flex items-center space-x-2 md:space-x-5'>
              <div className='min-w-[105px]'>
                <InputField
                  type='select'
                  inputName='network'
                  selectOptions={cryptoOptions}
                />
              </div>
              <div className=''>
                <InputField
                  type='input'
                  inputName='Amount'
                  placeholder='Amount'
                  inputType='number'
                />
              </div>
            </div>
          </div>

          {/**Duration*/}

          <div>
            <div className='flex justify-between items-center pt-4 mt-5 border-t'>
              <div className='flex flex-col'>
                <span className='text-lg font-bold'>Duration</span>
                <span className='text-xs md:max-w-md text-violet'>
                  Adding an ending price will allow this listing to expire, or
                  for the price to be reduced until a buyer is found
                </span>
              </div>
              <Switch
                checked={switchValues.duration}
                onChange={() => handleChangeSwitchValues('duration')}
                className={`${
                  switchValues.duration ? 'bg-purple-900' : 'bg-purple-200'
                }
          relative inline-flex h-[19px] ml-3 w-[37px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className='sr-only'>Duration</span>
                <span
                  aria-hidden='true'
                  className={`${
                    switchValues.duration ? 'translate-x-4' : 'translate-x-0'
                  }
            pointer-events-none inline-block h-[15px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
            <div className='flex justify-center items-center mt-3 space-x-3 mx-auto'>
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
                  strokeWidth='2'
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                ></path>
              </svg>
              <InputField
                type='input'
                inputType='text'
                placeholder='6 months'
              />
            </div>
          </div>
        </div>
      )}

      {priceType === 'English auction' && (
        <div>
          <div className='flex flex-col md:flex-row items-center justify-between py-5 pt-4 mt-8 border-t'>
            <div className='flex flex-col items-center mb-2 md:items-start'>
              <div className='flex'>
                <span className='text-lg font-bold'>Opening price * </span>
                <Tooltip
                  arrow
                  TransitionComponent={Zoom}
                  title='Make sure to add a reasonable opening price to get bidders.'
                >
                  <InformationCircleIcon className='h-6 w-6 text-white ml-2' />
                </Tooltip>
              </div>
              <span className='text-xs text-violet'>
                Add a initial price when launching the auction.
              </span>
            </div>
            <div className='flex items-center space-x-2 md:space-x-5'>
              <div className='min-w-[105px]'>
                <InputField
                  type='select'
                  inputName='network'
                  selectOptions={cryptoOptions}
                />
              </div>
              <InputField
                type='input'
                inputName='Amount'
                placeholder='Amount'
                inputType='number'
              />
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center justify-between py-5 mt-4 border-t'>
            <div className='flex flex-col items-center mb-2 md:items-start'>
              <div className='flex'>
                <span className='text-lg font-bold'>Reserve Price * </span>
                <Tooltip
                  arrow
                  TransitionComponent={Zoom}
                  title='The reserve price must be less or equal to the initial price'
                >
                  <InformationCircleIcon className='h-6 w-6 text-white ml-2' />
                </Tooltip>
              </div>
              <span className='text-xs text-violet'>Set a reserve price.</span>
            </div>
            <div className='flex items-center space-x-2 md:space-x-5'>
              <div className='min-w-[105px]'>
                <InputField
                  type='select'
                  inputName='network'
                  selectOptions={cryptoOptions}
                />
              </div>
              <InputField
                type='input'
                inputName='Amount'
                placeholder='Amount'
                inputType='number'
              />
            </div>
          </div>

          <div>
            <div className='flex flex-col md:flex-row justify-between items-center pt-4 border-t'>
              <div className='flex flex-col items-center mb-2 md:items-start'>
                <span className='text-lg font-bold'>Closing date *</span>
                <span className='text-xs text-center md:max-w-md text-violet'>
                  Your auction automatically end at this time and the highest
                  bidder will win.
                </span>
              </div>
            </div>
            <div className='flex justify-center items-center mt-3 space-x-3 mx-auto'>
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
                  strokeWidth='2'
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                ></path>
              </svg>
              <InputField
                type='input'
                inputType='date'
                placeholder='6 months'
              />
            </div>
          </div>
        </div>
      )}

      {/**Tags*/}

      {/** Unlockable Content */}

      <div>
        <div className='flex justify-between items-center pt-4 mt-5 border-t'>
          <div className='flex flex-col'>
            <div className='flex space-x-2 items-center'>
              <span className='text-lg font-bold'>Unlockable Content</span>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z'
                ></path>
              </svg>
            </div>
            <span className='text-xs max-w-md text-violet'>
              Include unlockable content that can only be revealed by the owner
              of the item
            </span>
          </div>
          <Switch
            checked={switchValues.unlockableContent}
            onChange={() => handleChangeSwitchValues('unlockableContent')}
            className={`${
              switchValues.unlockableContent ? 'bg-purple-900' : 'bg-purple-200'
            }
          relative inline-flex h-[19px] w-[37px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className='sr-only'>Unlockable content</span>
            <span
              aria-hidden='true'
              className={`${
                switchValues.unlockableContent
                  ? 'translate-x-4'
                  : 'translate-x-0'
              }
            pointer-events-none inline-block h-[15px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      </div>
      {/**Sensitive Content */}
      {/**Contacts*/}
      <div className='flex justify-between items-center mt-5 pt-5 border-t md:pt-8 md:mt-8 '>
        <div className='flex flex-col'>
          <span className='text-lg font-bold'>Listing fee</span>
          <span className='text-xs max-w-md text-violet'>
            At the time of the sale , the 1.5% will be deduced from the final
            amount of the purchase. If you want to know, learn about Delay
            minting.
          </span>
        </div>
        <h2 className='text-lg font-bold'>1.5%</h2>
      </div>
    </div>
  );
};

export default PriceForm;
