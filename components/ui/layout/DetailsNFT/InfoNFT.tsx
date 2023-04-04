import Image from 'next/image';
import {
  AccordionCard,
  AuctionTimer,
  Orders,
  PriceCard,
  PropertieCard,
} from '@ui';
import NotesIcon from '@mui/icons-material/Notes';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { DetailsMode } from '@_types/hooks';
import ExtensionIcon from '@mui/icons-material/Extension';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import properties from '../../../../content/properties.json';
import details from '../../../../content/details.json';

interface TagProps {
  text: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className = '' }) => {
  return (
    <span
      className={`bg-blue text-blue-light dark:bg-blue-light dark:text-blue px-1 py-1 rounded-md text-sm shadow-md font-semibold ${className}`}
    >
      {text}
    </span>
  );
};

interface InfoNFT {
  detailsMode?: string;
}

const InfoNFT = ({ detailsMode = DetailsMode.HightlightsMode }: InfoNFT) => {
  const isHightlightMode = detailsMode === DetailsMode.HightlightsMode;
  const isClearanceMode = detailsMode === DetailsMode.ClearanceMode;
  const isAuctionMode = detailsMode === DetailsMode.AuctionsMode;

  return (
    <section className='row-start-1 md:row-auto'>
      <header className='bg-gradient-to-r from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.10)] shadow-lg flex justify-between items-center pl-3 pr-6 py-2 mb-3 rounded-2xl'>
        <h1 className='text-2xl font-semibold'>Bored APE V.I.P</h1>
        <Tag text='ART' />
      </header>
      <section>
        <header className='mb-4'>
          <div className='flex justify-between items-center'>
            <h3 className='text-black dark:text-gray text-sm'>
              Owned by{' '}
              <strong className={`text-blue dark:text-blue-light`}>Jose</strong>
            </h3>
            <div className='flex gap-4 items-center'>
              <figure className='rounded-[100%] overflow-hidden'>
                <Image
                  src='/images/default_avatar.png'
                  width={30}
                  height={30}
                  alt='profile avatar'
                  objectFit='cover'
                />
              </figure>
              <span className={`text-black dark:text-gray text-sm`}>
                Creator{' '}
                <strong className={`text-black dark:text-white`}>DSC</strong>
              </span>
            </div>
          </div>
          <h2 className='text-sm text-blue dark:text-blue-light mt-2'>
            Neon District
          </h2>
        </header>
        <section className='mb-4'>
          <h3 className='text-xs dark:text-gray'>Contract Address</h3>
          <p className='text-sm mt-2 text-blue dark:text-white'>
            0xhstv578abdfa5619na1n459824m <Tag text='BSC' className='ml-2' />
          </p>
          <h3 className='text-xs dark:text-gray mt-4'>Token ID</h3>
          <p className='text-sm mt-2 text-blue dark:text-white'>0133</p>
        </section>
        <section className='mb-6'>
          <AccordionCard title='Description' Icon={NotesIcon}>
            <p className='text-black dark:text-white'>
              Lörem ipsum teska kror buvint. Detesk lagt, endless aisles då
              Rickard Ahmed diläde. Refulig käning budgetstup ad käliga.
              Depreskap mögt plus pehönade lysa Rolf Lundqvist. Poddradio
              hypose. Kontrav multijivar men vilig abaktiv. Ståhjuling trent,
              och red respektive pren dolyr. Krod trir agflation inte pressade.
              Fade antivision doren. Låsänyk hexalaktig. Preism rett. Epir
              kaligt mid ekodiktisk åbelt. Du kan vara drabbad. Sagt Anna
              Martinsson i gigan. Föterat vadusa.{' '}
            </p>
          </AccordionCard>
          <AccordionCard title='Properties' Icon={ViewInArIcon}>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {properties.map((propertie, index) => (
                <PropertieCard key={index} {...propertie} />
              ))}
            </div>
          </AccordionCard>
          <AccordionCard title='Details' Icon={ExtensionIcon}>
            <ul>
              {details.map((detail, index) => (
                <li
                  key={index + detail.name}
                  className='flex justify-between text-sm mb-2'
                >
                  <h3 className='text-black dark:text-white'>{detail.name}</h3>{' '}
                  <p className='text-blue dark:text-blue-light'>
                    {detail.value}
                  </p>
                </li>
              ))}
            </ul>
          </AccordionCard>
          <AccordionCard title='About neon district' Icon={MenuBookIcon}>
            <p className='text-black dark:text-white'>
              Lörem ipsum teska kror buvint. Detesk lagt, endless aisles då
              Rickard Ahmed diläde. Refulig käning budgetstup ad käliga.
              Depreskap mögt plus pehönade lysa Rolf Lundqvist. Poddradio
              hypose. Kontrav multijivar men vilig abaktiv. Ståhjuling trent,
              och red respektive pren dolyr. Krod trir agflation inte pressade.
              Fade antivision doren. Låsänyk hexalaktig. Preism rett. Epir
              kaligt mid ekodiktisk åbelt. Du kan vara drabbad. Sagt Anna
              Martinsson i gigan. Föterat vadusa.{' '}
            </p>
          </AccordionCard>
        </section>
        {(isHightlightMode || isClearanceMode) && (
          <section
            className={`${
              isClearanceMode && 'grid-cols-2'
            } grid justify-center gap-4 md:flex md:justify-end md:flex-row`}
          >
            {isClearanceMode && <PriceCard hasDecoration={true} />}
            <PriceCard />
          </section>
        )}
        {isAuctionMode && (
          <section>
            <div className='flex flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between'>
              <PriceCard />
              <AuctionTimer />
            </div>
            <Orders orders={3} />
          </section>
        )}
      </section>
    </section>
  );
};

export default InfoNFT;
