import { Movie } from 'common/model/movie/movie';

type SavedFavType = Movie[];

export const saveFavorites = (favList: Movie[]) =>
  localStorage.setItem('favorite', JSON.stringify(favList));

export const getFavorites = () => {
  const getFromLocalStorage = localStorage.getItem('favorite');

  if (getFromLocalStorage) {
    return JSON.parse(getFromLocalStorage) as SavedFavType;
  } else {
    return [];
  }
};
