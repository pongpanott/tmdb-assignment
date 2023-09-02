import MovieGrid from './movie-grid';

const HomePage = () => {
  return (
    <div className='flex flex-col flex-1 items-center justify-center border-4 border-blue-500'>
      <MovieGrid />
    </div>
  );
};

export default HomePage;
