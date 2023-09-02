import MovieGrid from './movie-grid';
import SearchBar from './search-bar';
import { useViewModel } from './viewmodel';

const HomePage = () => {
  const { movies, isLoading, handleSeachInput, searchTerm } = useViewModel();

  return (
    <div className='p-6 flex-1'>
      <SearchBar handleSeachInput={handleSeachInput} searchTerm={searchTerm} />
      <MovieGrid movies={movies} isLoading={isLoading} searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
