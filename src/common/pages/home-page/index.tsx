import MovieGrid from 'common/base-ui/movie-grid';
import SearchBar from 'common/base-ui/search-bar';
import { useViewModel } from './viewmodel';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { movies, isLoading, handleSeachInput, searchTerm } = useViewModel();
  const navigate = useNavigate();

  return (
    <div className='p-6 flex-1'>
      <SearchBar
        handleSeachInput={handleSeachInput}
        searchTerm={searchTerm}
        buttonTitle='Favorite movies'
        onClick={() => navigate('favorite')}
      />
      <MovieGrid movies={movies} isLoading={isLoading} searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
