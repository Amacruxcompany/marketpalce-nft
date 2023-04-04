import React from 'react';
import Image from 'next/image';
import SaveIcon from '@mui/icons-material/Save';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

function ProfileSettingsContainer() {
  return (
    <section>
      <h1 className='uppercase text-2xl text-blue dark:text-white'>Settings</h1>
      <form className='mt-6'>
        <div className='grid md:grid-cols-[2fr_6fr] gap-8'>
          <div className='flex flex-col items-center gap-4'>
            <h3 className='text-blue dark:text-white'>Image or PFP</h3>
            <figure className='rounded-full overflow-hidden w-52 h-52'>
              <Image
                src='/images/default_avatar.png'
                width={222}
                height={222}
                alt='profile avatar'
                objectFit='cover'
                className='w-full h-full'
              />
            </figure>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <h3 className='text-blue dark:text-white'>Banner</h3>
            <figure>
              <Image
                width={1152}
                height={360}
                objectFit='cover'
                src={'/images/amacrux-background.jpg'}
                alt='amacrux background'
                className='rounded-lg'
              />
            </figure>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4 mt-6'>
          <div>
            <div>
              <label className='text-blue dark:text-white'>
                Alias
                <div className='bg-gradient-transparent rounded-xl flex justify-between mt-2'>
                  <input
                    type='text'
                    placeholder='@Capote.ve'
                    className='bg-transparent placeholder:text-gray border-0 w-full focus:shadow-none'
                  />
                </div>
              </label>
            </div>
            <div className='mt-4'>
              <label className='text-blue dark:text-white'>
                Speciality
                <div className='bg-gradient-transparent rounded-xl flex justify-between mt-2'>
                  <input
                    type='text'
                    placeholder='Graphic Designer'
                    className='bg-transparent placeholder:text-gray border-0 w-full focus:shadow-none focus-within:shadow-none focus-visible:shadow-none'
                  />
                </div>
              </label>
            </div>
            <div className='mt-4'>
              <label className='text-blue dark:text-white'>
                Bio
                <div className='bg-gradient-transparent rounded-xl flex justify-between mt-2'>
                  <textarea
                    placeholder='Lörem ipsum trek jasminmöte: på lada. Mikronat en, plus mispeligt, i tumipp blockchain. Pot besavis, sms-anställning. Salig olasade. '
                    className='bg-transparent placeholder:text-gray border-0 w-full'
                  ></textarea>
                </div>
              </label>
            </div>
          </div>
          <div>
            <label className='text-blue dark:text-white'>Contacts</label>
            <div className='bg-gradient-transparent rounded-xl flex items-center pl-4 mt-2'>
              <InstagramIcon className='text-blue dark:text-white' />
              <input
                type='url'
                placeholder='Your Instagram Handle'
                className='bg-transparent placeholder:text-gray border-0 w-full'
              />
            </div>
            <div className='bg-gradient-transparent rounded-xl flex items-center pl-4 mt-4'>
              <TwitterIcon className='text-blue dark:text-white' />
              <input
                type='url'
                placeholder='Your Twitter Handle'
                className='bg-transparent placeholder:text-gray border-0 w-full'
              />
            </div>
            <div className='bg-gradient-transparent rounded-xl flex items-center pl-4 mt-4'>
              <WysiwygIcon className='text-blue dark:text-white' />
              <input
                type='url'
                placeholder='Yoursite.io'
                className='bg-transparent placeholder:text-gray border-0 w-full'
              />
            </div>
          </div>
        </div>
        <div className='mt-6 flex justify-center md:justify-end w-full'>
          <button className='bg-blue dark:bg-blue-light text-blue-light dark:text-blue px-5 py-2 rounded-xl mr-10'>
            <SaveIcon className='mr-2' />
            Save
          </button>
          <button className='bg-blue dark:bg-blue-light text-blue-light dark:text-blue px-5 py-2 rounded-xl mr-10'>
            <CleaningServicesIcon /> Clear
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProfileSettingsContainer;
