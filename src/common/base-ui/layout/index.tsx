import { Outlet } from 'react-router';
import Navbar from './navbar';

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col flex-1 font-sans'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
