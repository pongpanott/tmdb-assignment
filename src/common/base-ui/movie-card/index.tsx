import React from 'react';
import { Movie } from '../../model/movie/movie';
import FavoriteButton from './favorite-button';
import { ReactComponent as ThumbIcon } from 'assets/icons/thumbs-up.svg';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className='flex flex-col gap-y-3 relative'>
      <img alt={movie.title} src={movie.image} className='w-[250px] h-[370px] object-cover' />
      <FavoriteButton />

      <p className='text-grey-400 text-xs font-bold'>{movie.releaseDate}</p>
      <p className='text-grey-900 text-lg font-bold'>{movie.title}</p>
      <div className='flex items-center gap-x-2'>
        <ThumbIcon className='w-4 h-4' />
        <p className='text-sm'>{movie.score}</p>
      </div>
    </div>
  );
};

export default MovieCard;
