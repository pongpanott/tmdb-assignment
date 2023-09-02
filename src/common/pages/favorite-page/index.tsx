import React from 'react';
import { useViewModel } from './viewmodel';
import MovieGrid from 'common/base-ui/movie-grid';
import SearchBar from 'common/base-ui/search-bar';
import { useNavigate } from 'react-router-dom';

const FavoritePage = () => {
  const { searchTerm, filterMoviesBySearchTerm, handleSeachInput } = useViewModel();
  const navigate = useNavigate();

  return (
    <div className='p-6 flex-1'>
      <SearchBar
        handleSeachInput={handleSeachInput}
        searchTerm={searchTerm}
        buttonTitle='All movies'
        onClick={() => navigate('/')}
      />
      <MovieGrid movies={filterMoviesBySearchTerm()} isLoading={false} searchTerm={searchTerm} />
    </div>
  );
};

export default FavoritePage;
