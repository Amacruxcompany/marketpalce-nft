import WatchLaterIcon from '@mui/icons-material/WatchLater';

interface TimeProps {
  number: number;
  timeValue: string;
}

const Time = ({ number, timeValue }: TimeProps) => {
  return (
    <li className='flex flex-col'>
      <span className='bg-gradient-to-tr from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.10)] shadow-lg rounded-sm text-center text-2xl w-14 py-0.5'>
        {number}
      </span>
      <span className='text-[9px] text-gray text-center uppercase mt-1'>
        {timeValue}
      </span>
    </li>
  );
};

const AuctionTimer = () => {
  return (
    <article>
      <h3 className='flex gap-2'>
        <WatchLaterIcon className='w-6 h-6 text-blue dark:text-blue-light' />{' '}
        <strong className='text-gray text-sm font-semibold'>
          Auction ends in:
        </strong>
      </h3>
      <ul className='flex gap-4 mt-2'>
        <Time number={2} timeValue='Days' />
        <Time number={4} timeValue='Hours' />
        <Time number={24} timeValue='Minutes' />
        <Time number={24} timeValue='Seconds' />
      </ul>
    </article>
  );
};

export default AuctionTimer;
