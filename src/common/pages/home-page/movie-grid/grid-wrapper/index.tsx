import React from 'react';

type GridWrapperProps = {
  children: React.ReactNode;
};

const GridWrapper = ({ children }: GridWrapperProps) => {
  return (
    <div className='flex-wrap flex gap-8 justify-center md:gap-12 md:grid md:grid-cols-2 md:w-fit md:mx-auto lg:grid-cols-3 xl:grid-cols-4 lg:gap-16 xl:gap-20'>
      {children}
    </div>
  );
};

export default GridWrapper;
