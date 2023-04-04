import React from 'react';

import { Slide } from 'react-slideshow-image';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Carousel({ children }: Props): React.ReactElement {
  const indicators = (_index: number | undefined) => (
    <div className='indicator' />
  );

  return <Slide arrows={false}>{children}</Slide>;
}
