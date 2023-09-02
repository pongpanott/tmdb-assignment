import { Routes, Route } from 'react-router-dom';
import Layout from '../base-ui/layout';
import HomePage from '../pages/home-page';
import NotFoundPage from '../pages/not-found-page';
import FavoritePage from 'common/pages/favorite-page';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={'favorite'} element={<FavoritePage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
