import MovieCard from 'common/base-ui/movie-card';
import MovieDAO from 'common/model/movie/dao/movie.dao';

const mockMovie = new MovieDAO({
  id: 615656,
  title: 'Meg 2: The Trench',
  image: 'https://image.tmdb.org/t/p/w300/drCySAAAvegq1vQRGRqPKN9f00w.jpg',
  releaseDate: '2023-08-02',
  score: 8.8,
}).getBodyJson();

const MovieGrid = () => {
  return (
    <div>
      <MovieCard movie={mockMovie} />
    </div>
  );
};

export default MovieGrid;
