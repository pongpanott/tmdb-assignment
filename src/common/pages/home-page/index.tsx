import MovieGrid from './movie-grid';
import { useViewModel } from './viewmodel';

const HomePage = () => {
  const { movies, isLoading } = useViewModel();

  return (
    <div className='p-4 flex-1'>
      <MovieGrid movies={movies} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
