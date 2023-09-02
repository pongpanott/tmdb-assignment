const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex flex-col gap-y-3 relative w-[250px]'>{children}</div>;
};

export default CardWrapper;
