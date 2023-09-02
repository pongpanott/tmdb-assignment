import { cx } from '@emotion/css';
import { ReactComponent as StartIcon } from 'assets/icons/star-solid.svg';

type FavoriteButtonProps = { isFav: boolean; onClick: () => void };

const FavoriteButton = ({ isFav, onClick }: FavoriteButtonProps) => {
  return (
    <button type='button' className='absolute top-2 right-2' onClick={onClick}>
      <StartIcon
        className={cx(isFav ? 'text-yellow-300' : 'text-white/50 hover:text-yellow-100', 'w-6 h-6')}
      />
    </button>
  );
};

export default FavoriteButton;
