import { cx } from '@emotion/css';
import MovieCard from 'common/base-ui/movie-card';
import MovieCardLoading from 'common/base-ui/movie-card/loading';
import { Movie } from 'common/model/movie/movie';
import { useMemo } from 'react';
import GridWrapper from './grid-wrapper';

type MovieGridProps = {
  movies: Movie[];
  isLoading: boolean;
  searchTerm: string;
};

const MovieGrid = ({ movies, isLoading, searchTerm }: MovieGridProps) => {
  const noMoviesFound = useMemo(() => {
    return !!(movies.length === 0 && searchTerm);
  }, [movies, searchTerm]);

  const isMovieExist = useMemo(() => {
    return movies.length > 0;
  }, [movies]);

  if (isLoading && !isMovieExist) {
    return (
      <GridWrapper>
        {Array.from({ length: 16 }).map((_, index) => (
          <MovieCardLoading key={index} />
        ))}
      </GridWrapper>
    );
  }

  if (!isLoading && noMoviesFound) {
    return (
      <div className='text-center'>
        <p className='text-lg text-red-700'>No movies found.</p>
      </div>
    );
  } else if (!isLoading && isMovieExist) {
    return (
      <GridWrapper>
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </GridWrapper>
    );
  } else {
    return (
      <div className='text-center'>
        <p className='text-lg text-grey-900'>{`Something wrong!! Can't get movies.`}</p>
      </div>
    );
  }
};

export default MovieGrid;
