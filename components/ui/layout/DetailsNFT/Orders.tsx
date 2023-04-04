import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import GavelIcon from '@mui/icons-material/Gavel';
import EthereumIcon from '@ui/nft/EthereumIcon';
import BNBIcon from '@ui/nft/BNBIcon';

interface Props {
  orders?: number;
}

const TableItem = () => {
  return (
    <tr className='border-t border-blue-light'>
      <td className=' pl-2'>1</td>
      <td>ads...1233</td>
      <td className='flex items-center gap-2 justify-center content-center py-2'>
        <BNBIcon width='14' height='14' />
        14
      </td>
      <td>03/02/2002 at 10:30:03</td>
    </tr>
  );
};

const Table = ({ orders = 0 }: Props) => {
  const orderArray = [];

  for (let i = 0; i < orders; i++) {
    orderArray[i] = '';
  }

  return (
    <table className='w-full text-center'>
      <tr className='border-t border-blue-light'>
        <th className='py-3 pl-2'>#</th>
        <th>Address</th>
        <th>Highest Bid</th>
        <th>Date</th>
      </tr>
      {orderArray.map((item, index) => (
        <TableItem key={`order-${index}`} />
      ))}
    </table>
  );
};

const Orders = ({ orders }: Props) => {
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <article className='bg-gradient-to-tr from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.10)] shadow-lg mt-10 rounded-2xl'>
          <Disclosure.Button className='flex w-full justify-between items-center rounded-lg py-1 px-4 text-left text-sm font-semibold dark:text-white uppercase outline-none focus:outline-none hover:duration-300 hover:text-blue-light'>
            <span>
              <GavelIcon className='w-4 h-4 text-blue dark:text-blue-light mr-2' />
              Bidding Orders
            </span>
            <ChevronUpIcon
              className={`${
                !open ? 'rotate-180 transform' : ''
              } h-8 w-8 dark:text-blue-light`}
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
            <Disclosure.Panel className='pt-1 pb-1 text-xs dark:text-white duration-300'>
              <Table orders={orders} />
            </Disclosure.Panel>
          </Transition>
        </article>
      )}
    </Disclosure>
  );
};

export default Orders;
