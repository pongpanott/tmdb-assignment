import SkeletonLoading from '../skeleton-loading';
import CardWrapper from './card-wrapper';

const MovieCardLoading = () => {
  return (
    <CardWrapper>
      <SkeletonLoading className='w-full h-[370px] rounded-none' />
      <SkeletonLoading className='h-4 w-[80px]' />
      <div>
        <SkeletonLoading className='h-6 w-full' wrapperClassName='p-[2px]' />
        <SkeletonLoading className='h-6 w-[160px]' wrapperClassName='p-[2px]' />
      </div>
      <SkeletonLoading className='h-4 w-[120px]' />
    </CardWrapper>
  );
};

export default MovieCardLoading;
