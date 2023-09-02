import MovieCard from 'common/base-ui/movie-card';
import MovieCardLoading from 'common/base-ui/movie-card/loading';
import { Movie } from 'common/model/movie/movie';

type MovieGridProps = {
  movies: Movie[];
  isLoading: boolean;
};

const MovieGrid = ({ movies, isLoading }: MovieGridProps) => {
  return (
    <div className='flex flex-wrap gap-8 justify-center md:gap-12 md:grid md:grid-cols-2 md:w-fit md:mx-auto lg:grid-cols-3 xl:grid-cols-4 lg:gap-16 xl:gap-20'>
      {isLoading ? (
        <>
          {Array.from({ length: 16 }).map((_, index) => (
            <MovieCardLoading key={index} />
          ))}
        </>
      ) : (
        <>
          {movies.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default MovieGrid;
