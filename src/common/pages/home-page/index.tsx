import MovieGrid from 'common/base-ui/movie-grid';
import SearchBar from 'common/base-ui/search-bar';
import { useViewModel } from './viewmodel';
import { useNavigate } from 'react-router-dom';
import Button from 'common/base-ui/button';

const HomePage = () => {
  const {
    movies,
    isLoading,
    handleSeachInput,
    searchTerm,
    handleLoadMoreMovie,
    isLoadingMore,
    isLastPage,
    handleClearSearch,
  } = useViewModel();
  const navigate = useNavigate();

  return (
    <div className='p-6 flex-1'>
      <SearchBar
        handleSeachInput={handleSeachInput}
        handleClearSearch={handleClearSearch}
        searchTerm={searchTerm}
        buttonTitle='Favorite movies'
        onClick={() => navigate('favorite')}
      />
      <MovieGrid movies={movies} isLoading={isLoading} searchTerm={searchTerm} />

      {!isLastPage ? (
        <div className='my-4 md:my-8 flex'>
          <Button
            title='Load more'
            onClick={handleLoadMoreMovie}
            className='mx-auto'
            disabled={isLoading}
            loading={isLoadingMore}
          />
        </div>
      ) : null}
    </div>
  );
};

export default HomePage;
