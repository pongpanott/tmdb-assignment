import { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectFavoriteList } from 'redux/slices/favorite-slice';

export const useViewModel = () => {
  const favorites = useAppSelector(selectFavoriteList);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSeachInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value.trim();

    setSearchTerm(searchInput);
  };

  const filterMoviesBySearchTerm = () => {
    if (searchTerm)
      return favorites.filter((item) => item.title.toLowerCase().includes(searchTerm));

    return favorites;
  };

  return {
    favorites,
    searchTerm,
    setSearchTerm,
    filterMoviesBySearchTerm,
    handleSeachInput,
  };
};
