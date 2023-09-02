import { Routes, Route } from 'react-router-dom';
import Layout from '../base-ui/layout';
import HomePage from '../pages/home-page';
import NotFoundPage from '../pages/not-found-page';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
