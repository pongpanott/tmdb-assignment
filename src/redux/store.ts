import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favoriteReducer from './slices/favorite-slice';

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
