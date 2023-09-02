import { useEffect } from 'react';
import AppRouter from './common/router';
import { useAppDispatch } from 'redux/hooks';
import { updateWithLocal } from 'redux/slices/favorite-slice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateWithLocal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppRouter />;
}

export default App;
