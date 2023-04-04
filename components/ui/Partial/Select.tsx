/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';

interface Props {
  selected: any;
  setSelected: (val: any) => void;
  options: any[];
}

export default function Select({ selected, setSelected, options }: Props) {
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-full cursor-default rounded-lg bg-transparent-custom p-3 text-left shadow-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
              <div className='flex items-center'>
                {selected.icon && (
                  <div>
                    <img
                      src={selected.icon}
                      alt='Icon'
                      className='h-6 w-6 mr-2'
                    />
                  </div>
                )}
                <span className='block truncate text-sm md:text-base'>
                  {selected.name}
                </span>
              </div>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 duration-500' : 'rotate-0 duration-500'
                  } h-5 w-5 md:h-7 md:w-7 text-gray-400 transition-all`}
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-transparent-custom py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {options.map((option, optionIdx) => (
                  <Listbox.Option
                    key={optionIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-8 pr-4 ${
                        active
                          ? 'bg-violet-500/75 text-slate-50'
                          : 'text-gray-900'
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <div className='flex items-center'>
                        {option.icon && (
                          <div>
                            <img
                              src={option.icon}
                              alt='Icon'
                              className='h-8 w-8 mr-2'
                            />
                          </div>
                        )}
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.name}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-2 text-violet-100'>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}
