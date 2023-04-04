import { Footer } from '@ui/Footer';
import { FunctionComponent } from 'react';
import Navbar from '../navbar/navbar';

interface Props {
  children: React.ReactNode;
  hasMargin?: boolean;
}

const BaseLayout: FunctionComponent<Props> = ({
  children,
  hasMargin = true,
}) => {
  return (
    <>
      <Navbar />
      <div className='py-16 bg-gray-50 overflow-hidden min-h-screen'>
        <div
          className={`${
            hasMargin && 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          } space-y-8`}
        >
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
