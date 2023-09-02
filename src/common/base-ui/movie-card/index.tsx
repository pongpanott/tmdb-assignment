import React from 'react';
import { Movie } from '../../model/movie/movie';
import FavoriteButton from './favorite-button';
import { ReactComponent as ThumbIcon } from 'assets/icons/thumbs-up.svg';
import CardWrapper from './card-wrapper';
import { addToFav, removeFromFav, selectFavoriteList } from 'redux/slices/favorite-slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { handleImageLoadFail } from 'common/utils/handle-image-load-fail';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const favorites = useAppSelector(selectFavoriteList);
  const dispatch = useAppDispatch();

  const isFav = !!favorites.find((item) => item.id === movie.id);

  return (
    <CardWrapper>
      <img
        alt={movie.title}
        src={movie.image}
        onError={(e) => {
          handleImageLoadFail(e);
        }}
        className='w-full h-[370px] object-cover'
      />
      <FavoriteButton
        isFav={isFav}
        onClick={() => (isFav ? dispatch(removeFromFav(movie)) : dispatch(addToFav(movie)))}
      />

      <p className='text-grey-400 text-xs font-bold'>{movie.releaseDate}</p>
      <p className='text-grey-900 text-lg font-bold line-clamp-2 min-h-[56px]'>{movie.title}</p>
      <div className='flex items-center gap-x-2'>
        <ThumbIcon className='w-4 h-4 text-blue-600' />
        <p className='text-sm'>{movie.score}</p>
      </div>
    </CardWrapper>
  );
};

export default MovieCard;
