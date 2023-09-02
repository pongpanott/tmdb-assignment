import { ReactComponent as StartIcon } from 'assets/icons/star-solid.svg';

const FavoriteButton = () => {
  return (
    <button type='button' className='absolute top-4 right-4'>
      <StartIcon className='text-yellow-500 w-8 h-8' />
    </button>
  );
};

export default FavoriteButton;
