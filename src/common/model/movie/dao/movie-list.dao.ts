import BaseDAO from 'common/service/dao/base.dao';
import { Movie } from '../movie';
import MovieDAO, { MovieResponse } from './movie.dao';

export type MoviesListResponse = {
  page: number;
  results: MovieResponse[];
  total_pages: number;
};

type MoveListResponseDAO = {
  page: number;
  movies: Movie[];
  totalPage: number;
};

class MovieListDAO implements BaseDAO<MoveListResponseDAO> {
  private movies;

  constructor(data: MoviesListResponse) {
    this.movies = data;
  }

  getBodyJson = () => {
    return {
      page: this.movies.page,
      movies: this.movies.results.map((item: MovieResponse) => {
        return new MovieDAO({ ...item }).getBodyJson();
      }),
      totalPage: this.movies.total_pages,
    };
  };
}

export default MovieListDAO;
