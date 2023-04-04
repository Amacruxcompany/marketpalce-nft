/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmailIcon from '@mui/icons-material/Email';
import { Switch } from '@headlessui/react';
import { Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface PropsGroup {
  title: string;
  subtitle?: string;
  children?: any;
}

const FormGroup = ({ title, subtitle, children }: PropsGroup) => {
  return (
    <div className='mb-16'>
      <h2 className='uppercase text-blue dark:text-blue-light text-3xl mb-2'>
        {title}
      </h2>
      <h3 className='text-lg'>{subtitle}</h3>
      <div className='mt-4 bg-gradient-transparent rounded-xl md:w-1/2'>
        {children}
      </div>
    </div>
  );
};

const Toggle = ({ title, subtitle, children }: PropsGroup) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className='mb-16'>
      <div className='flex justify-between md:w-2/3'>
        <div>
          <h2 className='uppercase text-blue dark:text-blue-light text-3xl mb-2'>
            {title}
          </h2>
          <h3 className='text-lg'>{subtitle}</h3>
        </div>
        <div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`bg-blue dark:bg-blue-light relative inline-flex h-8 w-16 items-center rounded-full`}
          >
            <span className='sr-only'>Enable notifications</span>
            <span
              className={`${
                enabled ? 'translate-x-9' : 'translate-x-1'
              } inline-block h-6 w-6 transform rounded-full bg-white dark:bg-blue transition`}
            />
          </Switch>
        </div>
      </div>
      <div className='mt-4 bg-gradient-transparent rounded-xl md:w-1/2'>
        {enabled && children}
      </div>
    </div>
  );
};

const CreateCollection: React.FC = () => {
  return (
    <section className='max-w-6xl -mb-16'>
      <h1 className='uppercase text-3xl mb-4'>Create a collection</h1>
      <p className='text-xl text-blue dark:text-blue-light'>
        * Required fields
      </p>
      <form className='mt-12 mb-20'>
        <header className='flex flex-col md:flex-row gap-6 items-center'>
          <div className='flex flex-col items-center'>
            <h2>
              Logo image*
              <Tooltip title='Upload an image that represents the logo of your collection.'>
                <InfoIcon />
              </Tooltip>
            </h2>
            <div className='bg-blue dark:bg-blue-light py-6 px-6 flex justify-center items-center my-4 rounded-full'>
              <InsertPhotoIcon className='text-8xl text-blue-light dark:text-blue' />
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-xs'>350 x 350</span>
              <span className='text-xs'>Recomended</span>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h2>
              Banner Image*
              <Tooltip title='Upload a background image that represents your collection.'>
                <InfoIcon />
              </Tooltip>
            </h2>
            <div className='bg-blue dark:bg-blue-light py-6 px-6 flex justify-center items-center my-4 rounded-lg w-96'>
              <InsertPhotoIcon className='text-8xl text-blue-light dark:text-blue' />
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-xs'>1800 x 400</span>
              <span className='text-xs'>Recomended</span>
            </div>
          </div>
        </header>

        <section className='mt-20'>
          <FormGroup title='Name'>
            <input
              type='text'
              placeholder='Example: treasure of the sea.'
              className='bg-transparent placeholder:text-gray border-0 w-full py-4 px-6'
            />
          </FormGroup>
          <FormGroup
            title='Category'
            subtitle='Add category that represents the collection.'
          >
            <select className='bg-transparent w-full focus:outline-none text-sm py-4 px-6 rounded-md border-0'>
              <option>PFP</option>
            </select>
          </FormGroup>
          <FormGroup
            title='Description'
            subtitle='Provide brief information for your collection.'
          >
            <input
              type='text'
              placeholder='Example: treasure of the sea.'
              className='bg-transparent placeholder:text-gray border-0 w-full py-4 px-6'
            />
          </FormGroup>
          <FormGroup
            title='Quantity'
            subtitle='Incluide a maximum number of items for this collection'
          >
            <select className='bg-transparent w-full focus:outline-none text-sm py-4 px-6 rounded-md border-0'>
              <option>0</option>
            </select>
          </FormGroup>
          <Toggle
            title='Tags'
            subtitle='You can add tags that describe the collection using keywords'
          >
            <input
              type='text'
              placeholder='#Score #Teamwork'
              className='bg-transparent placeholder:text-gray border-0 w-full py-4 px-6'
            />
          </Toggle>
          <Toggle
            title='SENSITIVE CONTENT'
            subtitle='Mark this item as content that may be sensitive.  Read more.'
          />
          <Toggle
            title='Contacts'
            subtitle='You can make yourself known by adding an email address, telegram alias or other socual media links.'
          >
            <div className='flex'>
              <div className='rounded-xl bg-blue-light w-40'>
                <select className='bg-transparent w-full focus:outline-none text-sm py-4 px-6 rounded-md border-0 text-blue font-bold'>
                  <option>Email</option>
                </select>
              </div>
              <input
                type='email'
                placeholder='josehakem@gmail.com'
                className='bg-transparent placeholder:text-gray border-0 w-full py-4 px-6 pl-8'
              />
            </div>
          </Toggle>
        </section>
        <div>
          <p className='text-lg'>
            By default, all items in this collection will be minted on the
            ethereum blockchain.
          </p>
        </div>
        <div className='flex justify-center mt-10 gap-10 md:gap-80'>
          <button className='uppercase text-blue-light dark:text-blue bg-blue dark:bg-blue-light rounded-md text-center text-3xl px-5 md:px-10 py-5'>
            Back
          </button>
          <button className='uppercase text-blue-light dark:text-blue bg-blue dark:bg-blue-light rounded-md text-center text-3xl px-5 md:px-10 py-5'>
            Create
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateCollection;
