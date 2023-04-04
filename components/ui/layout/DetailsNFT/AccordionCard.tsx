import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

interface Props {
  title: string;
  titleStyles?: any;
  children: any;
  Icon?: any;
}

const AccordionCard: React.FC<Props> = ({
  title,
  titleStyles,
  children,
  Icon,
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex w-full justify-between items-center rounded-lg py-1 text-left text-xs font-medium text-gray outline-none focus:outline-none hover:duration-300 hover:text-blue-light'>
            <span style={titleStyles}>
              {Icon && (
                <Icon
                  className={`${
                    open ? 'dark:text-blue-light' : 'dark:text-white'
                  } text-blue mr-2 `}
                />
              )}
              {title}
            </span>
            <ChevronUpIcon
              className={`${
                !open ? 'rotate-180 transform' : ''
              } h-8 w-8 text-blue-light`}
            />
          </Disclosure.Button>
          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Disclosure.Panel className='pt-1 pb-6 text-xs text-white duration-300'>
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default AccordionCard;
