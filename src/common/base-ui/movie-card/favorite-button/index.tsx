import { ReactComponent as StartIcon } from 'assets/icons/star-solid.svg';

const FavoriteButton = () => {
  return (
    <button type='button' className='absolute top-2 right-2'>
      <StartIcon className='text-yellow-500 w-6 h-6' />
    </button>
  );
};

export default FavoriteButton;
