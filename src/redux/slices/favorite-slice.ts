import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { getFavorites, saveFavorites } from 'common/utils/favorite-saver';
import { Movie } from 'common/model/movie/movie';

export interface FavoriteState {
  favoriteList: Movie[];
}

const initialState: FavoriteState = {
  favoriteList: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<Movie>) => {
      const newMovie = { ...action.payload };

      const currentFavList = state.favoriteList;
      const updatedFavList = [...currentFavList, newMovie];

      saveFavorites(updatedFavList);
      state.favoriteList = updatedFavList;
    },
    removeFromFav: (state, action: PayloadAction<Movie>) => {
      const currentList = state.favoriteList;
      const findItem = currentList.findIndex((item) => item.id === action.payload.id);

      if (findItem > -1) {
        if (currentList.length === 1) {
          state.favoriteList = [];
        } else {
          const updatedList = currentList.filter((item) => item.id !== action.payload.id);

          state.favoriteList = updatedList;
        }
      }
    },
    updateWithLocal: (state) => {
      const localList = getFavorites();

      state.favoriteList = localList;
    },
  },
});

export const { addToFav, removeFromFav, updateWithLocal } = favoriteSlice.actions;

export const selectFavoriteList = (state: RootState) => state.favorite.favoriteList;

export default favoriteSlice.reducer;
