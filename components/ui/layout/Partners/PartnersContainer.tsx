import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FormGroup, InputRadio } from './components';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

function PartnersContainer() {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };
  return (
    <section>
      <header>
        <h1 className='text-black dark:text-white text-4xl text-center mb-7'>
          Thank you for your interest in joining the Amacrux community
        </h1>
        <h2 className='text-blue dark:text-blue-light text-center text-2xl mb-6'>
          Please tell us more about yourself so we can support your goals
        </h2>
        <p className='text-black dark:text-gray text-lg text-center'>
          <WatchLaterIcon className='mr-6' />
          Take less than 1 minute
        </p>
      </header>
      <form className='flex flex-col'>
        <p>
          <strong className='text-blue dark:text-blue-light'>*</strong> Required
          fields
        </p>
        <div className='grid md:grid-cols-2 gap-8 mt-6 mb-10'>
          <FormGroup
            title="First off, what's your email address?"
            subtitle='Our team will reach out to you here'
          >
            <div className='bg-gradient-transparent rounded-xl flex justify-between w-96'>
              <input
                type='email'
                placeholder='example@gmail.com'
                name='email'
                className='bg-transparent placeholder:text-gray border-0'
              />
              <button className='bg-blue dark:bg-blue-light rounded-xl px-4'>
                <DoneIcon className='text-blue-light dark:text-blue font-xl font-bold' />
              </button>
            </div>
          </FormGroup>
          <FormGroup
            title='Dear user, where are you located?'
            subtitle='Choose the region where you are located'
          >
            <InputRadio text='Asia' />
            <InputRadio text='Africa' />
            <InputRadio text='Europe' />
            <InputRadio text='North America' />
            <InputRadio text='South America' />
            <InputRadio text='Oceana' />
          </FormGroup>
          <FormGroup
            title='In which area would you like to support the Amacrux project?'
            subtitle='CYou can choose one or several departments'
          >
            <InputRadio text='DEVELOPMENT AND INFRASTRUCTURE' />
            <InputRadio text='FINANCE' />
            <InputRadio text='ORGANIZATIONAL MANAGEMENT/HUMAN TALENT' />
            <InputRadio text='SECURITY AND LEGALITIES' />
            <InputRadio text='DIGITAL MARKETING' />
            <InputRadio text='BILATERAL ALLIANCES' />
          </FormGroup>
          <FormGroup
            title='Include a brief explanation of your goals and thoughts as a future
            Amacrux partner'
            subtitle='You can add partnership supports with other companies'
          >
            <div className='bg-gradient-transparent rounded-xl h-48'>
              <textarea
                placeholder='I am interested in financing a community manager team to apply engagement strategies in RRSS'
                className='bg-transparent w-full border-0 h-full'
              ></textarea>
            </div>
          </FormGroup>
          <div>
            <h3 className='text-xl mb-2'>
              Last question, provide your telegram alias to receive answers from
              our team
            </h3>
            <div className='bg-gradient-transparent rounded-xl flex justify-between w-96 mt-6'>
              <input
                type='text'
                placeholder='@Amacruxnft'
                className='bg-transparent placeholder:text-gray border-0'
              />
              <button className='bg-blue dark:bg-blue-light rounded-xl px-4'>
                <TelegramIcon className='text-blue-light dark:text-blue' />
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type='submit'
          className='uppercase text-blue-light dark:text-blue bg-blue dark:bg-blue-light rounded-md text-center text-3xl px-14 py-5 mx-auto self-center'
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default PartnersContainer;
