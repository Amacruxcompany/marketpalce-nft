import { Switch } from '@headlessui/react';
import { FunctionComponent } from 'react';

interface Props {
  verification: boolean;
  handleChange: () => void;
  title: string;
  buttonAlt: string;
  children: string | React.ReactNode;
}

const ToogleCard: FunctionComponent<Props> = ({
  verification = false,
  handleChange,
  title,
  buttonAlt,
  children,
}) => {
  return (
    <>
      <div className='flex justify-between mt-5'>
        <h4 className='font-bold'>{title}</h4>
        <Switch
          checked={verification}
          onChange={handleChange}
          className={`${verification ? 'bg-purple-900' : 'bg-purple-200'}
        relative inline-flex h-[19px] w-[37px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className='sr-only'>{buttonAlt}</span>
          <span
            aria-hidden='true'
            className={`${verification ? 'translate-x-4' : 'translate-x-0'}
        pointer-events-none inline-block h-[15px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
      <span className='text-violet text-sm'>{children}</span>
    </>
  );
};

export default ToogleCard;
