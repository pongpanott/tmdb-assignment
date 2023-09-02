import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navgiate = useNavigate();

  return (
    <nav className='px-4 py-3 shadow-md md:px-8 md:py-6'>
      <button
        type='button'
        className='font-bold text-lg text-blue-700'
        onClick={() => navgiate('/')}
      >
        TMDB
      </button>
    </nav>
  );
};

export default Navbar;
